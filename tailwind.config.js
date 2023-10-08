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
    extend: {
      backgroundImage: {
        pattern: "url('img/bg_pattern.webp')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
