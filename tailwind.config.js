/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html',
    './src/**/*.{html,js}',],
  theme: {
    extend: {
      colors: {
        primary: "#fff"

      },
      fontFamily: {
        body: ["Oxygen"]
      }
    }
  },
  plugins: [],
}
