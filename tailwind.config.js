/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./ui/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwindcss-question-mark"),
    require("prettier-plugin-tailwindcss"),
  ],
};
