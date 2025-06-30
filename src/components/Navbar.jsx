import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import profilePic from '../assets/profile.jpeg'; 

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { id: '01', label: 'Home', href: '#hero' },
    { id: '02', label: 'About', href: '#about' },
    { id: '03', label: 'Portfolio', href: '#projects' },
    { id: '04', label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Avatar + Name */}
      <div className="fixed top-5 left-5 z-50 flex items-center space-x-3">
        <img src={profilePic} alt="Profile" className="w-10 h-10 rounded-full" />
        <span className="uppercase tracking-widest font-semibold text-white">Jesse</span>
      </div>

      {/* Open Menu Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed top-5 right-5 z-50 text-white text-xl"
        >
          <FaBars />
        </button>
      )}

      {/* Overlay Navigation */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black text-white z-50 flex items-center justify-center"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 text-2xl"
            >
              <FaTimes />
            </button>
            <ul className="space-y-8 text-2xl tracking-wide text-center">
              {navLinks.map(({ id, label, href }) => (
                <li key={id}>
                  <a href={href} onClick={() => setOpen(false)} className="hover:text-accent transition-colors">
                    <span className="text-gray-500 mr-2">{id}</span>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
