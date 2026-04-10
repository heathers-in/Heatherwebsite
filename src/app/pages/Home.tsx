import heroImage from "figma:asset/bce6ab1d96cd627878353e036105c228f43e44f9.png";
import { motion } from "motion/react";
import { Navbar } from "../components/Navbar";
import { Link } from "react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const staggerChildren = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } },
    viewport: { once: true },
  };

  const galleryImages = [
    { alt: "Product Strategy", src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800" },
    { alt: "Data Analytics", src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800" },
    { alt: "Team Collaboration", src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800" },
    { alt: "AI Technology", src: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-white">
        <div className="max-w-7xl mx-auto px-6 w-full py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="inline-block px-4 py-2 bg-brand-yellow rounded-full text-neutral-900 text-sm font-medium mb-6"
              >
                Senior Product Leader
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-bold text-neutral-900 mb-6 leading-tight">Builder. Fixer. Multiplier.<br /></h1>

              <p className="text-xl md:text-2xl text-neutral-600 mb-8">From 32M DAU at Zynga to founding PM at an early-stage startup — I've owned complex products at every scale.</p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/interactive-cv"
                  className="group px-8 py-4 bg-neutral-900 text-white font-medium rounded-full hover:bg-neutral-800 transition-all flex items-center gap-2"
                >
                  Explore Interactive CV
                  <Sparkles size={20} className="group-hover:rotate-12 transition-transform" />
                </Link>
                <Link
                  to="/work"
                  className="px-8 py-4 border-2 border-neutral-900 text-neutral-900 font-medium rounded-full hover:bg-neutral-50 transition-all"
                >
                  View Work
                </Link>
              </div>
            </motion.div>

            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative">
                {/* Yellow accent shape */}
                <div className="absolute -top-8 -right-8 w-64 h-64 bg-brand-yellow rounded-full opacity-20 blur-3xl" />

                {/* Photo container */}
                <div className="relative aspect-square overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src={heroImage}
                    alt="Heather Sinclair"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Decorative element */}
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-neutral-900 rounded-2xl -z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...fadeInUp} className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">How I Work</h2>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <motion.div
              variants={fadeInUp}
              className="text-center"
            >
              <div className="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-neutral-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Data-driven product leadership</h3>
              <ul className="text-sm text-neutral-600 space-y-1">
                <li>Numbers over narratives</li>
                <li>Decisions backed by data</li>
                <li>Measure what matters</li>
                <li>From insight to outcome</li>
              </ul>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="text-center"
            >
              <div className="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-neutral-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Fixer and builder</h3>
              <ul className="text-sm text-neutral-600 space-y-1">
                <li>Broken in, built from scratch</li>
                <li>Diagnose, build, deliver</li>
                <li>No playbook? No problem.</li>
                <li>Revival and reinvention</li>
              </ul>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="text-center"
            >
              <div className="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-neutral-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">IC and leader</h3>
              <ul className="text-sm text-neutral-600 space-y-1">
                <li>Hands-on at any level</li>
                <li>Strategy down to the detail</li>
                <li>Player, coach, and multiplier</li>
                <li>Close to the product, close to the team</li>
              </ul>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="text-center"
            >
              <div className="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-neutral-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Wide operating remit</h3>
              <ul className="text-sm text-neutral-600 space-y-1">
                <li>PM, analyst, marketer, engineer</li>
                <li>Where needed, when needed</li>
                <li>Highest leverage, whatever it takes</li>
                <li>One hire, many hats</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Interactive CV Header */}
      <section className="py-32 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm mb-6">
                Powered by AI
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Interactive AI CV
              </h2>
              <p className="text-xl text-neutral-300 mb-8">
                Experience a conversational approach to exploring my background.
                Ask questions about my experience, projects, skills, or product philosophy
                and receive tailored, intelligent responses.
              </p>
              <Link
                to="/interactive-cv"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-neutral-900 font-medium rounded-full hover:bg-neutral-100 transition-all"
              >
                Try Interactive CV
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="relative aspect-square bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl overflow-hidden"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-brand-yellow rounded-full flex items-center justify-center shadow-2xl shadow-brand-yellow/50">
                  <Sparkles size={48} className="text-neutral-900" />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Let's Create Something Exceptional
            </h2>
            <p className="text-xl text-neutral-600 mb-12">
              Ready to discuss your next big product challenge? Explore my work
              or connect to start a conversation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/cv"
                className="px-8 py-4 bg-neutral-900 text-white font-medium rounded-full hover:bg-neutral-800 transition-all"
              >
                View CV
              </Link>
              <Link
                to="/work"
                className="px-8 py-4 border-2 border-neutral-900 text-neutral-900 font-medium rounded-full hover:bg-neutral-50 transition-all"
              >
                Explore Work
              </Link>
              <Link
                to="/interactive-cv"
                className="group px-8 py-4 bg-brand-yellow text-neutral-900 font-medium rounded-full hover:bg-brand-yellow-hover transition-all flex items-center gap-2"
              >
                Try AI CV
                <Sparkles size={20} className="group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
