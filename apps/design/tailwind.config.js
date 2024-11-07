if (process.env.TRACE_CONFIG) {
  console.log('Loading tailwind config: apps/design/tailwind.config.js');
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './stories/**/*.{vue,js,ts,jsx,tsx}',
    './.storybook/**/*.{vue,js,ts,jsx,tsx}',
  ],
}
