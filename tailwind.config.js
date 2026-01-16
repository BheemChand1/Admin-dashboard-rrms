/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#0f766e",
        secondary: "#14b8a6",
      },
    },
  },
  plugins: [],
};
