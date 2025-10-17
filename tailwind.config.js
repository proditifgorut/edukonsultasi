/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': {
          DEFAULT: '#0D47A1',
          light: '#1976D2',
          dark: '#0a3a82',
        },
        'brand-gold': {
          DEFAULT: '#FFC107',
          dark: '#FFA000',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
