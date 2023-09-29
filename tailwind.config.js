/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'PT Sans Caption': 'sans-serif',
      },
      colors: {
        'green': '#0f8542',
        'gray': '#f2f2f2',
        'dark': '#290000',
      }
    },
  },
  plugins: [],
}