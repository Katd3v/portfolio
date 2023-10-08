/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#f8f5f4",
      secondary: "#301004",
      bgBrown: "#562716",
      white: "#fff",
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
