const { join } = require("path")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, "./*.vue"),
    join(__dirname, "./components/**/*.{js,ts,jsx,tsx,vue}"),
    join(__dirname, "./layouts/**/*.{js,ts,jsx,tsx,vue}"),
    join(__dirname, "./pages/**/*.{js,ts,jsx,tsx,vue}"),
  ],
}
