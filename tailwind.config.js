const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderRadius: {
        myxl: "2.5rem",
        ...defaultTheme.borderRadius,
      },
      screens: {
        xs: "475px",
        ...defaultTheme.screens,
      },
      width: {
        fill: "-webkit-fill-available",
        ...defaultTheme.width,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
