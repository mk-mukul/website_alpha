module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        mukul: {
          400: "#4C4C6D",
          100: "#E8F6EF",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
