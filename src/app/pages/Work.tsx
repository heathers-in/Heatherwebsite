import aboutPhoto from "figma:asset/a8ea7b4a50c5c5f9c62226562f8edcfaad72b66d.png";
import { motion } from "motion/react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Target, TrendingUp, Users, Zap, Award, Rocket, ExternalLink, Lightbulb } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";

export function Work() {
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

  const features = [
    {
      icon: <Target size={32} />,
      title: "Product Strategy",
      description: "Defining vision and roadmaps that align business goals with user needs and market opportunities.",
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Go-to-Market Excellence",
      description: "Orchestrating successful product launches with cross-functional teams and measurable impact.",
    },
    {
      icon: <Users size={32} />,
      title: "Data-Driven Decision Making",
      description: "Leveraging analytics and user insights to validate hypotheses and optimize product experiences.",
    },
    {
      icon: <Zap size={32} />,
      title: "AI Product Development",
      description: "Building intelligent features that enhance user value while maintaining ethical considerations.",
    },
  ];

  const stats = [
    { value: "32M", label: "Peak DAU" },
    { value: "$1B+", label: "Product revenue" },
    { value: "80%", label: "Incidents eliminated" },
    { value: "4", label: "Markets in 3 months" },
  ];

  const testimonials = [
    {
      quote: "Heather has the rare ability to cut through noise and get to the heart of a problem, bringing clarity and focus when it matters most. Leading the buyer growth team, she navigated a tough, competitive space and delivered real impact — consistently testing, learning, and turning strong ideas into shipped products. She is incredibly reliable, warm, and refreshingly honest, making her a trusted partner across teams. She also championed smarter ways of working, particularly through the use of AI tooling to improve productivity. Any organisation would be lucky to have her.",
      author: "Nikhil Dhawan",
      role: "Product Lead, Tilt (Marketplace & AI)",
      context: "Worked with Heather directly (2026)",
    },
    {
      quote: "Heather is one of the most skilled product leaders I've had the pleasure of working with. She combines strong product thinking with deep expertise in product operations, and in a short time built highly effective frameworks for teams to operate — from structured OKR reviews to internal communication and alignment. Her ability to turn ideas into practical systems made a measurable impact on team effectiveness. It was a pleasure to work with her.",
      author: "Ronaldo Florence",
      role: "Engineering Leadership, Uber",
      context: "Worked with Heather directly (2024)",
    },
    {
      quote: "Heather represents the high watermark for product management. Her ability to combine data, user insight, technical understanding, and business acumen puts her in a rare group of leaders capable of driving impact across organisations. I've seen her succeed repeatedly across companies and continents, and she has played a key role in developing the next generation of product leaders.",
      author: "Adnaan Ebrahim",
      role: "Director of New Games / Strategy",
      context: "Worked with Heather across multiple organisations",
    },
  ];

  const caseStudies = [
    {
      title: "AI-Powered Marketplace Recommendations",
      summary: "Transformed conversion rates by 40% through ML-driven personalization engine for a two-sided marketplace platform.",
      problem: "Low engagement and conversion in product discovery",
      approach: "Built collaborative filtering system with real-time user behavior analysis",
      result: "40% increase in conversion, 3x improvement in user engagement",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    },
    {
      title: "Data Analytics Dashboard Redesign",
      summary: "Reimagined enterprise analytics platform serving 100K+ daily users, reducing time-to-insight by 60%.",
      problem: "Complex interface hindering decision-making speed",
      approach: "User research, progressive disclosure, AI-powered insights",
      result: "60% faster insights, 90% user satisfaction score",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    },
    {
      title: "Mobile-First Consumer App Launch",
      summary: "Led 0-to-1 product development for consumer social app, achieving 1M users in first 6 months.",
      problem: "Saturated market, need for differentiation",
      approach: "Rapid prototyping, continuous user testing, viral growth mechanics",
      result: "1M users in 6 months, 4.8 App Store rating",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800",
    },
  ];

  const experiments = [
    {
      title: "Generative UI Prototype",
      summary: "Experimental AI tool that generates custom UI components from natural language descriptions.",
      focus: "AI/ML, Design Systems, Developer Tools",
      technology: "GPT-4, React, TypeScript",
      impact: "Internal tool adopted by 50+ designers and developers",
    },
    {
      title: "Real-Time Collaboration Framework",
      summary: "Open-source framework for building multiplayer web experiences with conflict-free replication.",
      focus: "Real-time Systems, Open Source",
      technology: "WebRTC, CRDTs, Node.js",
      impact: "500+ GitHub stars, featured in weekly newsletters",
    },
    {
      title: "Voice-Controlled Dashboard",
      summary: "Accessibility-first experiment enabling hands-free data exploration for analytics dashboards.",
      focus: "Accessibility, Voice UI, Analytics",
      technology: "Web Speech API, React, D3.js",
      impact: "Demo at accessibility conference, positive user feedback",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Header Section */}
      <section className="pt-32 pb-20 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm mb-6">
              Portfolio
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              Work & Projects
            </h1>
            <p className="text-xl text-neutral-300 max-w-2xl">
              Over a decade of building and scaling data-rich consumer products,
              marketplaces, and AI-powered experiences. Explore case studies, experiments,
              and the philosophy behind the work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Product Philosophy
              </h2>
              <div className="space-y-6 text-lg text-neutral-700">
                <div>
                  <h3 className="font-bold text-neutral-900 mb-2">Outcomes over activity.</h3>
                  <p>
                    The question that matters is "did it actually work" — not "did we ship it." Experimentation rigour, forecast-beating, turnarounds: everything traces back to holding myself accountable to real numbers, not the appearance of progress.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-neutral-900 mb-2">Go where the problem is.</h3>
                  <p>
                    I've repeatedly stepped outside the formal PM role — into engineering, marketing, data analysis — not out of empire-building but because that's where the highest-leverage work was. The role is a starting point, not a boundary.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-neutral-900 mb-2">Systems thinking over feature thinking.</h3>
                  <p>
                    Supply-demand dynamics at Tilt, retention mechanics at Zynga, automated decisioning at Stenn — I'm most interested in understanding why a product behaves the way it does, not just what to add to it. Features are a means, not an answer.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-neutral-900 mb-2">Clarity as a superpower.</h3>
                  <p>
                    I've walked into ambiguity more times than I can count — no playbook, no function, no data infrastructure. The job is always the same: impose enough structure to make progress possible, then move.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="aspect-[4/3] bg-neutral-100 overflow-hidden rounded-2xl"
            >
              <ImageWithFallback
                src={aboutPhoto}
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features List Section */}
      <section className="py-24 bg-neutral-50">
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

      {/* Stats Section */}
      <section className="py-24 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Impact by the Numbers</h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-bold mb-2">{stat.value}</div>
                <div className="text-neutral-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What Others Say</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 bg-neutral-50"
              >
                <Award size={32} className="text-neutral-400 mb-6" />
                <p className="text-neutral-700 mb-6">"{testimonial.quote}"</p>
                <div>
                  <div className="font-medium">{testimonial.author}</div>
                  <div className="text-sm text-neutral-600">{testimonial.role}</div>
                  <div className="text-xs text-neutral-500 mt-1">{testimonial.context}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Experiments Section */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeInUp}>
            <Lightbulb size={48} className="mx-auto mb-6 text-neutral-400" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Case Studies & Projects</h2>
            <p className="text-xl text-neutral-600">
              Coming soon: Detailed case studies and project deep-dives showcasing product challenges, solutions, and measurable impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeInUp}>
            <Rocket size={48} className="mx-auto mb-6 text-neutral-900" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Build Together?
            </h2>
            <p className="text-xl text-neutral-600 mb-12">
              Download my CV, explore the interactive AI experience, or get in touch to discuss opportunities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://docs.google.com/document/d/1Ge3jUrYN7tvppgwdZ1vNCBvak7G_8tsMxJD9Jn8Eg24/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-brand-yellow text-neutral-900 font-medium rounded-full hover:bg-brand-yellow-hover transition-all inline-block"
              >
                Download CV
              </a>
              <Link
                to="/interactive-cv"
                className="px-8 py-4 border-2 border-neutral-900 text-neutral-900 font-medium rounded-full hover:bg-neutral-50 transition-all"
              >
                Try Interactive CV
              </Link>
              <a
                href="mailto:hsinclair@fastmail.com"
                className="px-8 py-4 border-2 border-neutral-900 text-neutral-900 font-medium rounded-full hover:bg-neutral-50 transition-all"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
