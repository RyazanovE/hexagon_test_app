/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    colors: {
      "red": '#E12D07',
      "violet": "#3e4684",
      "login-text": "#4d4d4d",
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
    },
    extend: {
      colors: {
        "login-text": "#4d4d4d"
      },
      backgroundColor: {
        "form": "#f1f7fe",
        "main": "#dde5f4",
      },
      boxShadow: {
        'loginInput': '0 0 2em #e6e9f9',
      }
    },
  },
  plugins: [
    function ({
      addVariant
    }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    }
  ],
}