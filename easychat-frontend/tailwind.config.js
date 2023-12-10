/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
    colors: {
      'primary': '#00802f',
      'hsg': {
        300: '#ADE0BA',
        500: '#00A133',
        700: '#00802f',
        800: '#025923',
        DEFAULT: '#00802f'
      }
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

