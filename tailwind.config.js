/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        jk: {
          green: "#4e834c",
          pink: "#db9fc8",
          offwhite: "#fbf5e2",
          gold: "#b59635",
          black: "#000000",
        },
      },
      fontFamily: {
        playfair: "Playfair Display, serif",
        uchen: "Uchen, serif",
        inktrap: ["var(--font-inktrap)", ...fontFamily.sans],
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "spin-slower": "spin 8s linear infinite",
      },
    },
  },
  plugins: [],
};
