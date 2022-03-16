module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        background: {
          101: "#807790",
          201: "#6b607e",
          301: "#56496b",
          401: "#413359",
          501: "#2C1C46",
          601: "#28193f",
          701: "#231638",
          801: "#1f1431",
          901: "#1a112a",
        },
        primary: {
          101: "#F3FAFA",
        },
        secondary: {
          101: "#2C1C46",
        },
        dark: {
          101: "#9b9999",
          201: "#8b8888",
          301: "#7a7777",
          401: "#6a6666",
          501: "#595555",
          601: "#504d4d",
          701: "#474444",
          801: "#3e3b3b",
          901: "#353333",
        },
        light: {
          101: "#FFFFFF",
          201: "#e6e6e6",
          301: "#cccccc",
          401: "#b3b3b3",
          501: "#999999",
          601: "#808080",
          701: "#666666",
          801: "#4c4c4c",
          901: "#333333",
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