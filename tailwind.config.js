/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        peach: {
          50: '#fff5f0',
          100: '#ffe8dc',
          200: '#ffd4c1',
          300: '#ffbfa6',
          400: '#ffaa8b',
          500: '#ff9570',
          600: '#ff8055',
          700: '#ff6b3a',
        },
        gold: {
          DEFAULT: '#D4AF37',
          light: '#F4E5C3',
          dark: '#B8941F',
        },
        deepRed: {
          DEFAULT: '#8B1538',
          light: '#A91D42',
          dark: '#6B0F2A',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
