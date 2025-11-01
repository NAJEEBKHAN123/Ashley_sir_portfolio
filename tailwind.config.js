/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        }
      },
      boxShadow: {
        'neumorphic': '5px 5px 10px #d1d9e6, -5px -5px 10px #ffffff',
        'neumorphic-dark': '5px 5px 10px #0c4a6e, -5px -5px 10px #0369a1',
        'soft': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'inner-neumorphic': 'inset 2px 2px 5px #d1d9e6, inset -2px -2px 5px #ffffff'
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}