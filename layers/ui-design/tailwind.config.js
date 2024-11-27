const { join } = require("path")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, "./components/**/*.{js,ts,jsx,tsx,vue}"),
  ],
}
