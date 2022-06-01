module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'cyan': {
        500: '#5ce1e6',
      },
      'black': '#090C02',
      'white': '#FBF9FF',
      'neutral': {
        200: '#C4C4C4',
      },
      'red': {
        500: '#CC1100',
      }
    },
    extend: {},
  },
  darkMode: 'class',
  plugins: [],
}