import { motion } from "motion/react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Sparkles, MessageSquare, Brain, Send, Shield, CheckCircle } from "lucide-react";
import { useState } from "react";

export function InteractiveCV() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<Array<{ type: "user" | "ai"; text: string }>>([]);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const features = [
    {
      icon: <MessageSquare size={32} />,
      title: "Ask Anything",
      description: "Inquire about experience, skills, projects, or product philosophy in natural language.",
    },
    {
      icon: <Brain size={32} />,
      title: "Intelligent Responses",
      description: "Get contextual, detailed answers powered by comprehensive career data.",
    },
    {
      icon: <Sparkles size={32} />,
      title: "Interactive Exploration",
      description: "Discover connections and insights that traditional CVs can't surface.",
    },
  ];

  const faqs = [
    {
      question: "How does the AI CV work?",
      answer: "The AI CV uses natural language processing to understand your questions and provides relevant, contextual responses based on comprehensive professional experience, projects, and skills data.",
    },
    {
      question: "Is my data private and secure?",
      answer: "Absolutely. Conversations are not stored or used for training. Your questions remain private and are processed only to generate responses.",
    },
    {
      question: "How accurate is the information?",
      answer: "All responses are generated from verified professional experience and achievements. The AI provides accurate, up-to-date information about background, skills, and projects.",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    setMessages([
      ...messages,
      { type: "user", text: question },
      {
        type: "ai",
        text: "This is a demo response. In a production environment, this would connect to an AI service that provides detailed, contextual answers about my professional background, projects, and expertise.",
      },
    ]);
    setQuestion("");
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Header Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm mb-6">
              <Sparkles size={16} />
              Powered by AI
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              Interactive AI CV
            </h1>
            <p className="text-xl text-neutral-300 max-w-2xl mb-8">
              Experience a conversational approach to exploring professional background.
              Ask questions and receive intelligent, tailored responses about experience,
              projects, skills, and product philosophy.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-neutral-400">
              <div className="flex items-center gap-2">
                <CheckCircle size={16} />
                Natural Language
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} />
                Contextual Answers
              </div>
              
            </div>
          </motion.div>
        </div>
      </section>


      {/* CTA Form Section */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fadeInUp} className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              Ask Me Anything
            </h2>
            <p className="text-xl text-neutral-600 text-center">
              Try questions like: "What's your experience with AI products?" or
              "Tell me about your biggest product success"
            </p>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
            {/* Chat Messages */}
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
                      <p>{message.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Input Form */}
            <form onSubmit={handleSubmit} className="relative">
              <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Ask about experience, projects, skills, or philosophy..."
                className="w-full px-6 py-6 pr-16 bg-white border-2 border-neutral-200 rounded-full text-lg focus:outline-none focus:border-neutral-900 transition-colors"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-4 bg-brand-yellow text-neutral-900 rounded-full hover:bg-brand-yellow-hover transition-colors"
                aria-label="Send"
              >
                <Send size={20} />
              </button>
            </form>

            <p className="mt-4 text-sm text-neutral-500 text-center">Coming soon: Interactive AI-powered CV experience launching in 2026.</p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fadeInUp} className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Common Questions</h2>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 bg-neutral-50"
              >
                <div className="flex items-start gap-4">
                  <Shield size={24} className="text-neutral-900 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                    <p className="text-neutral-700">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
