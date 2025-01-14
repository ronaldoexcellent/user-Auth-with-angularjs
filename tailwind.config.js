module.exports = {
  purge: ['./src/**/*.{html,js}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'chess-black': '#000',
        'chess-white': '#fff',
      },
      spacing: {
        'chess-square': '100px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};