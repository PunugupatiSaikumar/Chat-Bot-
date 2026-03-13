import { getKnowledgeByTopic, classifyTopic } from "@/lib/knowledge";
import { trackEvent } from "@/lib/analytics/events";
import { getOpenAIClient } from "@/lib/openai/client";
import { NAYA_SYSTEM_PROMPT } from "@/lib/openai/system-prompt";
import { runTriage } from "@/lib/triage/engine";
import { ChatMessage, ChatResponseBody, KnowledgeEntry, TriageResult } from "@/types/chat";

function buildStructuredDraft(knowledge: KnowledgeEntry, triage: TriageResult): string {
  const urgencyLine =
    triage.level === "level_3"
      ? knowledge.emergency_escalation
      : triage.level === "level_2"
        ? "This pattern may not be an emergency, but it should be reviewed by your clinician soon."
        : "No immediate emergency signs are obvious from your message, but keep monitoring changes.";

  return `
Supportive opener:
${knowledge.reassurance}

What may be going on:
${knowledge.summary}

What to do now:
${knowledge.home_care_tips.map((tip) => `- ${tip}`).join("\n")}

When to call provider:
${knowledge.provider_follow_up.map((item) => `- ${item}`).join("\n")}

When to seek urgent care:
${urgencyLine}
- ${knowledge.red_flags.slice(0, 3).join("\n- ")}

Follow-up suggestions:
${knowledge.suggested_questions.slice(0, 4).map((q) => `- ${q}`).join("\n")}
`.trim();
}

function parseFollowUps(markdown: string, fallback: string[]): string[] {
  const lines = markdown.split("\n").map((line) => line.trim());
  const suggestions = lines
    .filter((line) => /^[-*]\s/.test(line))
    .map((line) => line.replace(/^[-*]\s*/, ""))
    .slice(-4);

  return suggestions.length >= 2 ? suggestions : fallback.slice(0, 4);
}

function buildCards(knowledge: KnowledgeEntry, triage: TriageResult) {
  const cards: NonNullable<ChatMessage["cards"]> = [
    {
      type: "reassurance" as const,
      title: "What is often common",
      items: [knowledge.reassurance]
    },
    {
      type: "action-now" as const,
      title: "What you can try now",
      items: knowledge.home_care_tips.slice(0, 3)
    },
    {
      type: "provider-checklist" as const,
      title: "When to call your provider",
      items: knowledge.provider_follow_up.slice(0, 3)
    }
  ];

  if (triage.level !== "level_1") {
    cards.push({
      type: "red-flags" as const,
      title: "Red flags to watch closely",
      items: knowledge.red_flags.slice(0, 4)
    });
  }

  if (triage.level === "level_3") {
    cards.unshift({
      type: "urgent" as const,
      title: "Urgent next step",
      items: [knowledge.emergency_escalation]
    });
  }

  return cards;
}

async function rewriteWithOpenAI({
  userMessage,
  triage,
  draft,
  contextLabel
}: {
  userMessage: string;
  triage: TriageResult;
  draft: string;
  contextLabel: string;
}): Promise<string | null> {
  const client = getOpenAIClient();
  if (!client) {
    return null;
  }

  const urgencyInstruction =
    triage.level === "level_3"
      ? "Use clear urgent wording and advise immediate emergency evaluation."
      : triage.level === "level_2"
        ? "Use careful wording and advise same-day or soon provider follow-up."
        : "Use reassuring but careful wording with monitoring guidance.";

  const response = await client.responses.create({
    model: "gpt-4.1-mini",
    instructions: NAYA_SYSTEM_PROMPT,
    input: `
User question:
${userMessage}

Detected context topic:
${contextLabel}

Safety layer:
- triage level: ${triage.level}
- reasoning: ${triage.reasons.join("; ")}
- instruction: ${urgencyInstruction}

Curated guidance:
${draft}
`.trim()
  }).catch((error) => {
    // Safety-first fallback: if OpenAI is unavailable/quota-limited, continue with
    // deterministic local guidance instead of failing the entire chat request.
    console.warn("OpenAI rewrite unavailable, using local draft fallback.", error);
    return null;
  });

  const text = response?.output_text?.trim();
  return text && text.length > 0 ? text : null;
}

export async function orchestrateChatReply(
  userMessage: string,
  messages: ChatMessage[]
): Promise<ChatResponseBody> {
  const classification = classifyTopic(userMessage);
  const triage = runTriage(userMessage);
  const knowledge = getKnowledgeByTopic(classification.topic);
  const draft = buildStructuredDraft(knowledge, triage);
  const rewritten = await rewriteWithOpenAI({
    userMessage,
    triage,
    draft,
    contextLabel: knowledge.label
  });

  const content = rewritten ?? draft;
  const reply: ChatMessage = {
    id: crypto.randomUUID(),
    role: "assistant",
    content,
    createdAt: new Date().toISOString(),
    triageLevel: triage.level,
    severity: triage.severity,
    sources: [knowledge.label, "NayaCare postpartum guidance"],
    followUps: parseFollowUps(content, knowledge.suggested_questions),
    showEmergencyBanner: triage.emergencyBanner,
    cards: buildCards(knowledge, triage)
  };

  const response: ChatResponseBody = {
    reply,
    usedMock: !rewritten,
    confidence: classification.confidence,
    topic: classification.topic
  };

  trackEvent("triage_evaluated", {
    message_count: messages.length,
    topic: classification.topic,
    triage_level: triage.level
  });
  return response;
}
