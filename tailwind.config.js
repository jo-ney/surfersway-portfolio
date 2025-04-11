/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderColor: {
        "primary": "#ececec",
        "secondary": "#9fd3c7",
        "tertiary": "#385170",
        "quaternary": "#142d4c"
      },
      textColor: {
        "primary": "#ececec",
        "secondary": "#9fd3c7",
        "tertiary": "#385170",
        "quaternary": "#142d4c"
      },
      fontFamily: {
        "portfolio-font" : "Lobster",
        "textfont": "Roboto"
      }
    },
  },
  plugins: [],
}

