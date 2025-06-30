/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.3em',
      },
      colors: {
        accent: '#2563eb',
      },
      animation: {
        bounceSlow: 'bounce 3s infinite',
      },
      boxShadow: {
        glow: '0 0 20px rgba(37, 99, 235, 0.6)',
      },
    },
  },
  plugins: [
    require('tailwindcss/plugin')(function ({ addUtilities }) {
      addUtilities({
        '.hero-bg-lines::before': {
          content: '""',
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          backgroundImage:
            'linear-gradient(135deg, rgba(255,255,255,0.04) 25%, transparent 25%), linear-gradient(225deg, rgba(255,255,255,0.04) 25%, transparent 25%)',
          backgroundSize: '60px 60px',
          zIndex: '0',
          pointerEvents: 'none',
        },
      });
    }),
  ],
};
