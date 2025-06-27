// src/components/Footer.jsx
import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-charcoal2 border-t border-olive/20 py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Logo and tagline */}
        <div className="flex flex-col items-center md:items-start">
          <span className="text-xl font-extrabold text-olive mb-1">Safa M Rafeed</span>
          <span className="text-beige/70 text-sm">Building ideas into code. Let's connect!</span>
        </div>

        {/* Center: Social links */}
        <div className="flex gap-5">
          <a
            href="mailto:Safamrafeed@gmail.com"
            className="text-beige/70 hover:text-olive transition"
            aria-label="Email"
          >
            <FaEnvelope size={22} />
          </a>
          <a
            href="https://linkedin.com/in/safa-m-rafeed-b35531216"
            target="_blank"
            rel="noopener noreferrer"
            className="text-beige/70 hover:text-olive transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="https://github.com/Safa-M-Rafeed"
            target="_blank"
            rel="noopener noreferrer"
            className="text-beige/70 hover:text-olive transition"
            aria-label="GitHub"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://www.instagram.com/safa_rafeed"
            target="_blank"
            rel="noopener noreferrer"
            className="text-beige/70 hover:text-olive transition"
            aria-label="Instagram"
          >
            <FaInstagram size={22} />
          </a>
        </div>

        {/* Right: Copyright */}
        <div className="text-beige/50 text-xs text-center md:text-right">
          © {new Date().getFullYear()} Safa M Rafeed. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
