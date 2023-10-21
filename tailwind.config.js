/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    // screens:{
    //   'xs' : {'max' : '639px'}
    // },
    extend: {
      fontFamily: {
        sans: ['Josefin Sans', 'sans-serif'],
        alata: ['Alata']
      },
    },
  },
  plugins: [],
}

