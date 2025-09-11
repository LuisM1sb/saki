/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'dark-gray': '#1F2937',
        'deep-blue': '#111827',
        'soft-gold': '#D1B06B',
        'dark-green': '#065F46',
        'light-gray': '#F9FAFB',
        'medium-gray': '#6B7280',
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(135deg, #111827 0%, #1F2937 100%)',
        'gradient-hero': 'linear-gradient(135deg, #111827 0%, #1F2937 50%, #065F46 100%)',
      }
    },
  },
  plugins: [],
}

