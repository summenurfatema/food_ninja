/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html',
    './src/**/*.{html,js}',],
  theme: {
    extend: {
      colors: {
        primary: "#EF4444"

      },
      fontFamily: {
        body: ["Nunito"]
      }
    }
  },
  plugins: [],
}
