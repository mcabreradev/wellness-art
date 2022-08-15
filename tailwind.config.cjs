/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./index.html",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        domine: ['Domine'],
        poppins: ['Poppins'],
      },
      padding: {
        '5px': '5px',
      }
    },
    colors: {
      transparent: 'transparent',
      white: '#fff',
      background: '##D9D9D9',
      gray: '#F4F4F4',
      black: '#292929',
      primary: '#4242E9',
      secondary: '#335460',
      yellow: '#E8BB2A',
      red: '#BC624E',
      beige: '#E9E5DA'
    },
    fontSize: {
      "base": "1rem",
      "lg": "1.125rem",
      "xl": "1.875rem",
      "2xl": "2.25rem",
      "3xl": "3.375rem"
    }
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
