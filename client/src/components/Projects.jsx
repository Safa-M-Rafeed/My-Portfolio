// src/components/Projects.jsx

/* 
// ===== Old Backend/API Version (Commented Out) =====
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/projects")
      .then((response) => {
        setProjects(response.data);
        setLoading(false);
        console.log("Projects data:", response.data);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
        setLoading(false);
      });
  }, []);

  return (
    <section id="projects" className="py-20 bg-charcoal">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 text-olive">Featured Projects</h2>
        {loading ? (
          <div className="text-center text-beige/70 text-xl py-12">
            Loading projects...
          </div>
        ) : projects && projects.length === 0 ? (
          <div className="text-center text-beige/70 text-xl py-12">
            No projects to display.
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div
                key={project._id || idx}
                className="relative bg-charcoal2 rounded-2xl shadow-xl overflow-hidden border border-olive/20 hover:border-olive transition-all duration-300 group"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Project Image Placeholder }
                <div className="h-48 overflow-hidden">
                  <div className="bg-gray-200 border-2 border-dashed w-full h-full transition-transform duration-500 group-hover:scale-110" />
                </div>
                {/* Project Content }
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-beige">{project.title || "Untitled Project"}</h3>
                  <p className="mb-4 text-beige/80">{project.description || "No description provided."}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {(project.techStack || []).map((tech, i) => (
                      <span key={i} className="bg-charcoal text-olive text-xs px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  {/* Links }
                  <div className="flex gap-4">
                    {project.github && project.github.trim() !== "" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-olive hover:text-beige transition duration-300"
                      >
                        <FaGithub className="mr-2" />
                        GitHub
                      </a>
                    )}
                    {project.demo && project.demo.trim() !== "" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-olive hover:text-beige transition duration-300"
                      >
                        <FaExternalLinkAlt className="mr-2" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
                {/* Hover Overlay - Only show if project has links }
                {(project.github && project.github.trim() !== "") || (project.demo && project.demo.trim() !== "") ? (
                  <div className={`absolute inset-0 bg-gradient-to-b from-charcoal/90 to-charcoal2/90 flex items-center justify-center transition-opacity duration-300 ${hoveredIndex === idx ? 'opacity-100' : 'opacity-0'}`}>
                    <a
                      href={project.github && project.github.trim() !== "" ? project.github : project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-olive text-charcoal font-medium rounded-lg hover:bg-beige transition duration-300"
                    >
                      View Project
                    </a>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
*/

// src/components/Projects.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Travel and Tourism Management System",
    description:
      "A comprehensive web application for managing travel packages, bookings, and customer inquiries. Built as a major academic project in 2024.",
    techStack: ["HTML", "CSS", "PHP", "MySQL"],
    github: "",
    demo: "",
    year: 2024,
  },
  {
    title: "Staff Management System",
    description:
      "A staff management solution developed in 2025 using Java, MySQL, and Tomcat server. Handles employee records, attendance, and payroll.",
    techStack: ["Java", "MySQL", "Tomcat"],
    github: "",
    demo: "",
    year: 2025,
  },
  {
    title: "Personal Portfolio Website",
    description:
      "A modern, responsive portfolio built with React and Tailwind CSS, inspired by Dribbble and Figma community designs.",
    techStack: ["React", "TailwindCSS", "Framer Motion"],
    github: "",
    demo: "",
    year: 2025,
  },
  {
    title: "Blog CMS (Laravel)",
    description:
      "A simple Blog Content Management System with full CRUD operations, built using Laravel. Features include fast routing, elegant syntax, database migrations, and robust background job processing.",
    techStack: ["Laravel", "PHP", "MySQL", "Blade"],
    github: "https://github.com/Safa-M-Rafeed/Blog-CMS-Laravel",
    demo: "",
    year: 2025,
  },
  {
    title: "Task Tracker (Spring Boot)",
    description:
      "A simple Task Tracker application built using Spring Boot. Demonstrates RESTful API design, Java backend development, and integration with modern frameworks.",
    techStack: ["Spring Boot", "Java"],
    github: "https://github.com/Safa-M-Rafeed/Task-Tracker-Springboot",
    demo: "",
    year: 2025,
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <motion.section
      id="projects"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="py-20 bg-charcoal"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-center mb-16 text-olive tracking-tight"
        >
          Featured Projects
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="relative bg-charcoal2 rounded-3xl shadow-xl overflow-hidden border border-olive/20 hover:shadow-olive/40 hover:-translate-y-2 transition-all duration-300 group flex flex-col"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Project Thumbnail/Initials */}
              <div className="h-36 flex items-center justify-center bg-gradient-to-br from-olive/30 to-charcoal/40">
                <span className="text-5xl font-extrabold text-olive/70 drop-shadow">
                  {project.title
                    .split(" ")
                    .map((w) => w[0])
                    .join("")
                    .slice(0, 2)}
                </span>
              </div>
              {/* Card Content */}
              <div className="flex-1 flex flex-col p-7">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-xl font-bold text-beige">{project.title}</h3>
                  {project.year && (
                    <span className="bg-olive/20 text-olive text-xs font-semibold px-2 py-1 rounded-full">
                      {project.year}
                    </span>
                  )}
                </div>
                <p className="mb-3 text-beige/80">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-charcoal text-olive text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-olive/80 text-charcoal rounded-full font-semibold hover:bg-olive transition"
                    >
                      <FaGithub className="mr-2" /> GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-beige/80 text-charcoal rounded-full font-semibold hover:bg-beige transition"
                    >
                      <FaExternalLinkAlt className="mr-2" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
              {/* Hover Overlay */}
              {(project.github || project.demo) && (
                <div
                  className={`absolute inset-0 bg-gradient-to-b from-charcoal/80 to-charcoal2/90 flex items-center justify-center transition-opacity duration-300 ${
                    hoveredIndex === idx ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <a
                    href={project.github || project.demo || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-olive text-charcoal font-bold rounded-2xl text-lg hover:bg-beige transition duration-300 shadow-xl"
                  >
                    View Project
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
