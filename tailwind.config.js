/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{html,ts}",
      './node_modules/tailwindcss-primeui/**/*.{js,ts}'
    ],
    darkMode:'class',
    theme: {
      extend: {},
      colors: {
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        gray: {
          50: '',
          100: '#F9FAFB',
          200: '#F0F3F9',
          300: '#E9EFF6',
          400: '#D7DFE9',
          500: '#AFBACA',
          600: '#8897AE',
          700: '#5E718D',
          800: '#3D4A5C',
          900: '#1D222B',
        },
        warn: '#E5252A',
        secondary: '#ff00bf',
      }
    },
    plugins: [ require('tailwindcss-primeui') ],
  }
  
  