import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CvHero } from "../components/interactive-cv/CvHero";
import { CvChatSection } from "../components/interactive-cv/CvChatSection";
import { CvFaqSection } from "../components/interactive-cv/CvFaqSection";

export function InteractiveCV() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <CvHero />
      <CvChatSection />
      <CvFaqSection />
      <Footer />
    </div>
  );
}
