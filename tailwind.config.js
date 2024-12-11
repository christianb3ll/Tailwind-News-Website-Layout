/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    colors: {
      'soft-orange': '#e9ab53',
      'soft-red': '#f15e50',
      'off-white': '#fffdfa',
      'grayish-blue': '#c5c6ce',
      'dark-grayish-blue': '#5d5f79',
      'very-dark-blue': '#00001a'
    },
    fontFamily: {
      'sans': ["'Inter'", 'sans-serif']
    },
    fontSize: {
      'sm': '15px',
      'md': '20px',
      'lg': '36px',
      'xl': ['48px', '50px']
    },
    extend: {},
  },
  plugins: [],
}

