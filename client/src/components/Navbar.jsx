// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaArrowUp } from 'react-icons/fa';

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on scroll or link click
  useEffect(() => {
    if (!isOpen) return;
    const closeMenu = () => setIsOpen(false);
    window.addEventListener('scroll', closeMenu);
    return () => window.removeEventListener('scroll', closeMenu);
  }, [isOpen]);

  // Scroll to top on logo click
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-charcoal2/80 backdrop-blur-lg shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xl font-extrabold text-olive tracking-wide focus:outline-none group"
            aria-label="Scroll to top"
          >
            <span className="drop-shadow-glow">Safa</span>
            <span className="hidden sm:inline-block text-beige/60 text-base font-mono tracking-tight group-hover:text-olive transition">
              / Portfolio
            </span>
            <FaArrowUp className="opacity-0 group-hover:opacity-100 ml-1 text-olive transition duration-300" size={14} />
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-beige font-medium px-2 py-1 transition-colors duration-200 hover:text-olive focus:text-olive
                  after:content-[''] after:block after:h-0.5 after:bg-olive after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
                style={{ position: "relative" }}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-beige focus:outline-none p-2 rounded-lg hover:bg-olive/10 transition"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}
        >
          <div className="flex flex-col mt-4 gap-2 pb-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-beige font-medium px-4 py-2 rounded-lg hover:bg-olive/10 hover:text-olive transition"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
