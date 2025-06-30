// src/components/Footer.jsx
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="py-10 bg-black text-center text-white border-t border-gray-800 mt-10">
      <div className="flex justify-center space-x-6 mb-4">
        <a
          href="https://github.com/creativejes"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition text-xl"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/jessechukwuemeka"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition text-xl"
        >
          <FaLinkedin />
        </a>
      </div>
      <p className="text-sm text-gray-500">© 2025 Jesse. All rights reserved.</p>
    </footer>
  );
}
