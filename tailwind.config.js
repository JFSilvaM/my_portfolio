const defaultTheme = require("tailwindcss/defaultTheme");

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
      },
    },
    fontFamily: { sans: ["Roboto", ...defaultTheme.fontFamily.sans] },
  },
  plugins: [],
};
