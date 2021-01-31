module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ["./src/*.js", "./src/**/*.js", "./src/**/*.jsx"],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif']
    },
    extend: {
      fontSize: {
        'xxs': '.5rem'
      },
      colors: {
        'primary': "#000",
      }
    },
  },
  options: {
    whitelist: []
  },
  variants: {},
  plugins: [],
};
