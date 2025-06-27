// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaMapMarkerAlt, FaUserAstronaut } from "react-icons/fa";

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
      className="flex justify-center items-center min-h-[70vh] bg-charcoal2 py-16 px-2 md:px-8"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative max-w-6xl w-full bg-charcoal/80 rounded-3xl shadow-2xl p-8 md:p-16 border border-olive/20 overflow-hidden"
      >
        {/* Decorative Blobs */}
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-olive/20 rounded-full blur-2xl z-0"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-beige/10 rounded-full blur-2xl z-0"></div>
        {/* About Card Content */}
        <div className="relative z-10">
          {/* Header and Location */}
          <div className="flex items-center gap-4 mb-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-beige mb-1">About Me</h2>
              <div className="flex items-center gap-2 text-olive text-base md:text-lg">
                <FaMapMarkerAlt />
                <span>Colombo, Sri Lanka</span>
              </div>
            </div>
          </div>
          {/* Narrative/Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-beige/90 leading-relaxed mb-4 text-lg md:text-xl"
          >
            <span className="font-semibold text-beige">Hi! I'm Safa M Rafeed</span>, an Information Technology undergraduate at SLIIT Campus. I’m passionate about building robust web and enterprise applications, and thrive on solving real-world problems through code and collaboration.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-beige/70 mb-4 text-base md:text-lg"
          >
            My journey started with curiosity and a love for technology. Over the years, I’ve developed hands-on experience with Java, PHP, Spring Boot, Laravel, and modern frontend frameworks. I believe in continuous learning and teamwork to achieve impactful results.
          </motion.p>
          {/* Quick Facts */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
          >
            <div className="flex items-center gap-3 bg-charcoal2/80 rounded-xl p-6 border border-olive/20">
              <FaGraduationCap className="text-olive w-7 h-7" />
              <div>
                <div className="font-semibold text-beige">Education</div>
                <div className="text-beige/70 text-base">
                  BSc (Hons) in IT, SLIIT Campus<br />
                  G.C.E. A/L, Valaichenai Hindu College
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-charcoal2/80 rounded-xl p-6 border border-olive/20">
              <FaUserAstronaut className="text-olive w-7 h-7" />
              <div>
                <div className="font-semibold text-beige">Fun Fact</div>
                <div className="text-beige/70 text-base">
                  I love exploring new tech, collaborating on open source, and sharing what I learn!
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}
