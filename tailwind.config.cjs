/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      boxShadow : {
        "6xl" : "box-shadow: 0px 10px 25px 3px rgba(152,152,152,0.77)"
      }
    },
  },
  plugins: [],
}