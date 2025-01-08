/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        maxWidth: {
            'screen-2xl': '1920px', // Customize the 2xl screen width to 1920px
          },
        keyframes: {
          'slide-right': {
            '0%': { transform: 'translateX(0)' },
            '100%': { transform: 'translateX(100%)' },
          },
        },
        animation: {
          'slide-right': 'slide-right 1s ease-in-out',
        },

      },
    },
    plugins: [],
  }
  module.exports = {
    theme: {
      extend: {
        zIndex: {
          '100': '100',
        }
      }
    }
  }