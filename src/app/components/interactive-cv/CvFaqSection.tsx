import { motion } from "motion/react";
import { Shield } from "lucide-react";
import {
  interactiveCvFaqSection,
  interactiveCvFaqs,
} from "../../content/interactiveCv";
import { fadeInUp } from "./motion";

export function CvFaqSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div {...fadeInUp} className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {interactiveCvFaqSection.heading}
          </h2>
        </motion.div>

        <div className="space-y-6">
          {interactiveCvFaqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 bg-neutral-50"
            >
              <div className="flex items-start gap-4">
                <Shield
                  size={24}
                  className="text-neutral-900 flex-shrink-0 mt-1"
                />
                <div className="min-w-0">
                  <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                  <div className="text-neutral-700 whitespace-pre-wrap text-pretty">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
