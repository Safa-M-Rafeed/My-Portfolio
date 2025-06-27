// src/components/Skills.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt, FaAws } from "react-icons/fa";
import { SiSpringboot, SiPostman, SiFigma, SiCanva, SiHtml5, SiCss3, SiMysql, SiMongodb } from "react-icons/si";

const skills = [
  { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
  { name: "Figma", icon: <SiFigma className="text-purple-400" /> },
  { name: "Canva", icon: <SiCanva className="text-blue-400" /> },
  { name: "HTML/CSS", icon: <><SiHtml5 className="text-orange-500 inline w-7 h-7" /> <SiCss3 className="text-blue-500 inline w-7 h-7" /></> },
  { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
  { name: "React", icon: <FaReact className="text-blue-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "Spring Boot", icon: <SiSpringboot className="text-green-500" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
  { name: "AWS", icon: <FaAws className="text-yellow-500" /> },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Skills() {
  return (
    <motion.section
      id="skills"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="py-20 bg-charcoal2"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 text-beige"
        >
          Technical Skills
        </motion.h2>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8"
          variants={containerVariants}
        >
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="bg-charcoal2/80 rounded-2xl shadow-xl flex flex-col items-center justify-center p-6 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="w-14 h-14 flex items-center justify-center mb-4 text-4xl">
                {skill.icon}
              </div>
              <span className="text-beige text-base font-medium">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
