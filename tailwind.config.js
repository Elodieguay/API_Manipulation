/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        cabin: ['Cabin', 'sans-serif'],
        handlee: ['Handlee', 'cursive'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

