const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
      },
      spacing: {
        4.5: "4.5rem",
      },
    },
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
