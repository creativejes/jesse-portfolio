import Navbar from './components/Navbar';
import { motion } from 'framer-motion';
import Projects from './components/Projects';
import About from './components/About';

function App() {
  return (
    <div className="bg-black text-white font-sans scroll-smooth">
      <Navbar />

      {/* Hero */}
      <section
        id="hero"
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden"
        style={{
          backgroundColor: '#000',
          backgroundImage:
            'repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0, rgba(255,255,255,0.03) 1px, transparent 2px, transparent 6px)',
          backgroundSize: '100% 100%',
          backgroundRepeat: 'repeat',
        }}
      >
        <div className="relative z-10">
          <p className="text-gray-400 tracking-widest text-sm">HELLO! I’M</p>
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-widest uppercase">JESSE</h1>
          <p className="text-gray-500 mt-2">Fullstack Developer • Builder • Problem Solver</p>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="mt-10"
          >
            <a href="#projects" className="text-gray-400 text-sm">Scroll down ↓</a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Projects Section */}
      <Projects />

      {/* Contact */}
      <section id="contact" className="py-24 px-6 max-w-md mx-auto text-center">
        <h2 className="text-2xl font-semibold uppercase tracking-widest mb-8">Contact</h2>
        <p className="text-gray-400 mb-4">Got a project, idea, or opportunity?</p>
        <a
          href="mailto:jesse@example.com"
          className="inline-block px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
        >
          Let’s Talk
        </a>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-gray-500 text-sm">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://github.com/jesse-dev" className="hover:text-white">GitHub</a>
          <a href="https://linkedin.com/in/jesse" className="hover:text-white">LinkedIn</a>
          <a href="mailto:jesse@example.com" className="hover:text-white">Email</a>
        </div>
        <p>© 2025 Jesse. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
