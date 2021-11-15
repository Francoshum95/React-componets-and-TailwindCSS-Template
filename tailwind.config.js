module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'visibility': 'transition visibility 0.3s linear,opacity 0.3s linear',
       }
    },
    fontFamily: {
      body:["Roboto", "Condensed"]
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
