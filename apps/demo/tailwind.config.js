const { join } = require('path')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [join(__dirname, './**/*.{js,ts,jsx,tsx,vue}')],
}
