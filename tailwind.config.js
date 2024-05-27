/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        blue: "#0038ef",
        red: "#800028",
        maroon: "#800028",
        purple: "#400015",
        grey: "#3f3f3f",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
