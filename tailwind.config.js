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
        primary: "#3e0607",
        secondary: "#4a0a0a",
        tertiary: "#5a0c0c",
        rose_dark: "#670f0e",
        rose_deep: "#721213",

        off_white: "#f8f3ec",
        cream: "#f8f3ec",
        border_color: "#e5e7eb",
        soft_black: "#241818",
      },

      boxShadow: {
        soft: "0 18px 45px rgba(74, 10, 10, 0.12)",
        lift: "0 24px 70px rgba(74, 10, 10, 0.28)",
        rosemont: "0 28px 80px rgba(62, 6, 7, 0.35)",
      },

      fontFamily: {
        serif: ["Georgia", "serif"],
      },

      keyframes: {
        ripple: {
          "0%": {
            boxShadow: "0 0 0 0 rgba(248, 243, 236, 0.45)",
          },
          "70%": {
            boxShadow: "0 0 0 30px rgba(248, 243, 236, 0)",
          },
          "100%": {
            boxShadow: "0 0 0 0 rgba(248, 243, 236, 0)",
          },
        },
      },

      animation: {
        ripple: "ripple 2s infinite",
      },
    },
  },

  plugins: [],
};
