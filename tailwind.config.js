/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./Hooks/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#013f71",
        secondary: "#0b7a3f",
        tertiary: "#8A2BE2",
        off_white: "#F9F9F9",
        border_color: "#e5e7eb",
        soft_black: "#1A1A1A",

        ink: "#0a2730",
        canopy: "#0f4c3f",
        leaf: "#2f7d5c",
        lagoon: "#5bb4bd",
        ember: "#c8893c",
        clay: "#9f6947",
        mist: "#f4f6ef",
      },
      boxShadow: {
        soft: "0 18px 45px rgba(10, 39, 48, 0.10)",
        lift: "0 24px 70px rgba(10, 39, 48, 0.25)",
      },
      fontFamily: {
        serif: ["Georgia", "serif"],
      },
      keyframes: {
        ripple: {
          "0%": { boxShadow: "0 0 0 0 rgba(34, 197, 94, 0.6)" },
          "70%": { boxShadow: "0 0 0 30px rgba(34, 197, 94, 0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(34, 197, 94, 0)" },
        },
      },
      animation: {
        ripple: "ripple 2s infinite",
      },
    },
  },
  plugins: [],
};
