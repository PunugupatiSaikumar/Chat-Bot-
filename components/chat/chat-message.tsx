"use client";

import { AlertTriangle, BadgeCheck, BookOpenText, Heart } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { ChatMessage as ChatMessageType } from "@/types/chat";
import { PromptChips } from "./prompt-chips";

interface ChatMessageProps {
  message: ChatMessageType;
  onFollowUpSelect: (prompt: string) => void;
}

function severityStyles(severity?: ChatMessageType["severity"]): string {
  if (severity === "urgent") return "bg-naya-urgent/10 text-naya-urgent border-naya-urgent/30";
  if (severity === "monitor") return "bg-naya-caution/10 text-naya-caution border-naya-caution/30";
  return "bg-naya-success/10 text-naya-success border-naya-success/30";
}

export function ChatMessage({ message, onFollowUpSelect }: ChatMessageProps) {
  const isUser = message.role === "user";

  if (isUser) {
    return (
      <div className="flex justify-end">
        <div className="max-w-[86%] rounded-2xl rounded-br-md bg-gradient-to-br from-naya-rose to-naya-roseDeep px-4 py-2.5 text-sm text-white shadow-soft">
          {message.content}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {message.showEmergencyBanner && (
        <div
          role="alert"
          className="rounded-xl border border-naya-urgent/25 bg-red-50 px-3 py-2 text-xs text-naya-urgent"
        >
          <div className="flex items-start gap-2">
            <AlertTriangle className="mt-0.5 h-4 w-4" />
            <p>
              Some symptoms in your message can be serious. If anyone is in immediate danger, call
              local emergency services now.
            </p>
          </div>
        </div>
      )}

      <div className="max-w-[95%] rounded-2xl rounded-bl-md border border-naya-line bg-white/95 px-4 py-3 text-sm text-naya-ink shadow-soft backdrop-blur-sm">
        <ReactMarkdown
          components={{
            h1: ({ children }) => <h4 className="mb-2 mt-3 text-sm font-semibold">{children}</h4>,
            h2: ({ children }) => <h4 className="mb-2 mt-3 text-sm font-semibold">{children}</h4>,
            p: ({ children }) => <p className="mb-2 leading-relaxed last:mb-0">{children}</p>,
            ul: ({ children }) => <ul className="mb-2 list-disc space-y-1 pl-4">{children}</ul>,
            li: ({ children }) => <li className="leading-relaxed">{children}</li>
          }}
        >
          {message.content}
        </ReactMarkdown>
      </div>

      {message.severity && (
        <span className={`inline-flex rounded-full border px-2 py-1 text-[11px] ${severityStyles(message.severity)}`}>
          {message.severity === "common"
            ? "Common / Monitor"
            : message.severity === "monitor"
              ? "Monitor / Call Provider"
              : "Urgent / Escalate"}
        </span>
      )}

      {message.cards?.length ? (
        <div className="space-y-2 pt-1">
          {message.cards.map((card) => (
            <div
              key={`${message.id}-${card.type}-${card.title}`}
              className="rounded-xl border border-naya-line bg-gradient-to-br from-white to-naya-ivory px-3 py-2.5"
            >
              <div className="mb-1 flex items-center gap-2 text-xs font-semibold text-naya-mauve">
                {card.type === "urgent" ? (
                  <AlertTriangle className="h-3.5 w-3.5" />
                ) : card.type === "reassurance" ? (
                  <Heart className="h-3.5 w-3.5" />
                ) : (
                  <BadgeCheck className="h-3.5 w-3.5" />
                )}
                {card.title}
              </div>
              <ul className="list-disc space-y-1 pl-4 text-xs text-naya-ink/90">
                {card.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : null}

      {message.sources?.length ? (
        <div className="flex flex-wrap items-center gap-2 text-[11px] text-naya-mauve">
          <BookOpenText className="h-3.5 w-3.5" />
          {message.sources.map((source) => (
            <span key={source} className="rounded-full border border-naya-line bg-white px-2 py-0.5">
              {source}
            </span>
          ))}
          <span className="rounded-full bg-naya-shell px-2 py-0.5 text-naya-mauve">
            Reviewed guidance
          </span>
        </div>
      ) : null}

      {message.followUps?.length ? (
        <div className="space-y-2">
          <p className="text-xs font-medium text-naya-mauve">Helpful next questions</p>
          <PromptChips prompts={message.followUps} onSelect={onFollowUpSelect} variant="subtle" />
        </div>
      ) : null}
    </div>
  );
}
