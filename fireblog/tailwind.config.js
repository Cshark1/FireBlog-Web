/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'facebook': '#1877F2',
      },
      fontFamily:{
        'roboto': ['roboto', 'open-sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

