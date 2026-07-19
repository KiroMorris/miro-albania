"use client";

import { useEffect, useRef, useState } from "react";

interface Msg {
  role: "user" | "assistant";
  content: string;
}

const starters = [
  "What should I do on my first evening in Tirana?",
  "I'm in Gjirokastër and hungry — where do I go?",
  "Is the Theth hike doable for me solo?",
  "Which beach won't be packed in August?",
];

export default function ChatPage() {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || busy) return;
    setInput("");
    setBusy(true);

    const next: Msg[] = [...messages, { role: "user", content: trimmed }];
    setMessages([...next, { role: "assistant", content: "" }]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });

      if (!res.ok || !res.body) {
        const err = await res.json().catch(() => null);
        setMessages([
          ...next,
          {
            role: "assistant",
            content:
              err?.error ?? "Sorry — the guide isn't reachable right now. Try again in a moment.",
          },
        ]);
        return;
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let acc = "";
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        acc += decoder.decode(value, { stream: true });
        setMessages([...next, { role: "assistant", content: acc }]);
      }
    } catch {
      setMessages([
        ...next,
        { role: "assistant", content: "Connection dropped — try again." },
      ]);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="mx-auto max-w-3xl px-4 flex flex-col h-[calc(100dvh-3.5rem)]">
      <div className="flex-1 overflow-y-auto py-6 space-y-4">
        {messages.length === 0 && (
          <div className="pt-8 text-center">
            <div className="text-4xl">🇦🇱</div>
            <h1 className="mt-3 text-2xl font-semibold">Ask your guide</h1>
            <p className="mt-2 text-ink-soft max-w-md mx-auto">
              I know every place in this guide, the furgon logistics between
              them, and what&apos;s actually worth your time. Where are you,
              and what do you feel like?
            </p>
            <div className="mt-6 grid gap-2 sm:grid-cols-2">
              {starters.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="rounded-xl border border-line bg-white px-4 py-3 text-sm text-left hover:bg-sand transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((m, i) => (
          <div
            key={i}
            className={m.role === "user" ? "flex justify-end" : "flex justify-start"}
          >
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-3 text-[15px] leading-relaxed whitespace-pre-wrap ${
                m.role === "user"
                  ? "bg-ink text-paper rounded-br-md"
                  : "bg-white border border-line rounded-bl-md"
              }`}
            >
              {m.content || (busy && i === messages.length - 1 ? "…" : "")}
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          send(input);
        }}
        className="pb-5 pt-2 flex gap-2"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Where are you? What do you feel like?"
          className="flex-1 rounded-full border border-line bg-white px-5 py-3 text-[15px] outline-none focus:border-sea"
        />
        <button
          type="submit"
          disabled={busy || !input.trim()}
          className="rounded-full bg-red text-paper px-6 py-3 font-medium disabled:opacity-40 hover:bg-red-deep transition-colors"
        >
          {busy ? "…" : "Send"}
        </button>
      </form>
    </div>
  );
}
