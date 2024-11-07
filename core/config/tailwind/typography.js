if (process.env.TRACE_CONFIG) {
  console.log('Loading tailwind config: core/config/tailwind/typography.js');
}
/** @type {import('tailwindcss').Config} */

export default {
  plugins: [require("@tailwindcss/typography")],
};
