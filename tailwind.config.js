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
      fontSize: {
        'xsm': '10px'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};


// fontSize: {
//   'xs': '.75rem',
//   'sm': '.875rem',
//   'tiny': '.875rem',
//    'base': '1rem',
//    'lg': '1.125rem',
//    'xl': '1.25rem',
//    '2xl': '1.5rem',
//   '3xl': '1.875rem',
//   '4xl': '2.25rem',
//    '5xl': '3rem',
//    '6xl': '4rem',
//   '7xl': '5rem',
//  }