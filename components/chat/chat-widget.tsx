"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { AlertCircle, MessageCircleHeart, RotateCcw, Send, Shield, Sparkles, X } from "lucide-react";
import { FormEvent, useEffect, useRef, useState } from "react";
import { useChatSession } from "@/hooks/use-chat-session";
import { ChatMessage } from "./chat-message";
import { PromptChips } from "./prompt-chips";
import { TypingIndicator } from "./typing-indicator";

function formatTime(iso: string): string {
  return new Date(iso).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
}

export function ChatWidget() {
  const {
    isOpen,
    setIsOpen,
    showTooltip,
    messages,
    isLoading,
    error,
    welcomePrompts,
    submitMessage,
    restart
  } = useChatSession();
  const [input, setInput] = useState("");
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!scrollerRef.current) return;
    scrollerRef.current.scrollTop = scrollerRef.current.scrollHeight;
  }, [messages, isLoading]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!input.trim()) return;
    await submitMessage(input);
    setInput("");
  }

  const hasMessages = messages.length > 0;

  return (
    <>
      <div className="fixed bottom-5 right-5 z-40 md:bottom-6 md:right-6">
        <AnimatePresence>
          {showTooltip && !isOpen ? (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              className="mb-2 max-w-[210px] rounded-xl border border-naya-line bg-white px-3 py-2 text-xs text-naya-mauve shadow-soft"
            >
              24/7 fourth-trimester support
            </motion.div>
          ) : null}
        </AnimatePresence>

        <button
          aria-label={isOpen ? "Close Naya chat" : "Open Naya chat"}
          onClick={() => setIsOpen(!isOpen)}
          className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-naya-rose to-naya-roseDeep px-4 py-3 text-white shadow-naya transition hover:brightness-105 focus:outline-none focus:ring-4 focus:ring-naya-rose/35"
        >
          <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
            {!reducedMotion && (
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/25" />
            )}
            <MessageCircleHeart className="relative h-4 w-4" />
          </span>
          <span className="text-sm font-medium">Ask Naya</span>
        </button>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <>
            <motion.div
              aria-hidden="true"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-[#3f2a3a]/10 backdrop-blur-[2px] md:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.section
              initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.98 }}
              animate={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
              exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="fixed bottom-24 right-4 z-50 flex h-[80vh] w-[calc(100vw-2rem)] max-w-[460px] flex-col overflow-hidden rounded-[1.55rem] border border-white/70 bg-white/90 shadow-naya backdrop-blur-md md:bottom-24 md:right-6 md:h-[76vh]"
              aria-label="NayaCare chat panel"
            >
              <header className="border-b border-naya-line bg-gradient-to-b from-white to-naya-shell/60 px-4 py-3">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-naya-rose/15 text-naya-roseDeep">
                    <MessageCircleHeart className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-sm font-semibold text-naya-ink">Naya</h2>
                    <p className="text-xs text-naya-mauve">Fourth-trimester support</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={restart}
                  className="inline-flex items-center gap-1 rounded-full border border-naya-line bg-white px-2.5 py-1 text-[11px] text-naya-mauve hover:border-naya-rose"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  Restart
                </button>
              </div>
              <div className="mt-2 flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-1 rounded-full bg-naya-shell px-2.5 py-1 text-[11px] text-naya-mauve">
                  <Shield className="h-3.5 w-3.5" />
                  Informational support only
                </div>
                <div className="inline-flex items-center gap-1 rounded-full border border-naya-line bg-white px-2.5 py-1 text-[11px] text-naya-mauve">
                  <Sparkles className="h-3.5 w-3.5" />
                  Evidence-informed guidance
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="ml-auto inline-flex items-center justify-center rounded-full border border-naya-line bg-white p-1.5 text-naya-mauve hover:border-naya-rose md:hidden"
                  aria-label="Close chat"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </header>

            <div ref={scrollerRef} className="naya-scrollbar flex-1 space-y-5 overflow-y-auto bg-[linear-gradient(180deg,#fffdf9_0%,#fff9f5_100%)] px-4 py-4">
              {!hasMessages ? (
                <div className="space-y-4">
                  <div className="rounded-2xl border border-naya-line bg-white p-4 shadow-soft">
                    <h3 className="text-sm font-semibold text-naya-ink">Welcome to Naya</h3>
                    <p className="mt-2 text-sm text-naya-ink/90">
                      Calm support for newborn care, feeding, sleep, postpartum recovery, and maternal
                      mental health.
                    </p>
                    <p className="mt-2 text-xs text-naya-mauve">
                      Naya offers guidance, not diagnosis. For emergencies, contact local emergency
                      services immediately.
                    </p>
                    <div className="mt-3 grid grid-cols-2 gap-2 text-[11px] text-naya-mauve">
                      <span className="rounded-lg bg-naya-shell px-2 py-1">Newborn care</span>
                      <span className="rounded-lg bg-naya-shell px-2 py-1">Feeding support</span>
                      <span className="rounded-lg bg-naya-shell px-2 py-1">Postpartum recovery</span>
                      <span className="rounded-lg bg-naya-shell px-2 py-1">Maternal mental health</span>
                    </div>
                  </div>
                  <PromptChips prompts={welcomePrompts} onSelect={(prompt) => void submitMessage(prompt)} />
                </div>
              ) : (
                messages.map((message) => (
                  <div key={message.id} className="space-y-1">
                    <ChatMessage message={message} onFollowUpSelect={(prompt) => void submitMessage(prompt)} />
                    <p className="pl-1 text-[10px] uppercase tracking-wide text-naya-mauve/70">
                      {message.role === "assistant" ? "Naya" : "You"} • {formatTime(message.createdAt)}
                    </p>
                  </div>
                ))
              )}

              {isLoading ? <TypingIndicator /> : null}

              {error ? (
                <div className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700">
                  <AlertCircle className="mt-0.5 h-4 w-4" />
                  <p>{error}</p>
                </div>
              ) : null}
            </div>

            <footer className="sticky bottom-0 border-t border-naya-line bg-white/95 p-3 backdrop-blur-sm">
              <form onSubmit={onSubmit} className="flex items-end gap-2">
                <label htmlFor="naya-input" className="sr-only">
                  Ask Naya a question
                </label>
                <textarea
                  id="naya-input"
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" && !event.shiftKey) {
                      event.preventDefault();
                      void submitMessage(input);
                      setInput("");
                    }
                  }}
                  rows={1}
                  placeholder="Ask about feeding, sleep, recovery, or mood..."
                  className="max-h-32 min-h-10 flex-1 resize-y rounded-xl border border-naya-line bg-white px-3 py-2 text-sm text-naya-ink outline-none focus:border-naya-rose focus:ring-2 focus:ring-naya-rose/20"
                  aria-label="Chat input"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-naya-rose text-white transition hover:bg-naya-roseDeep disabled:cursor-not-allowed disabled:opacity-50"
                  aria-label="Send message"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
              <p className="mt-2 text-[11px] text-naya-mauve">
                If symptoms are severe or rapidly worsening, seek urgent in-person care.
              </p>
            </footer>
            </motion.section>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
