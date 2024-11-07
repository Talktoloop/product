if (process.env.TRACE_CONFIG) {
  console.log('Loading tailwind config: layers/core/tailwind.config.js');
}
/** @type {import('tailwindcss').Config} */
export default {
  presets: [
    require("@ourloop/product-core-config/tailwind/core"),
    require("@ourloop/product-core-config/tailwind/typography"),
    require("@ourloop/product-core-config/tailwind/spacing"),
    require("@ourloop/product-core-config/tailwind/colors")
  ],
}
