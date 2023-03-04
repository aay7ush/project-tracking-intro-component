/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Barlow", "sans-serif"],
        headings: ["Barlow Condensed", "sans-serif"],
      },
      colors: {
        red: "hsl(0, 100%, 68%)",
        "grayish-blue-600": "hsl(230, 11%, 40%)",
        "grayish-blue-400": "hsl(231, 7%, 65%)",
        "grayish-blue-200": "hsl(207, 33%, 95%)",
        "dark-blue": "hsl(230, 29%, 20%)",
      },
    },
  },
  plugins: [],
}
