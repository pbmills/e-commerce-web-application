import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      fontFamily: {
        heading: ["Adamina", ...defaultTheme.fontFamily.serif],
        poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "warm-gray": "#e9e7e4",
      },
    },
  },
  plugins: [],
} satisfies Config;
