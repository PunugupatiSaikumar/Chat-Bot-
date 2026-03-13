export type SenderRole = "user" | "assistant" | "system";

export type TriageLevel = "level_1" | "level_2" | "level_3";

export type SeverityTag = "common" | "monitor" | "urgent";

export type KnowledgeTopic =
  | "newborn-feeding"
  | "newborn-sleep"
  | "newborn-fever"
  | "jaundice"
  | "diapering"
  | "crying-and-soothing"
  | "postpartum-bleeding"
  | "c-section-recovery"
  | "pelvic-floor"
  | "breastfeeding-pain"
  | "formula-feeding"
  | "pumping"
  | "maternal-mood"
  | "postpartum-anxiety"
  | "postpartum-depression"
  | "partner-support"
  | "when-to-call-provider"
  | "emergency-red-flags"
  | "general-fourth-trimester";

export interface KnowledgeEntry {
  topic: KnowledgeTopic;
  label: string;
  summary: string;
  reassurance: string;
  home_care_tips: string[];
  red_flags: string[];
  provider_follow_up: string[];
  emergency_escalation: string;
  suggested_questions: string[];
}

export interface ChatMessage {
  id: string;
  role: SenderRole;
  content: string;
  createdAt: string;
  triageLevel?: TriageLevel;
  severity?: SeverityTag;
  sources?: string[];
  followUps?: string[];
  showEmergencyBanner?: boolean;
  cards?: Array<{
    type:
      | "reassurance"
      | "urgent"
      | "resource"
      | "provider-checklist"
      | "red-flags"
      | "first-weeks-note"
      | "action-now";
    title: string;
    items: string[];
  }>;
}

export interface ChatRequestBody {
  userMessage: string;
  messages: ChatMessage[];
}

export interface ChatResponseBody {
  reply: ChatMessage;
  usedMock: boolean;
  confidence: number;
  topic: KnowledgeTopic;
}

export interface ClassificationResult {
  topic: KnowledgeTopic;
  confidence: number;
}

export interface TriageResult {
  level: TriageLevel;
  severity: SeverityTag;
  reasons: string[];
  emergencyBanner: boolean;
}
