import { motion } from "motion/react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Mail, Linkedin, Award, Briefcase, GraduationCap } from "lucide-react";
import { Link } from "react-router";

export function CV() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const experience = [
    {
      company: "Tilt (Retro Labs Ltd)",
      role: "Product Lead",
      dates: "Feb 2025 – Present",
      summary: "Joined as one of the founding PMs at an early-stage livestream shopping marketplace (£18m Series A, ~£4m GMV/month), owning product across growth, platform stability, and trust systems.",
      achievements: [
        "Acted as de facto data analyst: built automated reporting, ran experimentation readouts, and investigated performance declines using SQL and AI tooling — generating insights on supply-demand dynamics, funnel performance, and user behaviour that directly shaped product decisions.",
        "Partnered with ML engineering to design, launch, and evaluate an AI-driven recommendation system, iterating based on real-world outcomes to improve relevance and user engagement.",
        "Doubled conversion to purchase through a structured programme of funnel, matching, and social experimentation, working in close partnership with the marketing team.",
        "Took over paid performance marketing alongside core PM work — restructuring Meta accounts and AppsFlyer tracking, introducing a structured experiment pipeline, and reducing CAC by 27%.",
        "Built trust and safety systems from scratch — defining moderation policies, anti-fraud alerts, and platform features — moving the marketplace from effectively unmonitored to materially lower risk.",
      ],
    },
    {
      company: "Stenn Technologies",
      role: "Senior Director of Product Management",
      dates: "Oct 2022 – Dec 2024",
      summary: "Joined as the founding product hire at a fast-scaling fintech ($900m valuation) providing digital trade finance to SMEs across 70+ countries.",
      achievements: [
        "Rebuilt core customer and decisioning systems across risk, operations, sales, and marketing — delivering from definition through to live operation under fixed timelines, increasing automated risk decisions from <10% to >80%.",
        "Led major product delivery including a full web rebrand and customer application overhaul, increasing SEO traffic by ~25%.",
        "Established the product management function from the ground up, growing the team from 1 to 11 PMs and defining data-driven processes for product operations and design, including OKRs and strategic roadmaps.",
      ],
    },
    {
      company: "King",
      role: "Executive Producer / Business Performance Manager",
      dates: "Sep 2015 – Aug 2017",
      summary: "Owned performance and delivery for Farm Heroes Saga at King (acq. Activision Blizzard ~$6bn) — a top-grossing mobile match-3 game and the first UK-developed mobile game to surpass $1bn in lifetime revenue.",
      achievements: [
        "Turned around a sustained bookings decline, delivering consecutive quarter-over-quarter growth for the first time in the product's history.",
        "Exceeded revenue forecasts by 26% through product and execution changes.",
        "Cleared an unfocused roadmap, reset team ownership, and invested in internal tooling to reduce live content overhead — creating space to address tech debt and ship larger bets.",
      ],
    },
    {
      company: "Zynga",
      role: "General Manager / Director of Product",
      dates: "Nov 2009 – Jun 2014",
      summary: "Progressed from Game Designer to Senior Director / GM across multiple large-scale consumer products at one of the world's largest social games companies (300m+ MAU at peak).",
      achievements: [
        "Led the cross-functional team on Zynga's flagship product (FarmVille), consistently exceeding revenue and DAU forecasts while improving cost efficiency.",
        "Progressed from Game Designer to Lead Product Manager on FarmVille during its peak at 32M DAU, owning growth, release cadence, and platform optimisation.",
        "Brought in during soft launch on CoasterVille to diagnose retention and engagement issues and reshape the product roadmap — growing the game to a peak of ~6M DAU and $300k/day revenue.",
        "Owned end-to-end product direction for CastleVille — roadmap, prioritisation, and analysis — at 11M DAU and $400k/day revenue, managing a team of 11 PMs.",
        "Won Rockstar Award for Product Management while establishing analysis and design best practices across Zynga.",
      ],
    },
    {
      company: "Shell",
      role: "Product Consultant",
      dates: "Jun 2014 – Sep 2015",
      summary: "Embedded as a product consultant within Shell's innovation hub, working across downstream, trading and supply, IT, and design functions.",
      achievements: [
        "Established product discipline in Shell's innovation hub, aligning downstream, trading, IT, and design functions around agile delivery.",
      ],
    },
  ];

  const education = [
    {
      school: "California Polytechnic State University, San Luis Obispo",
      degree: "B.S. Computer Science",
      dates: "",
    },
  ];

  const accomplishments = [
    "Solo motorcycle journey around the world across 46 countries",
    "Author of The Only Way Out Is Through",
    "British Weightlifting L2 qualified Olympic Weightlifting coach",
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
              Curriculum Vitae
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              Heather Sinclair
            </h1>
            <p className="text-2xl text-neutral-300 mb-4">
              Senior Product Leader — B2C, Data & AI
            </p>
            <p className="text-lg text-neutral-400">
              Hertfordshire | London-based hybrid or remote
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.div {...fadeInUp}>
                <h2 className="text-4xl font-bold mb-6">Profile</h2>
                <div className="text-lg text-neutral-700 space-y-4">
                  <p>
                    Senior product operator with deep experience owning high-engagement B2C products — from social games
                    at 32M DAU through to live marketplaces and consumer fintech. Works best as a high-leverage IC or
                    player-coach: close to the data, close to the product, and using AI tooling to compress cycle time and expand
                    analytical bandwidth in ways traditional team structures can't match.
                  </p>
                  <p>
                    Recognised for cutting through ambiguity to find the highest-leverage problem, then driving it to a measurable
                    outcome through rigorous experimentation and sharp product judgment. Has built product functions from scratch,
                    turned around declining consumer products, and shipped across growth, trust, platform, and monetisation — often
                    simultaneously.
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <h3 className="text-2xl font-bold mb-6">Core Skills</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Award size={20} className="text-brand-yellow flex-shrink-0 mt-1" />
                  <span className="text-neutral-700">A/B & multivariate testing</span>
                </div>
                <div className="flex items-start gap-2">
                  <Award size={20} className="text-brand-yellow flex-shrink-0 mt-1" />
                  <span className="text-neutral-700">SQL & data analysis</span>
                </div>
                <div className="flex items-start gap-2">
                  <Award size={20} className="text-brand-yellow flex-shrink-0 mt-1" />
                  <span className="text-neutral-700">Growth & funnel optimisation</span>
                </div>
                <div className="flex items-start gap-2">
                  <Award size={20} className="text-brand-yellow flex-shrink-0 mt-1" />
                  <span className="text-neutral-700">Marketplace & platform dynamics</span>
                </div>
                <div className="flex items-start gap-2">
                  <Award size={20} className="text-brand-yellow flex-shrink-0 mt-1" />
                  <span className="text-neutral-700">Product strategy & roadmapping</span>
                </div>
                <div className="flex items-start gap-2">
                  <Award size={20} className="text-brand-yellow flex-shrink-0 mt-1" />
                  <span className="text-neutral-700">Team building & mentorship</span>
                </div>
                <div className="flex items-start gap-2">
                  <Award size={20} className="text-brand-yellow flex-shrink-0 mt-1" />
                  <span className="text-neutral-700">AI & ML product integration</span>
                </div>
                <div className="flex items-start gap-2">
                  <Award size={20} className="text-brand-yellow flex-shrink-0 mt-1" />
                  <span className="text-neutral-700">Performance marketing</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact & Download Links */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:hsinclair@fastmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-yellow text-neutral-900 font-medium rounded-full hover:bg-brand-yellow-hover transition-all"
            >
              <Mail size={20} />
              hsinclair@fastmail.com
            </a>
            <a
              href="https://linkedin.com/in/heather-sinclair-287b5b"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-neutral-900 text-neutral-900 font-medium rounded-full hover:bg-neutral-50 transition-all"
            >
              <Linkedin size={20} />
              LinkedIn Profile
            </a>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Work Experience</h2>
          </motion.div>

          <div className="space-y-12">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-12 border-l-2 border-neutral-200"
              >
                <div className="absolute left-0 top-0 -translate-x-[9px] w-4 h-4 bg-neutral-900 rounded-full" />

                <div className="mb-2 text-sm text-neutral-500">{job.dates}</div>
                <h3 className="text-2xl font-bold mb-1">{job.role}</h3>
                <div className="flex items-center gap-2 mb-4 text-neutral-600">
                  <Briefcase size={16} />
                  {job.company}
                </div>
                <p className="text-neutral-700 mb-4">{job.summary}</p>

                <ul className="space-y-2">
                  {job.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-neutral-900 rounded-full flex-shrink-0 mt-2" />
                      <span className="text-neutral-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Accomplishments Section */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div {...fadeInUp}>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <GraduationCap size={28} />
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="p-6 bg-white">
                    <div className="font-bold text-lg mb-1">{edu.degree}</div>
                    <div className="text-neutral-700">{edu.school}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Award size={28} />
                Other Accomplishments
              </h3>
              <div className="space-y-4">
                {accomplishments.map((accomplishment, index) => (
                  <div key={index} className="flex items-start gap-3 p-6 bg-white">
                    <Award size={20} className="text-neutral-900 flex-shrink-0 mt-1" />
                    <span className="text-neutral-700">{accomplishment}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Connect
            </h2>
            <p className="text-xl text-neutral-600 mb-12">
              Interested in working together? View my projects, explore the Interactive AI CV,
              or reach out directly to start a conversation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:hsinclair@fastmail.com"
                className="px-8 py-4 bg-brand-yellow text-neutral-900 font-medium rounded-full hover:bg-brand-yellow-hover transition-all"
              >
                Get in Touch
              </a>
              <Link
                to="/work"
                className="px-8 py-4 border-2 border-neutral-900 text-neutral-900 font-medium rounded-full hover:bg-neutral-50 transition-all"
              >
                View Work
              </Link>
              <Link
                to="/interactive-cv"
                className="px-8 py-4 bg-neutral-100 text-neutral-900 font-medium rounded-full hover:bg-neutral-200 transition-all"
              >
                Ask AI CV
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
