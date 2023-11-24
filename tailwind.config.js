/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      pixels: {
        oneEight: "18px",
        sevenOne: "71px",
      },
      colors: {
        headerSidebar: "#171717",
      },
      height: {
        width: "",
        height: "",
      },
    },
  },
  variants: {},
  plugins: [],
};
