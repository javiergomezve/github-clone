module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      typography: (theme) => ({
        default: {
          css: {
            a: {
              color: theme('colors.blue.600')
            },
            img: {
              display: 'iniline-block'
            },
            hr: {
              borderColor: theme('colors.gray.400'),
              marginTop: '2em',
              marginBottom: '2em',
            }
          }
        }
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
      require('@tailwindcss/typography')
  ],
}
