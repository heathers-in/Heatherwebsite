import { motion } from "motion/react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ExternalLink, Lightbulb, Rocket } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";

export function Projects() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

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
              Featured Projects
            </h1>
            <p className="text-xl text-neutral-300 max-w-2xl">
              Explore product case studies and experiments showcasing a blend of product
              leadership, data-driven results, and innovation in AI and marketplaces.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Study List Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Case Studies</h2>
            <p className="text-xl text-neutral-600">
              Deep dives into product challenges and solutions
            </p>
          </motion.div>

          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="aspect-[4/3] bg-neutral-100 overflow-hidden rounded-xl">
                    <ImageWithFallback
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <h3 className="text-3xl font-bold mb-4">{study.title}</h3>
                  <p className="text-lg text-neutral-700 mb-6">{study.summary}</p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <div className="text-sm font-medium text-neutral-500 mb-1">Problem</div>
                      <div className="text-neutral-800">{study.problem}</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-neutral-500 mb-1">Approach</div>
                      <div className="text-neutral-800">{study.approach}</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-neutral-500 mb-1">Result</div>
                      <div className="text-neutral-800 font-medium">{study.result}</div>
                    </div>
                  </div>

                  <button className="inline-flex items-center gap-2 px-6 py-3 bg-brand-yellow text-neutral-900 font-medium rounded-full hover:bg-brand-yellow-hover transition-colors">
                    View Full Case Study
                    <ExternalLink size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio List Section */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Experiments & Side Projects</h2>
            <p className="text-xl text-neutral-600">
              Exploring emerging technologies and innovative approaches
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {experiments.map((experiment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-8 bg-white hover:shadow-xl transition-all cursor-pointer"
              >
                <Lightbulb size={32} className="text-neutral-900 mb-4" />
                <h3 className="text-2xl font-bold mb-3 group-hover:text-neutral-600 transition-colors">
                  {experiment.title}
                </h3>
                <p className="text-neutral-700 mb-4">{experiment.summary}</p>

                <div className="space-y-2 text-sm mb-6">
                  <div>
                    <span className="font-medium">Focus:</span> {experiment.focus}
                  </div>
                  <div>
                    <span className="font-medium">Technology:</span> {experiment.technology}
                  </div>
                  <div>
                    <span className="font-medium">Impact:</span> {experiment.impact}
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 text-neutral-900 font-medium group-hover:gap-3 transition-all">
                  Learn More
                  <ExternalLink size={16} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeInUp}>
            <Rocket size={48} className="mx-auto mb-6 text-neutral-900" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Interested in the Process?
            </h2>
            <p className="text-xl text-neutral-600 mb-12">
              Dive deeper into my approach, methodologies, and product philosophy.
              Connect to discuss specific projects or explore the Interactive AI CV.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/interactive-cv"
                className="px-8 py-4 bg-brand-yellow text-neutral-900 font-medium rounded-full hover:bg-brand-yellow-hover transition-all"
              >
                Explore AI CV
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
