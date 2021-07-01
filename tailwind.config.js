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
          50: '#edffff',
          100: '#daf7f5',
          200: '#beede8',
          300: '#94f2e7',
          400: '#6be3d4',
          500: '#30c9b6',
          600: '#119c8b',
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
