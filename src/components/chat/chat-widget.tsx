"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  AlertTriangle,
  Loader2,
  MessageSquare,
  RotateCcw,
  Send,
  WifiOff,
  X,
  Zap,
} from "lucide-react";
import { useUiStore } from "@/lib/store";
import { cn } from "@/lib/utils";

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  error?: "network" | "rate_limit" | "timeout" | "server";
}

const WELCOME: ChatMessage = {
  id: "welcome",
  role: "assistant",
  content:
    "Hello! I'm the ELSOC Assistant. Ask me about our events, the Sparkathon, ongoing projects, the team, or how to join.",
};

const QUICK_QUESTIONS = [
  "What is ELSOC?",
  "How can I join?",
  "When is Sparkathon?",
  "What projects are you building?",
  "Contact information",
];

let nextId = 0;
const uid = () => `m-${Date.now()}-${nextId++}`;

/** Very small markdown-ish renderer: **bold** + line breaks + arrow links. */
function MessageBody({ text }: { text: string }) {
  const lines = text.split("\n");
  return (
    <>
      {lines.map((line, i) => {
        const parts = line.split(/(\*\*[^*]+\*\*)/g).map((part, j) =>
          part.startsWith("**") && part.endsWith("**") ? (
            <strong key={j} className="font-semibold text-fg">
              {part.slice(2, -2)}
            </strong>
          ) : (
            <span key={j}>{part}</span>
          ),
        );
        return (
          <span key={i}>
            {parts}
            {i < lines.length - 1 && <br />}
          </span>
        );
      })}
    </>
  );
}

