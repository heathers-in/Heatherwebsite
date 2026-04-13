import logoImage from "figma:asset/185e4b7030a08df10cbfb5700ac721d5ed96225f.png";
import { Link } from "react-router";
import { Linkedin, Mail, Instagram, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-100">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <img
              src={logoImage}
              alt="Heather Sinclair"
              className="h-20 md:h-24 mb-4 brightness-0 invert"
            />
            <p className="text-neutral-400">
              Senior product operator with deep experience owning high-engagement B2C products — from social games to live marketplaces and consumer fintech.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4">Navigation</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-neutral-400 hover:text-neutral-100 transition-colors">
                Home
              </Link>
              <Link to="/work" className="text-neutral-400 hover:text-neutral-100 transition-colors">
                Work
              </Link>
              <Link to="/cv" className="text-neutral-400 hover:text-neutral-100 transition-colors">
                CV
              </Link>
              <Link to="/personal" className="text-neutral-400 hover:text-neutral-100 transition-colors">
                Personal
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/in/heather-sinclair-287b5b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-neutral-100 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://www.instagram.com/heatherslifts/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-neutral-100 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://github.com/heathers-in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-neutral-100 transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="mailto:hsinclair@fastmail.com"
                className="text-neutral-400 hover:text-neutral-100 transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-800 text-center text-neutral-400 text-sm">
          © {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  );
}
