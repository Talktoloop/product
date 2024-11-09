const { default: core } = require("@ourloop/product-core-config/tailwind/core")
const { default: typography } = require("@ourloop/product-core-config/tailwind/typography")
const { default: spacing } = require("@ourloop/product-core-config/tailwind/spacing")
const { default: colors } = require("@ourloop/product-core-config/tailwind/colors")

if (process.env.TRACE_CONFIG) {
  console.log('Loading tailwind config: layers/core/tailwind.config.js')
}
/** @type {import('tailwindcss').Config} */
export default {
  presets: [
    core,
    typography,
    spacing,
    colors,
  ],
}
