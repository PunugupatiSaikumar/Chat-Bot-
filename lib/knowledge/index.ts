import { KNOWLEDGE_BASE } from "@/data/knowledge";
import { ClassificationResult, KnowledgeEntry, KnowledgeTopic } from "@/types/chat";

const TOPIC_KEYWORDS: Record<KnowledgeTopic, RegExp[]> = {
  "newborn-feeding": [/feed/i, /latch/i, /milk/i, /nursing/i],
  "newborn-sleep": [/sleep/i, /nap/i, /wake/i, /night/i],
  "newborn-fever": [/fever/i, /temperature/i, /hot/i, /\b38\b/i, /100\.4/i],
  jaundice: [/jaundice/i, /yellow/i, /bilirubin/i],
  diapering: [/diaper/i, /stool/i, /poop/i, /wet diaper/i],
  "crying-and-soothing": [/cry/i, /fussy/i, /soothe/i, /colic/i],
  "postpartum-bleeding": [/bleeding/i, /lochia/i, /clot/i, /pad/i],
  "c-section-recovery": [/\bc[- ]?section\b/i, /incision/i, /scar/i],
  "pelvic-floor": [/pelvic/i, /kegel/i, /incontinence/i],
  "breastfeeding-pain": [/nipple/i, /breast pain/i, /mastitis/i, /hurt/i],
  "formula-feeding": [/formula/i, /bottle/i],
  pumping: [/pump/i, /pumping/i, /flange/i],
  "maternal-mood": [/mood/i, /sad/i, /overwhelmed/i],
  "postpartum-anxiety": [/anxiety/i, /panic/i, /racing thoughts/i, /worry/i],
  "postpartum-depression": [/depression/i, /hopeless/i, /crying/i],
  "partner-support": [/partner/i, /co-parent/i, /husband/i, /wife/i],
  "when-to-call-provider": [/when to call/i, /should i call/i],
  "emergency-red-flags": [/emergency/i, /urgent/i, /911/i],
  "general-fourth-trimester": []
};

export function classifyTopic(query: string): ClassificationResult {
  let bestTopic: KnowledgeTopic = "general-fourth-trimester";
  let bestScore = 0;
  const normalized = query.toLowerCase();

  (Object.keys(TOPIC_KEYWORDS) as KnowledgeTopic[]).forEach((topic) => {
    const matches = TOPIC_KEYWORDS[topic].reduce((score, pattern) => {
      return pattern.test(normalized) ? score + 1 : score;
    }, 0);

    if (matches > bestScore) {
      bestTopic = topic;
      bestScore = matches;
    }
  });

  const confidence = Math.max(0.35, Math.min(0.96, bestScore / 3 + 0.3));
  return { topic: bestTopic, confidence };
}

export function getKnowledgeByTopic(topic: KnowledgeTopic): KnowledgeEntry {
  return (
    KNOWLEDGE_BASE.find((entry) => entry.topic === topic) ??
    KNOWLEDGE_BASE.find((entry) => entry.topic === "general-fourth-trimester")!
  );
}
