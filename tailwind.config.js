/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        nav: "#525252",
        primary: "#87ceeb",
        secondary: "#FFDBBB",
        tertiary: "#313968",
        "black-100": "#525252",
        "black-200": "#090325",
        "white-100": "#363434",
        "electric-purple": "#807070",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
