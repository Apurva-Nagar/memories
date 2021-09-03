module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      lg: "0px 0px 15px -3px rgba(0, 0, 0, 0.1)",
      "2xl": "0px 0px 50px -12px rgba(0, 0, 0, 0.25)",
      none: "none",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
