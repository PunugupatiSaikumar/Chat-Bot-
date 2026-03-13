import { TriageResult } from "@/types/chat";

const LEVEL_3_PATTERNS = [
  /seizure/i,
  /chest pain/i,
  /trouble breathing|difficulty breathing|can't breathe/i,
  /suicidal|kill myself|self harm|harm myself/i,
  /harm(ing)? (my )?baby/i,
  /blue lips|bluish/i,
  /unresponsive|not responsive|won't wake/i
];

const LEVEL_2_PATTERNS = [
  /heavy bleeding|soaking .*pad/i,
  /large clot|golf ball clot/i,
  /dizz(y|iness)|faint/i,
  /severe headache.*vision/i,
  /worsening anxiety|panic|overwhelmed all the time/i,
  /dehydrated|dry mouth|no wet diaper/i,
  /fever|temperature|feels hot/i
];

const UNDER_THREE_MONTHS_PATTERNS = [
  /under 3 months|under three months/i,
  /\b([0-9]|1[01])\s?(week|weeks)\b/i,
  /\b([0-2])\s?(month|months)\b/i
];

function hasAny(patterns: RegExp[], text: string): boolean {
  return patterns.some((pattern) => pattern.test(text));
}

function isBabyUnderThreeMonths(text: string): boolean {
  return hasAny(UNDER_THREE_MONTHS_PATTERNS, text);
}

export function runTriage(query: string): TriageResult {
  const normalized = query.toLowerCase();
  const reasons: string[] = [];

  if (hasAny(LEVEL_3_PATTERNS, normalized)) {
    reasons.push("Detected emergency red-flag symptom language.");
    return {
      level: "level_3",
      severity: "urgent",
      reasons,
      emergencyBanner: true
    };
  }

  // Explicit demo safety rule: infant under 3 months + fever mention => urgent.
  if (isBabyUnderThreeMonths(normalized) && /fever|temperature|feels hot/i.test(normalized)) {
    reasons.push("Infant under 3 months with fever concern.");
    return {
      level: "level_3",
      severity: "urgent",
      reasons,
      emergencyBanner: true
    };
  }

  if (
    /bleeding/i.test(normalized) &&
    /soaking|hour|large clot|golf ball|dizzy|faint/i.test(normalized)
  ) {
    reasons.push("Postpartum heavy bleeding concern with concerning qualifiers.");
    return {
      level: "level_3",
      severity: "urgent",
      reasons,
      emergencyBanner: true
    };
  }

  if (hasAny(LEVEL_2_PATTERNS, normalized)) {
    reasons.push("Concerning symptoms suggest provider follow-up soon.");
    return {
      level: "level_2",
      severity: "monitor",
      reasons,
      emergencyBanner: false
    };
  }

  reasons.push("No immediate red flags detected from current text.");
  return {
    level: "level_1",
    severity: "common",
    reasons,
    emergencyBanner: false
  };
}
