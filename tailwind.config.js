const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        spaceDark: "#0B0D17",
        spaceLight: "#D0D6F9",
        spaceWhite: "#FFFFFF",
        spaceMenu: "rgba(255, 255, 255, 0.04)",
      },
      fontFamily: {
        belle: ["var(--font-bellefair)"],
        barlow: ["var(--font-barlow)"],
        barlowCondensed: ["var(--font-barlowCondensed)"],
      },
      backgroundImage: {
        "mobile-background": "url(/assets/home/background-home-mobile.jpg)",
        "tablet-background": "url(/assets/home/background-home-tablet.jpg)",
        "desktop-background": "url(/assets/home/background-home-desktop.jpg)",
      },
      boxShadow: {
        buttonShadow: "0px 0px 0px 40px rgba(255,255,255, 0.1)",
      },
    },
  },
  plugins: [],
};