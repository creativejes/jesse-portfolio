import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

//  Import project images properly
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';

const projects = [
  {
    title: 'Complaint Logging System',
    description: 'A campus-based maintenance complaint system using Django + React.',
    stack: ['HTML5', 'Django', 'Tailwind CSS'],
    image: project1,
    github: 'https://github.com/creativejes/CMS',
    live: 'https://complaint-management-system-p4f8.onrender.com', 
    disabled: false
  },
  {
    title: 'Portfolio Website',
    description: 'A visual and technical snapshot of my work in motion.',
    stack: ['React', 'Vite', 'Framer Motion'],
    image: project2,
    github: 'https://github.com/creativejes/jesse-portfolio',
    live: 'https://jesse-portfolion-1.vercel.app/',
    disabled: false
  }
];

export default function Projects() {
  return (
    <section id="projects" className="bg-black text-white py-20 px-6 md:px-12">
      <h2 className="text-3xl font-bold uppercase tracking-widest text-center mb-12">Projects</h2>

      <div className="space-y-24">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`flex flex-col-reverse md:flex-row items-center gap-10 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="md:w-1/2 space-y-4">
              <h3 className="text-2xl font-semibold tracking-wider">{project.title}</h3>
              <p className="text-gray-400">{project.description}</p>
              <div className="flex flex-wrap gap-2 text-sm text-blue-400">
                {project.stack.map((tech, i) => (
                  <span key={i} className="bg-gray-800 px-2 py-1 rounded">{tech}</span>
                ))}
              </div>
              <div className="flex gap-4 mt-4">
                <a href={project.github} target="_blank" rel="noreferrer">
                  <FaGithub className="text-2xl hover:text-blue-500" />
                </a>
                {!project.disabled && (
                  <a href={project.live} target="_blank" rel="noreferrer">
                    <FaExternalLinkAlt className="text-2xl hover:text-blue-500" />
                  </a>
                )}
                {project.disabled && (
                  <span className="text-gray-600 text-2xl cursor-not-allowed" title="Live link not available">
                    <FaExternalLinkAlt />
                  </span>
                )}
              </div>
            </div>
            <div className="md:w-1/2">
              <img src={project.image} alt={project.title} className="rounded shadow-lg w-full" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
