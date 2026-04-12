import { Link, Navigate, useParams } from "react-router";
import { motion } from "motion/react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ArrowLeft, Sparkles } from "lucide-react";
import { getWorkProject } from "../data/workProjects";
import heroImage from "figma:asset/bce6ab1d96cd627878353e036105c228f43e44f9.png";
import aiCvProjectCover from "../../assets/work/AI_cv_project.png";
import subscriptionModelCover from "../../assets/work/Subscription_model_project.png";
import { SubscriptionModelCaseStudy } from "../components/work/projects/SubscriptionModelCaseStudy";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
} as const;

function InteractiveCvProjectBody() {
  return (
    <div className="max-w-3xl space-y-10 text-lg text-neutral-700">
      <motion.section {...fadeInUp}>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">Overview</h2>
        <p>
          The Interactive CV is a small product embedded in this portfolio: visitors ask
          natural-language questions about Heather&apos;s background, and answers are
          generated only from curated markdown sources — not from the open web.
        </p>
      </motion.section>

      <motion.section {...fadeInUp} transition={{ delay: 0.05 }}>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">Why build it?</h2>
        <p className="mb-4">
          Traditional CVs and static pages make people hunt for the angle they care about
          (marketplaces, growth, AI, leadership). A grounded chat interface lets them
          explore the same underlying material in their own order, while staying
          fact-bound to what&apos;s actually on file.
        </p>
      </motion.section>

      <motion.section {...fadeInUp} transition={{ delay: 0.1 }}>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">What I shipped</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong className="text-neutral-900">Content model:</strong> structured{" "}
            <code className="rounded bg-neutral-100 px-1.5 py-0.5 text-base text-neutral-800">
              .md
            </code>{" "}
            files under <code className="rounded bg-neutral-100 px-1.5 py-0.5 text-base">src/app/content/cv</code>, versioned with the site.
          </li>
          <li>
            <strong className="text-neutral-900">Server-side AI:</strong> Vercel
            serverless route calls the OpenAI API; API keys never touch the browser.
          </li>
          <li>
            <strong className="text-neutral-900">Guardrails:</strong> strict system
            prompt, input and output limits, optional Upstash rate limiting by IP, SPA-safe
            routing alongside <code className="rounded bg-neutral-100 px-1.5 py-0.5 text-base">/api</code>.
          </li>
          <li>
            <strong className="text-neutral-900">UX:</strong> chat UI with loading and
            error states, FAQs that explain scope and security, and a design language
            consistent with the rest of the site.
          </li>
        </ul>
      </motion.section>

      <motion.section {...fadeInUp} transition={{ delay: 0.15 }}>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">Stack</h2>
        <p>
          React with Vite and TypeScript, Tailwind-style utility classes, React Router,
          Motion for animation, Vercel for hosting and functions, OpenAI for the model
          layer. Design explorations started in Figma Make; implementation and iteration
          in Cursor.
        </p>
      </motion.section>

      <motion.section {...fadeInUp} transition={{ delay: 0.2 }}>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">Try it</h2>
        <p className="mb-6">
          The live experience is on the site — ask about roles, companies, skills, or
          how she approaches product problems.
        </p>
        <Link
          to="/interactive-cv"
          className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-8 py-4 font-medium text-white transition-colors hover:bg-neutral-800"
        >
          <Sparkles size={20} />
          Open Interactive CV
        </Link>
      </motion.section>
    </div>
  );
}

export function WorkProjectDetail() {
  const { projectSlug } = useParams<{ projectSlug: string }>();
  const project = projectSlug ? getWorkProject(projectSlug) : undefined;

  if (!projectSlug || !project) {
    return <Navigate to="/work" replace />;
  }

  const projectSidebarImages: Record<string, string> = {
    "interactive-cv": aiCvProjectCover,
    "subscription-model": subscriptionModelCover,
  };
  const sidebarImage = projectSidebarImages[project.slug] ?? heroImage;
  const sidebarImageAlt =
    project.slug === "interactive-cv"
      ? "Interactive AI CV — portfolio project"
      : project.slug === "subscription-model"
        ? "Coupon Club subscription — case study"
        : project.title;

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-28 pb-12 md:pt-32 md:pb-16 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft size={16} />
              Back to Work &amp; Projects
            </Link>
            <p className="text-sm font-medium text-brand-yellow mb-4">{project.eyebrow}</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl">
              {project.title}
            </h1>
            <p className="text-xl text-neutral-300 max-w-3xl leading-relaxed">
              {project.summary}
            </p>
            <div className="flex flex-wrap gap-2 mt-8">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-sm text-neutral-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            <motion.div
              {...fadeInUp}
              className="lg:col-span-2 rounded-2xl overflow-hidden border border-neutral-200 shadow-lg aspect-[4/3] lg:aspect-auto lg:sticky lg:top-28"
            >
              <img
                src={sidebarImage}
                alt={sidebarImageAlt}
                className="w-full h-full object-cover min-h-[280px]"
              />
            </motion.div>
            <div className="lg:col-span-3">
              {project.slug === "interactive-cv" ? (
                <InteractiveCvProjectBody />
              ) : project.slug === "subscription-model" ? (
                <SubscriptionModelCaseStudy />
              ) : (
                <p className="text-neutral-600">Case study content coming soon.</p>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap gap-4 justify-between items-center">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-neutral-700 font-medium hover:text-neutral-900"
          >
            <ArrowLeft size={18} />
            All projects
          </Link>
          <a
            href="mailto:hsinclair@fastmail.com"
            className="text-neutral-700 font-medium hover:text-neutral-900 underline-offset-4 hover:underline"
          >
            Discuss this work
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
