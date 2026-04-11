import { motion } from "motion/react";
import { Sparkles, CheckCircle } from "lucide-react";
import { interactiveCvHero } from "../../content/interactiveCv";

export function CvHero() {
  return (
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
            {interactiveCvHero.badge}
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            {interactiveCvHero.title}
          </h1>
          <p className="text-xl text-neutral-300 max-w-2xl mb-8">
            {interactiveCvHero.description}
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-neutral-400">
            {interactiveCvHero.highlights.map((label) => (
              <div key={label} className="flex items-center gap-2">
                <CheckCircle size={16} />
                {label}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