export function ChatWidget() {
  const open = useUiStore((s) => s.chatOpen);
  const setOpen = useUiStore((s) => s.setChatOpen);
  const reduceMotion = useReducedMotion();

  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [mode, setMode] = useState<"ai" | "offline" | null>(null);

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, busy]);

  // Esc closes the panel
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, setOpen]);

  const send = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || busy) return;

      const userMessage: ChatMessage = { id: uid(), role: "user", content: trimmed };
      const history = [...messages.filter((m) => !m.error), userMessage];
      setMessages((prev) => [...prev, userMessage]);
      setInput("");
      setBusy(true);

      const assistantId = uid();
      const controller = new AbortController();
      abortRef.current = controller;
      const timeout = setTimeout(() => controller.abort("timeout"), 30_000);

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          signal: controller.signal,
          body: JSON.stringify({
            messages: history
              .filter((m) => m.id !== "welcome")
              .map((m) => ({ role: m.role, content: m.content })),
          }),
        });

        if (res.status === 429) {
          const data = (await res.json().catch(() => ({}))) as { retryAfter?: number };
          setMessages((prev) => [
            ...prev,
            {
              id: assistantId,
              role: "assistant",
              error: "rate_limit",
              content: `You're sending messages a little fast — give me ${
                data.retryAfter ? `about ${Math.ceil(data.retryAfter / 60)} minute(s)` : "a moment"
              } and try again.`,
            },
          ]);
          return;
        }
        if (!res.ok || !res.body) {
          throw new Error(`HTTP ${res.status}`);
        }

        setMode((res.headers.get("x-elsoc-chat-mode") as "ai" | "offline") ?? null);

        // token-by-token render
        setMessages((prev) => [...prev, { id: assistantId, role: "assistant", content: "" }]);
        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let acc = "";
        for (;;) {
          const { done, value } = await reader.read();
          if (done) break;
          acc += decoder.decode(value, { stream: true });
          const snapshot = acc;
          setMessages((prev) =>
            prev.map((m) => (m.id === assistantId ? { ...m, content: snapshot } : m)),
          );
        }
        if (!acc.trim()) throw new Error("empty");
      } catch (error) {
        const aborted = controller.signal.aborted;
        const offline = typeof navigator !== "undefined" && !navigator.onLine;
        const kind: ChatMessage["error"] = aborted ? "timeout" : offline ? "network" : "server";
        const copy =
          kind === "timeout"
            ? "That took too long and I gave up. Please try again — shorter questions help."
            : kind === "network"
              ? "You appear to be offline. Reconnect and try again."
              : "Something went wrong on my end. Please try again in a moment.";
        setMessages((prev) => [
          ...prev.filter((m) => !(m.id === assistantId && m.content === "")),
          { id: uid(), role: "assistant", content: copy, error: kind },
        ]);
        if (kind === "server") console.error("[chat-widget]", error);
      } finally {
        clearTimeout(timeout);
        abortRef.current = null;
        setBusy(false);
      }
    },
    [busy, messages],
  );

  const reset = () => {
    abortRef.current?.abort();
    setMessages([WELCOME]);
    setMode(null);
  };

  return (
    <>
      {/* Launcher */}
      <AnimatePresence>
        {!open && (
          <motion.button
            type="button"
            key="chat-launcher"
            onClick={() => setOpen(true)}
            initial={reduceMotion ? false : { scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={reduceMotion ? undefined : { scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-volt text-[#04070f] shadow-[0_8px_32px_var(--glow-volt)] transition-transform hover:scale-105"
            aria-label="Open ELSOC assistant"
            data-testid="chat-launcher"
          >
            <MessageSquare className="size-6" aria-hidden />
            <span
              aria-hidden
              className="absolute -right-0.5 -top-0.5 flex size-4 items-center justify-center rounded-full border-2 border-bg bg-signal"
            >
              <Zap className="size-2 fill-bg text-bg" />
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="chat-backdrop"
              className="fixed inset-0 z-50 bg-[#02040a]/50 backdrop-blur-sm sm:bg-transparent sm:backdrop-blur-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              key="chat-panel"
              role="dialog"
              aria-modal="true"
              aria-label="ELSOC assistant"
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 40, scale: 0.96 }}
              transition={{ type: "spring", stiffness: 320, damping: 30 }}
              className={cn(
                "fixed z-50 flex flex-col overflow-hidden border border-line bg-bg-raised/95 shadow-2xl backdrop-blur-xl",
                "inset-x-3 bottom-3 top-20 rounded-2xl",
                "sm:inset-auto sm:bottom-5 sm:right-5 sm:h-[36rem] sm:max-h-[calc(100dvh-6rem)] sm:w-[26rem]",
              )}
              data-testid="chat-panel"
            >
              {/* Header */}
              <div className="flex items-center gap-3 border-b border-line px-4 py-3">
                <span className="relative flex size-9 items-center justify-center rounded-full bg-volt/15">
                  <Zap className="size-5 text-volt" aria-hidden />
                  <span className="absolute -bottom-0.5 -right-0.5 size-2.5 rounded-full border-2 border-bg-raised bg-success" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-display text-sm font-semibold leading-tight">
                    ELSOC Assistant
                  </p>
                  <p className="truncate text-[0.68rem] text-fg-subtle">
                    {mode === "offline"
                      ? "Offline mode — answering from site content"
                      : "Online · answers from ELSOC's live content"}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={reset}
                  aria-label="Clear conversation"
                  className="rounded-md p-2 text-fg-subtle transition-colors hover:bg-surface hover:text-fg"
                >
                  <RotateCcw className="size-4" aria-hidden />
                </button>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close assistant"
                  className="rounded-md p-2 text-fg-subtle transition-colors hover:bg-surface hover:text-fg"
                >
                  <X className="size-4" aria-hidden />
                </button>
              </div>

              {/* Messages */}
              <div
                ref={scrollRef}
                data-lenis-prevent
                className="flex-1 space-y-4 overflow-y-auto p-4"
                aria-live="polite"
              >
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={cn(
                      "flex gap-2.5",
                      message.role === "user" ? "justify-end" : "justify-start",
                    )}
                  >
                    {message.role === "assistant" && (
                      <span
                        aria-hidden
                        className={cn(
                          "mt-1 flex size-7 shrink-0 items-center justify-center rounded-full",
                          message.error ? "bg-danger/15" : "bg-volt/15",
                        )}
                      >
                        {message.error === "network" ? (
                          <WifiOff className="size-3.5 text-danger" />
                        ) : message.error ? (
                          <AlertTriangle className="size-3.5 text-danger" />
                        ) : (
                          <Zap className="size-3.5 text-volt" />
                        )}
                      </span>
                    )}
                    <div
                      className={cn(
                        "max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed",
                        message.role === "user"
                          ? "rounded-br-sm bg-volt text-[#04070f]"
                          : message.error
                            ? "rounded-bl-sm border border-danger/30 bg-danger/10 text-fg-muted"
                            : "rounded-bl-sm border border-line bg-surface text-fg-muted",
                      )}
                    >
                      <MessageBody text={message.content} />
                    </div>
                  </div>
                ))}

                {busy && messages[messages.length - 1]?.role === "user" && (
                  <div className="flex gap-2.5">
                    <span
                      aria-hidden
                      className="mt-1 flex size-7 shrink-0 items-center justify-center rounded-full bg-volt/15"
                    >
                      <Zap className="size-3.5 text-volt" />
                    </span>
                    <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-sm border border-line bg-surface px-4 py-3">
                      {[0, 1, 2].map((i) => (
                        <span
                          key={i}
                          className="size-1.5 rounded-full bg-fg-subtle motion-safe:animate-pulse-dot"
                          style={{ animationDelay: `${i * 0.18}s` }}
                        />
                      ))}
                      <span className="sr-only">Assistant is typing</span>
                    </div>
                  </div>
                )}

                {messages.length === 1 && (
                  <div className="pt-2">
                    <p className="mono-label mb-2.5">Quick questions</p>
                    <div className="flex flex-wrap gap-2">
                      {QUICK_QUESTIONS.map((q) => (
                        <button
                          key={q}
                          type="button"
                          onClick={() => send(q)}
                          className="rounded-full border border-line bg-surface px-3 py-1.5 text-xs text-fg-muted transition-colors hover:border-volt/40 hover:text-volt"
                        >
                          {q}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Composer */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  void send(input);
                }}
                className="border-t border-line p-3"
              >
                <div className="flex items-center gap-2">
                  <label htmlFor="chat-input" className="sr-only">
                    Ask the ELSOC assistant
                  </label>
                  <input
                    id="chat-input"
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask me anything about ELSOC…"
                    maxLength={500}
                    disabled={busy}
                    autoComplete="off"
                    className="h-11 flex-1 rounded-xl border border-line bg-surface px-3.5 text-sm text-fg placeholder:text-fg-subtle focus:border-volt focus:outline-none focus:ring-2 focus:ring-volt/25 disabled:opacity-60"
                  />
                  <button
                    type="submit"
                    disabled={busy || !input.trim()}
                    aria-label="Send message"
                    className="flex size-11 items-center justify-center rounded-xl bg-volt text-[#04070f] transition-all hover:brightness-110 disabled:opacity-40"
                  >
                    {busy ? (
                      <Loader2 className="size-4 animate-spin" aria-hidden />
                    ) : (
                      <Send className="size-4" aria-hidden />
                    )}
                  </button>
                </div>
                <p className="mt-2 text-center font-mono text-[0.6rem] text-fg-subtle">
                  {input.length}/500 · answers are grounded in elsoc.nith.ac.in content
                </p>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
