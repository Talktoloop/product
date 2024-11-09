if (process.env.TRACE_CONFIG) {
  console.log('Loading tailwind config: core/config/tailwind/spacing.js');
}
/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
      },
    },
  },
}
