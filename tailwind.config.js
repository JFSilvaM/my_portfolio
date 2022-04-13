const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "white-bg": "#F5F5F5",
        "black-text": "#242429",
        "green-sections": "#00C897",
        "blue-text": "#150080",
      },
    },
    fontFamily: { sans: ["Roboto", ...defaultTheme.fontFamily.sans] },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".tf-scale-0": {
          transform: "scale(0)",
        },
        ".tf-scale-1": {
          transform: "scale(1)",
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};
