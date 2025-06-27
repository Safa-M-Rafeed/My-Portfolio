// src/components/Contact.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const leftVariants = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const rightVariants = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.2, ease: "easeOut" } },
};

export default function Contact() {
  return (
    <motion.section
      id="contact"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="py-20 bg-charcoal2 flex justify-center items-center"
    >
      <div className="max-w-4xl w-full bg-charcoal/90 rounded-3xl shadow-2xl border border-olive/20 p-0 md:p-0 overflow-hidden flex flex-col md:flex-row">
        {/* Left: Contact Info */}
        <motion.div
          variants={leftVariants}
          className="md:w-1/2 flex flex-col justify-center p-8 bg-charcoal2/80"
        >
          <h2 className="text-3xl font-bold text-beige mb-4">Let’s Connect</h2>
          <p className="text-beige/80 mb-6">
            I’m always open to new opportunities, collaborations, or just a friendly chat.<br />
            Reach out through any channel below!
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 text-beige/90">
              <FaEnvelope className="text-olive" />
              <a href="mailto:Safamrafeed@gmail.com" className="hover:text-olive transition">Safamrafeed@gmail.com</a>
            </div>
            <div className="flex items-center gap-3 text-beige/90">
              <FaPhoneAlt className="text-olive" />
              <span>+94 759050015</span>
            </div>
            <div className="flex items-center gap-3 text-beige/90">
              <FaLinkedin className="text-blue-400" />
              <a href="https://linkedin.com/in/safa-m-rafeed-b35531216" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                /safa-m-rafeed-b35531216
              </a>
            </div>
            <div className="flex items-center gap-3 text-beige/90">
              <FaGithub className="text-beige" />
              <a href="https://github.com/Safa-M-Rafeed" target="_blank" rel="noopener noreferrer" className="hover:text-olive transition">
                /Safa-M-Rafeed
              </a>
            </div>
            <div className="flex items-center gap-3 text-beige/90">
              <FaInstagram className="text-pink-400" />
              <a href="https://www.instagram.com/safa_rafeed" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition">
                @safa_rafeed
              </a>
            </div>
            <div className="flex items-center gap-3 text-beige/90">
              <FaMapMarkerAlt className="text-olive" />
              <span>Colombo, Sri Lanka</span>
            </div>
          </div>
        </motion.div>
        {/* Right: Contact Form */}
        <motion.div
          variants={rightVariants}
          className="md:w-1/2 bg-charcoal/80 flex flex-col justify-center p-8"
        >
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-charcoal2 rounded-lg p-3 text-beige placeholder:text-beige/50 border border-olive/10 focus:outline-none focus:border-olive transition"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="bg-charcoal2 rounded-lg p-3 text-beige placeholder:text-beige/50 border border-olive/10 focus:outline-none focus:border-olive transition"
              required
            />
            <textarea
              placeholder="Your Message"
              className="bg-charcoal2 rounded-lg p-3 text-beige placeholder:text-beige/50 border border-olive/10 focus:outline-none focus:border-olive transition"
              rows={4}
              required
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-olive to-beige text-charcoal font-semibold rounded-full py-3 px-6 mt-2 hover:from-beige hover:to-olive transition"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
}
