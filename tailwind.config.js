/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 10s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
    fontFamily:{
      'main':["Frank Ruhl Libre", 'serif'],
      'secondary': ["Open Sans", 'serif'],
      'cursive':["Italianno", 'serif'],
    }
  },
  plugins: [],
}