const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{ts,tsx,mdx}'],
  darkMode: 'media',
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        jct: {
          100: '#f0fcfb',
          200: '#cef2ee',
          300: '#aff0e8',
          400: '#8cfff1',
          500: '#47e6d2',
          600: '#1cc7b2',
          700: '#13786b',
          800: '#0b2e29',
          900: '#071210',
        },
        'cool-gray': colors.coolGray,
        'warm-gray': colors.warmGray,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
}
