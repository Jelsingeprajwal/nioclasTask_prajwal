/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        loulou: "#490B3D",
        maroon: "#bd1e51",
        azalea: "#f9d1d7",
      },
      fontFamily: {
        fontRoboto: ["Roboto", "sans-serif"],
        workSans: ["Work Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
