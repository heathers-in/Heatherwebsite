/**
 * Case studies & portfolio projects shown on /work and /work/projects/:slug
 */

export type WorkProjectSummary = {
  slug: string;
  title: string;
  summary: string;
  /** Short label shown on the tile (e.g. year or type) */
  eyebrow: string;
  tags: string[];
};

export const WORK_PROJECTS: WorkProjectSummary[] = [
  {
    slug: "interactive-cv",
    title: "Interactive AI CV",
    eyebrow: "Portfolio product · 2025–2026",
    summary:
      "A conversational layer on top of structured CV markdown: server-side AI, grounded answers, and a controlled public interface — not a generic chatbot.",
    tags: ["AI product", "Vite & React", "Vercel", "OpenAI"],
  },
  {
    slug: "subscription-model",
    title: "Coupon Club subscription (0 → 1 validation & model)",
    eyebrow: "Marketplace · incentives · false door",
    summary:
      "A Coupon Club subscription to lift retention and frequency: benchmarking, behavioural analysis, financial modelling, and a false door — leading to a clear no-build decision and better incentive strategy elsewhere.",
    tags: ["Subscriptions", "False door", "Marketplace", "Unit economics"],
  },
];

export function getWorkProject(slug: string): WorkProjectSummary | undefined {
  return WORK_PROJECTS.find((p) => p.slug === slug);
}

export function getWorkProjectDocumentTitle(slug: string): string | null {
  const p = getWorkProject(slug);
  return p ? p.title : null;
}
