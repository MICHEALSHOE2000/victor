import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0b0b0b',
        gold: '#d4af37'
      },
      backgroundImage: {
        glass:
          'linear-gradient(120deg, rgba(255,255,255,0.14), rgba(255,255,255,0.04))'
      },
      boxShadow: {
        glow: '0 0 24px rgba(212, 175, 55, 0.28)'
      }
    }
  },
  plugins: []
};

export default config;
