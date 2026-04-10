import image_3a6c782f505aade97bc2cb116db05aa732e138ae from 'figma:asset/3a6c782f505aade97bc2cb116db05aa732e138ae.png'
import articlePhoto from 'figma:asset/2e5cc8d0ea775a16bd085105f64e8591dbcf5481.png';
import madOrNomadPhoto from 'figma:asset/08cf74dcce11f1cb4be389adab122208796a9841.png';
import itchyBootsPhoto from 'figma:asset/fce49a4376fb4aa24c544ce93f29249e4c41039f.png';
import advRiderPhoto from 'figma:asset/d86449b21ac87d5d90a1628989a88b804d65e74a.png';
import personalPhoto from 'figma:asset/e5ac81635bd49b822a325e073c7f72a66e571b06.png';
import journeyPhoto from 'figma:asset/ad9b45ee5fcaa2809ab4bb06bc8320a14d648123.png';
import { motion } from "motion/react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { BookOpen, Calendar, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";

export function Personal() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const articles = [
    {
      title: "Interview: Heather Sinclair",
      date: "December 2, 2020",
      publication: "Itchy Boots",
      summary: "A personal interview exploring the journey from video game product manager to solo motorcycle adventurer. The piece covers early experiences learning to ride in India, the decision to travel the world on a lightweight Suzuki DRZ400, and the realities of long-distance overlanding.",
      thumbnail: itchyBootsPhoto,
      link: "https://www.itchyboots.com/blog/more-adv-riders-1/10-questions-to-adventure-motorcyclist-heather-sinclair",
    },
    {
      title: "Predictions: Round the World Motorcycle Routes",
      date: "January 20, 2022 (Updated July 19, 2025)",
      publication: "Mad or Nomad",
      summary: "An analytical look at how global events—particularly COVID-19, geopolitics, and rising costs—have reshaped traditional round-the-world motorcycle travel. The article combines personal experience with broader industry insight to forecast which routes will reopen, which will remain difficult, and how riders must adapt.",
      thumbnail: madOrNomadPhoto,
      link: "https://www.madornomad.com/predictions-round-the-world-motorcycle-routes/",
    },
    {
      title: "Endless Miles of Gravel: A Solo Motorcycle Ride Across the Trans America Trail",
      date: "January 10, 2022",
      publication: "Roadtrippers",
      summary: "A narrative travel piece documenting a solo coast-to-coast journey across the United States via the Trans America Trail. Set against the backdrop of pandemic travel restrictions, the article captures the physical and mental challenges of long-distance off-road riding—from mud-soaked farmland to remote desert solitude.",
      thumbnail: articlePhoto,
      link: "https://roadtrippers.com/voices/trans-america-trail-motorcycle-road-trip/",
    },
    {
      title: "Traveler Interview: Improbably Adventuring With Heather Sinclair",
      date: "December 20, 2022",
      publication: "Adventure Rider (ADVrider)",
      summary: "A candid and unfiltered interview that challenges the romanticised narrative of round-the-world motorcycle travel. Rather than focusing on highlight-reel moments, the piece explores the harsher realities of long-term overlanding—mechanical failures, financial strain, isolation, and burnout.",
      thumbnail: advRiderPhoto,
      link: "https://www.advrider.com/improbably-adventuring-with-heather-sinclair/",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Header Section */}
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-2 bg-neutral-100 rounded-full text-sm mb-6">
                Personal
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Beyond the Product Work
              </h1>
              <p className="text-xl text-neutral-600">A collection of the things I’ve done outside of product—motorcycle travel, writing, and weightlifting. Mostly about figuring things out the hard way and what that teaches you.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="aspect-square bg-neutral-100 overflow-hidden rounded-2xl"
            >
              <ImageWithFallback
                src={personalPhoto}
                alt="Personal photo"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              {...fadeInUp}
              className="aspect-[4/3] bg-neutral-100 overflow-hidden rounded-2xl"
            >
              <ImageWithFallback
                src={journeyPhoto}
                alt="Journey"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <h2 className="text-4xl font-bold mb-6">My Journey</h2>
              <div className="space-y-4 text-lg text-neutral-700">
                <p>
                  I moved to the UK from San Francisco in 2015, and somewhere along the way it quietly became home.
                </p>
                <p>
                  A few years later, I left everything behind to ride a motorcycle around the world. What started as a vague idea turned into a journey across 46 countries—learning to fix a bike from YouTube videos, navigating borders that don't work the way you expect, and spending long stretches of time completely on my own. It wasn't always the kind of adventure people like to talk about. There were breakdowns, wrong turns, and moments where it felt like the whole thing might fall apart. But that was also the point. I've always been more interested in what something is really like than how it looks from the outside.
                </p>
                <p>
                  I wrote about that experience in <em>The Only Way Out is Through</em>, and in a number of articles that try to capture the less polished side of long-distance travel—the parts that are difficult, repetitive, or uncertain, but ultimately the most meaningful.
                </p>
                <p>
                  More recently, I've found a different kind of challenge in Olympic weightlifting. I've been training for the past three years and am now a British Weightlifting Level 2 qualified coach, coaching with Immortal Athletics in Hatfield. It's a very different pursuit, but one that shares a similar appeal: showing up consistently, working through frustration, and finding progress in small, incremental steps.
                </p>
                <p>
                  I'm drawn to things that take time, that don't always go to plan, and that require you to figure them out as you go.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Travel Writing</h2>
            <p className="text-xl text-neutral-600">
              Stories and reflections from the road
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((article, index) => (
              <motion.a
                key={index}
                href={article.link}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group block bg-neutral-50 hover:shadow-xl transition-all overflow-hidden"
              >
                <div className="aspect-[16/9] bg-neutral-200 overflow-hidden">
                  <ImageWithFallback
                    src={article.thumbnail}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-neutral-500 mb-3">
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar size={16} />
                      {article.date}
                    </div>
                    <div className="font-medium text-neutral-600">Published in {article.publication}</div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-neutral-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-neutral-700 mb-4">{article.summary}</p>
                  <div className="inline-flex items-center gap-2 text-neutral-900 font-medium group-hover:gap-3 transition-all">
                    Read Article
                    <ExternalLink size={16} />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resources - Book */}
      <section className="py-24 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Book</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="aspect-[3/4] max-w-md mx-auto w-full bg-neutral-800 overflow-hidden rounded-xl shadow-2xl"
            >
              <ImageWithFallback
                src={image_3a6c782f505aade97bc2cb116db05aa732e138ae}
                alt="Book cover"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
              <BookOpen size={48} className="mb-6" />
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                The Only Way Out Is Through
              </h3>
              <p className="text-xl text-neutral-300 mb-6">
                Nobody can possibly prepare for everything that happens on a motorcycle journey, but most people don't throw themselves into the deep end with almost no preparation at all.
              </p>
              <p className="text-xl text-neutral-300 mb-6">
                That's just what Heather Sinclair decided to do after losing her job. She bought a motorcycle and shipped it to the far side of the planet. The goal was to make it back home, from Indonesia to London, whatever it took. She had little riding experience and no mechanical knowledge, and her journey turned out to be a harder task than she could have imagined.
              </p>
              <p className="text-xl text-neutral-300 mb-6">
                The Only Way Out Is Through is a story of the highs and lows of solo motorcycle travel, of overcoming obstacles, and of the people that one meets on the way.
              </p>
              <div className="space-y-2 mb-8 text-neutral-400">
                <div><span className="font-medium">Published:</span> May 2021</div>
                <div><span className="font-medium">Pages:</span> 207</div>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.amazon.co.uk/Only-Way-Out-Through-Motorcycle-ebook/dp/B095J5ZG5X/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-brand-yellow text-neutral-900 font-medium rounded-full hover:bg-brand-yellow-hover transition-all inline-block"
                >
                  Purchase Book
                </a>
                <a
                  href="https://read.amazon.co.uk/sample/B095J5ZG5X?clientId=share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 border-2 border-white text-white font-medium rounded-full hover:bg-white/10 transition-all inline-block"
                >
                  Read Sample Chapter
                </a>
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
              Interested in collaborating, discussing travel, or talking product?
              I'd love to hear from you.
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
                View Professional Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
