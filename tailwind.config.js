/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: { 
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    colours: {
      brightRed: colors.red-600,
      brightRedLight: colors.red-500,
      brightRedSupLight: colors.red-400,
      darkBlue: colors.blue-800,
      darkGrayishBlue: colors.sky-900,
      veryDarkBlue: colors.slate-900,
      veryPaleRed: colors.rose-500,
      veryLightGray: colors.slate-400,
    },
    extend: {
    },
  },
  plugins: [],
}
