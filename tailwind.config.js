module.exports = {
  purge: ['./src/**/*.{ts,tsx,mdx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
