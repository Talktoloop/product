/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  presets: [
    require("@ourloop/product-core-config/tailwind/core"),
    require("@ourloop/product-core-config/tailwind/typography"),
    require("@ourloop/product-core-config/tailwind/spacing"),
    require("@ourloop/product-core-config/tailwind/colors")
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
