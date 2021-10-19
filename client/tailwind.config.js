module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#F29B38'
      }
    },
    container: {
      center: true,
    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
