// src/components/Security.jsx
import { motion } from 'framer-motion';

export default function Security() {
  return (
    <motion.section
      id="security"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-24 px-6 max-w-4xl mx-auto text-center"
    >
      <h2 className="text-3xl font-bold uppercase tracking-widest mb-8">
        Cybersecurity Skills
      </h2>
      <p className="text-gray-400 mb-6">
        I’ve completed multiple hands-on labs and courses that introduced me to both offensive and defensive security concepts. From ethical hacking to threat detection, each room sharpened my awareness of how systems are built—and broken.
      </p>

      <div className="grid gap-4 md:grid-cols-2 text-left text-sm text-gray-300">
        <ul className="list-disc list-inside">
          <li><strong>Security Principles</strong> — CIA triad, authentication, access control</li>
          <li><strong>Defensive Security</strong> — SOC, SIEM, DFIR & malware analysis basics</li>
          <li><strong>Offensive Security</strong> — Safe & legal website hacking intro</li>
          <li><strong>Search Skills</strong> — Using Google Dorks & search engines for research</li>
        </ul>
        <ul className="list-disc list-inside">
          <li><strong>Networking Basics</strong> — IP, DNS, packets, ports</li>
          <li><strong>Linux Fundamentals</strong> — Shell commands & navigating file systems</li>
          <li><strong>Tools</strong> — Custom home labs & TryHackMe hands-on modules</li>
        </ul>
      </div>
    </motion.section>
  );
}
