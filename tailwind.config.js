/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html',
    './src/**/*.{html,js}',],
  theme: {
    extend: {
      colors: {
        primary: "#EF4444"

      },
      fontFamily: {
        body: ["Oxygen"]
      }
    }
  },
  plugins: [],
}
