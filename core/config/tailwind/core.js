if (process.env.TRACE_CONFIG) {
  console.log('Loading tailwind config: core/config/tailwind/core.js');
}
/** @type {import('tailwindcss').Config} */

export default {
  darkMode: ['class'],
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
  ],
};
