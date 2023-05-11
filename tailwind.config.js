/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        'dark-coreco':'rgb(61, 179, 217)',
        'light-coreco':'rgb(96, 202, 210)'
      }
    },
  },
  plugins: [],
}

