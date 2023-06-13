/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'font-rob' : "'Roboto Mono', monospace",
      },
      colors:{
        'violet-cl' : '#555A88',
        'red-primary' : '#D85D5D',
        'red-hover' : '#D93F3F',
      }
      
    },
  },
  plugins: [],
}

