/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      pixel: {
        oneEight: "18px",
        sevenOne: "71px",
      },
      color: {
        headerSidebar: "#171717",
      },
      size: {
        width: "",
        height: "",
      },
    },
  },
  variants: {},
  plugins: [],
};
