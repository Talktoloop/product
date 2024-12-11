import process from 'node:process'
import console from 'node:console'

if (process.env.TRACE_CONFIG) {
  console.log('Loading tailwind config: core/config/tailwind/spacing.js');
}
/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      spacing: {
        // Design system spacing scale
        'xxs': '0.25rem',  // 4px
        'xs': '0.5rem',    // 8px
        's': '1rem',       // 16px
        'm': '1.5rem',     // 24px
        'mm': '2rem',      // 32px
        'l': '3rem',       // 48px
        'xl': '4rem',      // 64px
        'xxl': '5rem',     // 80px
      },
    },
  },
}
