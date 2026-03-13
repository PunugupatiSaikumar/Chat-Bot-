"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { trackEvent } from "@/lib/analytics/events";
import { ChatMessage, ChatResponseBody } from "@/types/chat";

const STORAGE_KEY = "nayacare-chat-session-v1";
const FIRST_TOOLTIP_KEY = "nayacare-chat-tooltip-seen";

const WELCOME_PROMPTS = [
  "Is this amount of bleeding normal?",
  "My newborn feels warm, what should I do?",
  "How do I know if this is postpartum anxiety?",
  "Why is my baby crying after every feeding?",
  "What is normal sleep in week one?"
];

interface UseChatSessionReturn {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  showTooltip: boolean;
  messages: ChatMessage[];
  isLoading: boolean;
  error: string | null;
  welcomePrompts: string[];
  submitMessage: (message: string) => Promise<void>;
  restart: () => void;
}

function streamText(text: string, onChunk: (value: string) => void): Promise<void> {
  return new Promise((resolve) => {
    let cursor = 0;
    const step = 4;
    const timer = setInterval(() => {
      cursor += step;
      onChunk(text.slice(0, cursor));
      if (cursor >= text.length) {
        clearInterval(timer);
        resolve();
      }
    }, 18);
  });
}

export function useChatSession(): UseChatSessionReturn {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const hasSeenTooltip = window.localStorage.getItem(FIRST_TOOLTIP_KEY);
    if (!hasSeenTooltip) {
      setShowTooltip(true);
      window.localStorage.setItem(FIRST_TOOLTIP_KEY, "true");
      window.setTimeout(() => setShowTooltip(false), 4500);
    }

    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as ChatMessage[];
        setMessages(parsed);
      } catch {
        window.localStorage.removeItem(STORAGE_KEY);
      }
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    function onKeyboard(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setIsOpen((current) => !current);
      }
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }
    window.addEventListener("keydown", onKeyboard);
    return () => window.removeEventListener("keydown", onKeyboard);
  }, []);

  const submitMessage = useCallback(async (messageText: string) => {
    const trimmed = messageText.trim();
    if (!trimmed || isLoading) return;

    setError(null);
    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: trimmed,
      createdAt: new Date().toISOString()
    };

    const optimisticAssistant: ChatMessage = {
      id: crypto.randomUUID(),
      role: "assistant",
      content: "",
      createdAt: new Date().toISOString()
    };

    setMessages((current) => [...current, userMessage, optimisticAssistant]);
    setIsLoading(true);
    trackEvent("chat_message_submitted", { message_length: trimmed.length });

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userMessage: trimmed,
          messages: [...messages, userMessage]
        })
      });

      if (!response.ok) {
        throw new Error("Unable to generate a response right now.");
      }

      const payload = (await response.json()) as ChatResponseBody;
      const fullMessage = payload.reply;
      trackEvent("chat_response_received", {
        triage: fullMessage.triageLevel,
        used_mock: payload.usedMock
      });
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduceMotion) {
        setMessages((current) =>
          current.map((entry) => (entry.id === optimisticAssistant.id ? fullMessage : entry))
        );
      } else {
        let runningText = "";
        await streamText(fullMessage.content, (nextText) => {
          runningText = nextText;
          setMessages((current) =>
            current.map((entry) =>
              entry.id === optimisticAssistant.id ? { ...fullMessage, content: runningText } : entry
            )
          );
        });
      }
    } catch (err) {
      setMessages((current) => current.filter((entry) => entry.id !== optimisticAssistant.id));
      setError(err instanceof Error ? err.message : "Unexpected error.");
    } finally {
      setIsLoading(false);
    }
  }, [isLoading, messages]);

  const restart = useCallback(() => {
    setMessages([]);
    setError(null);
    trackEvent("chat_restarted");
  }, []);

  return useMemo(
    () => ({
      isOpen,
      setIsOpen,
      showTooltip,
      messages,
      isLoading,
      error,
      welcomePrompts: WELCOME_PROMPTS,
      submitMessage,
      restart
    }),
    [isOpen, showTooltip, messages, isLoading, error, submitMessage, restart]
  );
}
