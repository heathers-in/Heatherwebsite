import { motion } from "motion/react";
import { SubscriptionModelDemo } from "../demos/SubscriptionModelDemo";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
} as const;

const p = "mb-4 last:mb-0 leading-relaxed";

export function SubscriptionModelCaseStudy() {
  return (
    <div className="max-w-3xl space-y-12 text-lg text-neutral-700">
      <motion.section {...fadeInUp}>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">Context</h2>
        <p className={p}>
          I explored a subscription-based &ldquo;Coupon Club&rdquo; designed to increase
          buyer retention and frequency on a live marketplace. The concept was simple: a
          low monthly fee in exchange for a recurring, higher-value coupon, with the
          hypothesis that increased engagement, basket size uplift, and natural
          &ldquo;breakage&rdquo; (unused rewards) would offset the cost of the incentive.
        </p>
      </motion.section>

      <motion.section {...fadeInUp} transition={{ delay: 0.05 }}>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">Approach</h2>
        <p className={p}>
          I combined market benchmarking with internal behavioural analysis to
          pressure-test the idea before committing engineering resources.
        </p>
        <p className={p}>
          Externally, subscription benchmarks suggested that conversion rates for
          consumer apps typically sit in the low single digits, with pricing expectations
          clustered around similar entry-level price points. Internally, I analysed
          buyer behaviour across segments, focusing on purchase frequency, order value,
          coupon usage, and retention patterns.
        </p>
        <p className="mb-3 font-medium text-neutral-900">
          This revealed three important dynamics:
        </p>
        <ul className="list-disc space-y-2 pl-6 mb-4">
          <li>
            <strong className="text-neutral-900">Coupon breakage is structurally high</strong>{" "}
            — most users do not redeem available rewards, especially lower-intent
            segments
          </li>
          <li>
            <strong className="text-neutral-900">Coupons drive larger baskets</strong> —
            when used, they increase pre-discount spend and encourage higher-value
            purchases
          </li>
          <li>
            <strong className="text-neutral-900">Retention effects are nuanced</strong> —
            apparent uplift is heavily influenced by selection bias, with weaker or
            negative impact in lower-intent users
          </li>
        </ul>
        <p className={p}>
          I incorporated these into a financial model that balanced subscription revenue,
          reward cost, and expected behavioural shifts.
        </p>
      </motion.section>

      <motion.section {...fadeInUp} transition={{ delay: 0.1 }}>
        <h2 className="text-2xl font-bold text-neutral-900 mb-3">
          Interactive model
        </h2>
        <p className="mb-6 text-base text-neutral-600 leading-relaxed">
          Explore segment-level assumptions, adoption, breakage, and net economics. Data
          reflects real order patterns from the marketplace period described in the demo
          footnotes.
        </p>
        <div className="-mx-1 overflow-x-auto rounded-xl border border-neutral-200 bg-neutral-950 shadow-inner">
          <SubscriptionModelDemo />
        </div>
      </motion.section>

      <motion.section {...fadeInUp} transition={{ delay: 0.12 }}>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">Validation</h2>
        <p className={p}>
          To validate real demand, I ran a false-door test exposing users to the offer
          before building the feature.
        </p>
        <p className={p}>
          While initial interest was directionally positive, actual intent (after
          accounting for typical drop-off between click and payment) landed significantly
          below what was required to make the economics viable. This gap was most
          pronounced in the highest-value user segments, where the model had been most
          optimistic.
        </p>
        <p className={p}>
          I also explored expansion into a large pool of non-buyers. While this increased
          theoretical reach, the behavioural leap required (paying for benefits on a
          platform not yet used) made meaningful conversion unlikely.
        </p>
      </motion.section>

      <motion.section {...fadeInUp} transition={{ delay: 0.14 }}>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">Outcome</h2>
        <p className={p}>
          The conclusion was clear: at realistic adoption levels, the subscription
          model was not commercially viable. Even with an aggressively favourable reward
          structure, the feature would not generate sufficient incremental value to
          justify build and operational complexity.
        </p>
        <p className="mb-3 font-medium text-neutral-900">
          However, the work surfaced several durable insights:
        </p>
        <ul className="list-disc space-y-2 pl-6 mb-4">
          <li>Incentives reliably increase basket size, even when subsidised</li>
          <li>
            Breakage is predictable and segment-dependent, and can be designed for
          </li>
          <li>
            Subscription mechanics require either significantly stronger lock-in or
            fundamentally different unit economics to succeed
          </li>
        </ul>
      </motion.section>

      <motion.section {...fadeInUp} transition={{ delay: 0.16 }}>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">Impact</h2>
        <p className={p}>
          Rather than proceeding with the subscription, these insights informed
          alternative approaches to incentives and engagement that avoided the overhead
          of a recurring commitment model.
        </p>
        <p className={p}>
          More broadly, this work demonstrated the value of combining behavioural data,
          economic modelling, and lightweight experimentation (false-door testing) to
          de-risk product investments early — avoiding costly builds while still
          generating actionable learning.
        </p>
      </motion.section>
    </div>
  );
}
