import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaDownload, FaArrowRight, FaCode, FaLaptopCode } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

export default function HeroSection() {
  const [roles] = useState([
    "Full Stack Developer", 
    "IT Undergraduate", 
    "Java Developer", 
    "Spring Boot Enthusiast"
  ]);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeout(() => {
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen bg-charcoal relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-olive rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-beige rounded-full animate-ping"></div>
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-olive rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-olive/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-beige/5 rounded-full filter blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="inline-flex items-center bg-charcoal2/50 backdrop-blur-sm border border-olive/20 rounded-full px-4 py-2 text-sm text-olive"
              >
                <span className="w-2 h-2 bg-olive rounded-full mr-2 animate-pulse"></span>
                Available for opportunities
              </motion.div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-beige leading-tight">
                Hi, I'm{' '}
                <span className="text-olive">Safa</span>
                <br />
                <span className="text-3xl lg:text-5xl">M Rafeed</span>
              </h1>
              
              <div className="h-16 flex items-center">
                <motion.div
                  key={currentRoleIndex}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-xl lg:text-2xl text-beige/80 font-mono">
                    {roles[currentRoleIndex]}
                  </p>
                </motion.div>
              </div>
              
              <p className="text-lg text-beige/70 max-w-md leading-relaxed">
                Passionate about building robust web applications and enterprise solutions. 
                Experienced in Java, Spring Boot, Laravel, and modern frontend frameworks.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact"
                className="inline-flex items-center bg-olive hover:bg-olive/90 text-charcoal px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
              >
                <HiMail className="mr-2" />
                Let's Connect
                <FaArrowRight className="ml-2 w-4 h-4" />
              </a>
              
              <a
                href="Safa CV Updated 2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-charcoal2/50 hover:bg-charcoal2/70 backdrop-blur-sm border border-beige/20 text-beige px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
              >
                <FaDownload className="mr-2" />
                Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6 pt-4">
              <a href="https://github.com/Safa-M-Rafeed" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
                <FaGithub className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/safa-m-rafeed-b35531216" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/safa_rafeed" target="_blank" rel="noopener noreferrer" className="social-icon text-pink-500" aria-label="Instagram">
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="bg-charcoal2/50 backdrop-blur-sm border border-beige/10 rounded-3xl p-8 shadow-2xl">
              <div className="text-center space-y-6">
                <div className="relative mx-auto w-48 h-48">
                  <div className="absolute inset-0 bg-gradient-to-r from-olive to-beige rounded-full animate-spin-slow opacity-20"></div>
                  <img
                    src="/profile.jpg"
                    alt="Profile"
                    className="w-full h-full rounded-full object-cover border-4 border-beige/20 relative z-10"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-olive text-charcoal w-12 h-12 rounded-full flex items-center justify-center font-bold">
                    <FaCode className="w-5 h-5" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="text-center p-4 bg-charcoal/30 rounded-xl border border-olive/10">
                    <div className="text-2xl font-bold text-olive">4+</div>
                    <div className="text-sm text-beige/70">Projects</div>
                  </div>
                  <div className="text-center p-4 bg-charcoal/30 rounded-xl border border-olive/10">
                    <div className="text-2xl font-bold text-olive">2+</div>
                    <div className="text-sm text-beige/70">Years Learning</div>
                  </div>
                </div>

                <div className="bg-charcoal/30 rounded-xl p-4 border border-olive/10">
                  <div className="text-sm text-beige/70 mb-2">Currently working with</div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {['Java', 'Spring Boot', 'React', 'Laravel'].map((tech) => (
                      <span key={tech} className="bg-olive/20 text-olive text-xs px-2 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -left-4 bg-olive/20 backdrop-blur-sm rounded-xl p-3 border border-olive/30">
              <FaLaptopCode className="w-6 h-6 text-olive" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-beige/20 backdrop-blur-sm rounded-xl p-3 border border-beige/30">
              <span className="text-beige font-mono text-sm">{'</>'}</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
        >
          <a href="#about" className="inline-block animate-bounce text-beige/50 hover:text-olive transition-colors">
            <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
              <div className="w-1 h-3 bg-current rounded-full mt-2 animate-pulse"></div>
            </div>
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
