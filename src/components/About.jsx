// src/components/About.jsx
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import profilePic from '../assets/profile.jpeg';

export default function About() {
  return (
    <section id="about" className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Animated Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg"
        >
          <img
            src={profilePic}
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </motion.div>

        {/* Animated Text */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-wider mb-4">
            About Me
          </h2>
          <p className="text-gray-400 leading-relaxed">
            I’ve always been drawn to the challenge of building things that not only work — but work securely. I’m Jesse, a developer blending fullstack skills with a deep interest in cybersecurity and GenAI.
          </p>
          <p className="text-gray-500 mt-4 italic">
            Let’s build something great together.
          </p>

          {/* Resume and Social Icons */}
          <div className="mt-6">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline block mb-4"
            >
              Checkout my resume
            </a>

            <div className="flex justify-center md:justify-start space-x-4 mb-6">
              <a
                href="https://twitter.com/jessechukwuemeka"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.linkedin.com/in/jessechukwuemeka"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full"
              >
                <FaLinkedin />
              </a>
            </div>

            <h3 className="text-lg font-semibold mb-2">Contact me here!</h3>
            <p className="text-gray-400">
              Email:{' '}
              <a href="mailto:jessejoseph65@gmail.com" className="text-accent hover:underline">
                jessejoseph65@gmail.com
              </a>
            </p>
            <p className="text-gray-400">
              Phone:{' '}
              <span className="text-accent">(+234)8141299488</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
