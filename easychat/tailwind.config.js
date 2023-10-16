/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
    colors: {
      'primary': '#00802f'
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

