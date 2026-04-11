/**
 * Copy and structured content for the Interactive CV page.
 */

export type InteractiveCvMessage = { type: "user" | "ai"; text: string };

export const interactiveCvHero = {
  badge: "Powered by AI",
  title: "Interactive AI CV",
  description:
    "Experience a conversational approach to exploring professional background. Ask questions and receive intelligent, tailored responses about experience, projects, skills, and product philosophy.",
  highlights: ["Natural Language", "Contextual Answers"],
} as const;

export const interactiveCvChat = {
  heading: "Ask Me Anything",
  subheading:
    'Try questions like: "What\'s your experience with AI products?" or "Tell me about your biggest product success"',
  inputPlaceholder:
    "Ask about experience, projects, skills, or philosophy...",
  footerNote:
    "Answers are generated from Heather’s CV materials and may omit details not in those files.",
} as const;

export const interactiveCvChatErrors = {
  generic: "Something went wrong. Please try again in a moment.",
  rateLimited: "Too many messages sent. Please wait a bit and try again.",
  misconfigured: "This feature isn’t fully set up yet. Please check back later.",
} as const;

export const interactiveCvFaqSection = {
  heading: "Common Questions",
} as const;

export const interactiveCvFaqs = [
  {
    question: "How does the AI CV work?",
    answer: `The AI CV is a chat interface over a structured set of my experience, case studies, and projects. When you ask a question, the system retrieves the most relevant parts of that content and uses an AI model to generate a clear, contextual answer.

It's designed to help you quickly explore my background — whether that's specific roles, growth work, marketplace experience, or how I approach product problems — without having to scan a traditional CV.`,
  },
  {
    question: "What content is included?",
    answer: `The AI only answers from a curated set of materials, including:

- role history across companies like Zynga, King, and Tilt
- selected case studies with context, actions, and outcomes
- key achievements, metrics, and product areas (growth, marketplaces, monetisation, AI)
- summaries of how I work, including leadership and decision-making approaches

It doesn't pull from the open internet — just the same underlying content you'll find elsewhere on this site, structured so it can be explored more easily.`,
  },
  {
    question: "What security is included?",
    answer: `From a technical perspective:

- all AI requests are handled server-side (API keys are never exposed)
- the system is scoped to my content only, not a general-purpose chatbot
- rate limiting and basic bot protection are in place to prevent misuse

In short: it's a controlled interface to my CV, not an open AI endpoint.`,
  },
  {
    question: "How was this built?",
    answer: `This is essentially a small product, not just a portfolio.

The design was put together in Figma Make, and the underlying content is structured as markdown files (initially generated and then heavily edited using AI tools). The site itself is built in a React/Next.js stack using Cursor, and deployed on Vercel.

The AI layer sits on top of that content — retrieving relevant pieces and turning them into answers — so you can explore my experience dynamically rather than reading a static CV.`,
  },
  {
    question: "How accurate is the information?",
    answer: `Responses are generated from my actual experience and written materials, not invented by the model.

The AI is constrained to those sources, so answers should reflect:

- real roles and responsibilities
- specific projects and outcomes
- measurable results where available

That said, it's still a generated interface — if something seems unclear or important, I'd always recommend getting in touch directly.`,
  },
] as const;
