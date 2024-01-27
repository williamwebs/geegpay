/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        globalFont: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        primary: "#bb372f",
        secondary: "#3a3f51",
        success: "#00ac56",
        error: "#ff1f7d",
        warning: "#f5bf3d",
        white: "#ffffff",
        bg: "#fdfdfd",
        gray50: "#fafafa",
        gray100: "#f5f5f5",
        gray200: "#e5e5e5",
        gray300: "#b2abab",
        gray400: "#a3a3a3",
        gray500: "#737373",
        gray600: "#525252",
        gray700: "#404040",
        gray800: "#262626",
        gray900: "#171717",
      },
    },
  },
  plugins: [],
};
