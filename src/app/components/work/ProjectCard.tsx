import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

type ProjectCardProps = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  coverImageSrc: string;
  coverAlt: string;
  index?: number;
};

export function ProjectCard({
  slug,
  title,
  eyebrow,
  summary,
  coverImageSrc,
  coverAlt,
  index = 0,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className="group h-full"
    >
      <Link
        to={`/work/projects/${slug}`}
        className="flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:border-neutral-300 hover:shadow-xl"
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
          <img
            src={coverImageSrc}
            alt={coverAlt}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/50 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
            <span className="rounded-full bg-white/95 px-3 py-1 text-xs font-medium text-neutral-800 backdrop-blur-sm">
              {eyebrow}
            </span>
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-yellow text-neutral-900 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowUpRight size={20} strokeWidth={2.25} />
            </span>
          </div>
        </div>
        <div className="flex flex-1 flex-col p-6 md:p-7">
          <h3 className="text-xl font-bold text-neutral-900 md:text-2xl group-hover:underline decoration-brand-yellow decoration-2 underline-offset-4">
            {title}
          </h3>
          <p className="mt-3 line-clamp-3 flex-1 text-neutral-600 leading-relaxed">
            {summary}
          </p>
          <span className="mt-5 text-sm font-medium text-neutral-900">
            View case study
            <span className="ml-1 inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
