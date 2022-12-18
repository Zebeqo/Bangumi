/* eslint-disable */
const { toRadixVars } = require("windy-radix-palette/vars");
const radixColors = require("@radix-ui/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./ui/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bangumi: "#f09199",
        primary: toRadixVars("red"),
        accent: toRadixVars("cyan"),
        neutral: toRadixVars("mauve"),
      },
    },
  },
  plugins: [
    require("tailwindcss-question-mark"),
    require("prettier-plugin-tailwindcss"),
    require("windy-radix-palette")({
      colors: {
        red: radixColors.red,
        redDark: radixColors.redDark,
        cyan: radixColors.cyan,
        cyanDark: radixColors.cyanDark,
        mauve: radixColors.mauve,
        mauveDark: radixColors.mauveDark,
      },
    }),
  ],
};
