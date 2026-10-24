/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-bg': '#0B1120',
        'brand-card': '#151E2E',
        'brand-teal': '#2DD4BF',
        'brand-text': '#94A3B8',
      },
      fontFamily: {
        sans: ['Tajawal', 'system-ui', 'sans-serif'], 
      }
    },
  },
  plugins: [],
}