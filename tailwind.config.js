/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './views/**/*.ejs',
    './public/**/*.{js,css}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4169E1', // Parliament Blue
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
    },
  },
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
} 