import { useState } from "react";
import { motion } from "motion/react";
import { Send } from "lucide-react";
import {
  interactiveCvChat,
  interactiveCvChatErrors,
  type InteractiveCvMessage,
} from "../../content/interactiveCv";
import { fadeInUp } from "./motion";

const MAX_INPUT_CHARS = 2000;
const MAX_API_MESSAGES = 12;

function toApiMessages(history: InteractiveCvMessage[]) {
  return history.map((m) => ({
    role: m.type === "user" ? ("user" as const) : ("assistant" as const),
    content: m.text,
  }));
}

export function CvChatSection() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<InteractiveCvMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = question.trim();
    if (!trimmed || isLoading) return;

    const userMessage: InteractiveCvMessage = { type: "user", text: trimmed };
    const historyBefore = [...messages, userMessage];
    const apiPayload = toApiMessages(historyBefore).slice(-MAX_API_MESSAGES);

    setMessages(historyBefore);
    setQuestion("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/cv-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: apiPayload }),
      });

      const data: unknown = await res.json().catch(() => ({}));
      const reply =
        typeof (data as { reply?: unknown }).reply === "string"
          ? (data as { reply: string }).reply
          : null;
      const errMsg =
        typeof (data as { error?: unknown }).error === "string"
          ? (data as { error: string }).error
          : null;

      if (!res.ok) {
        const fallback =
          res.status === 429
            ? interactiveCvChatErrors.rateLimited
            : res.status === 503
              ? interactiveCvChatErrors.misconfigured
              : errMsg || interactiveCvChatErrors.generic;
        setMessages((prev) => [
          ...prev,
          { type: "ai", text: fallback },
        ]);
        return;
      }

      if (!reply) {
        setMessages((prev) => [
          ...prev,
          { type: "ai", text: interactiveCvChatErrors.generic },
        ]);
        return;
      }

      setMessages((prev) => [...prev, { type: "ai", text: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { type: "ai", text: interactiveCvChatErrors.generic },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-24 bg-neutral-50">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div {...fadeInUp} className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            {interactiveCvChat.heading}
          </h2>
          <p className="text-xl text-neutral-600 text-center">
            {interactiveCvChat.subheading}
          </p>
        </motion.div>

        <motion.div
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.2 }}
        >
          {messages.length > 0 && (
            <div className="mb-8 space-y-4 max-h-96 overflow-y-auto p-6 bg-white rounded-2xl">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-4 rounded-2xl ${
                      message.type === "user"
                        ? "bg-neutral-900 text-white"
                        : "bg-neutral-100 text-neutral-900"
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{message.text}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] p-4 rounded-2xl bg-neutral-100 text-neutral-600 text-sm">
                    Thinking…
                  </div>
                </div>
              )}
            </div>
          )}

          <form onSubmit={handleSubmit} className="relative">
            <input
              type="text"
              value={question}
              maxLength={MAX_INPUT_CHARS}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder={interactiveCvChat.inputPlaceholder}
              disabled={isLoading}
              className="w-full px-6 py-6 pr-16 bg-white border-2 border-neutral-200 rounded-full text-lg focus:outline-none focus:border-neutral-900 transition-colors disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={isLoading || !question.trim()}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-4 bg-brand-yellow text-neutral-900 rounded-full hover:bg-brand-yellow-hover transition-colors disabled:opacity-50 disabled:pointer-events-none"
              aria-label="Send"
            >
              <Send size={20} />
            </button>
          </form>

          <p className="mt-4 text-sm text-neutral-500 text-center">
            {interactiveCvChat.footerNote}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
