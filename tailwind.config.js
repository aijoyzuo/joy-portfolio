/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-bricolage)', 'sans-serif'],
        serifTC: ['var(--font-noto-serif-tc)', 'serif'],
        sansTC: ['var(--font-noto-sans-tc)', 'sans-serif'],
      },
      colors: {
        accent: '#2F6FED',
        ink: '#111827',
        yellow: { DEFAULT: '#FFD84D', pac: '#FFD400' },
        cream: '#FFFDF5',
      },
    },
  },
  plugins: [],
};
