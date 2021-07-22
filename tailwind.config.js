const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter var"', ...defaultTheme.fontFamily.sans]
      },
      spacing: {
        19: '4.75rem',
        25: '6.25rem'
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',

        black: colors.black,
        white: colors.white,
        gray: colors.coolGray,
        // red: colors.red,
        // yellow: colors.amber,
        // green: colors.emerald,
        // blue: colors.blue,
        // indigo: colors.indigo,
        // purple: colors.violet,
        orange: colors.orange
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
