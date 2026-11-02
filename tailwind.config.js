/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./layout/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#090074",
        quinary: "#92094C",
      },
      fontFamily: {
        mono: ["var(--font-geist-mono)", ...defaultTheme.fontFamily.mono],
        pixel: ["var(--font-geist-pixel)", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
};
