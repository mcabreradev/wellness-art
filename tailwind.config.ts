import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        domine: ['var(--font-domine)', ...defaultTheme.fontFamily.sans],
        poppins: ['var(--font-poppins)', ...defaultTheme.fontFamily.sans],
      },
      padding: {
        '5px': '5px',
      },
      colors: {
        transparent: 'transparent',
        white: '#fff',
        background: '##D9D9D9',
        gris: '#F4F4F4',
        black: '#292929',
        primary: '#4242E9',
        secondary: '#335460',
        yellow: '#E8BB2A',
        red: '#BC624E',
        beige: '#E9E5DA',
      },
      fontSize: {
        sm: '14px',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.875rem',
        '2xl': '2.25rem',
        '3xl': '3.375rem',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('flowbite/plugin')],
} satisfies Config;
