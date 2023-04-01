/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {

      },
      fontFamily:{
        'roboto': ['roboto', 'open-sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}

