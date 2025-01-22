import process from 'node:process'
import console from 'node:console'

if (process.env.TRACE_CONFIG) {
  console.log('Loading tailwind config: core/config/tailwind/brand.js');
}

/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        // Brand Colors with Extended Shades
        // Core shades (100-800) from design system
        // Extended shades (50, 900, 950) for additional flexibility

        // Primary brand color
        // UI usage: Selected and Active states, tags, informational alerts
        'loop': {
          50: 'hsl(264 26.9% 97.3%)',  // Extended light
          100: 'hsl(264 26.9% 94.3%)',
          200: 'hsl(264 26.9% 87.3%)',
          300: 'hsl(264 26.9% 80.3%)',
          400: 'hsl(264 26.9% 70.3%)',
          500: 'hsl(264 26.9% 45.3%)',
          600: 'hsl(264 26.9% 35.3%)',
          700: 'hsl(264 26.9% 25.3%)',
          800: 'hsl(264 26.9% 15.3%)',
          900: 'hsl(264 26.9% 10.3%)',  // Extended dark
          950: 'hsl(264 26.9% 5.3%)',   // Extended darker
        },

        // Secondary brand color
        // UI usage: Links, Primary CTAs
        'action': {
          50: 'hsl(173 100% 97.2%)',    // Extended light
          100: 'hsl(173 100% 91.2%)',
          200: 'hsl(173 100% 84.2%)',
          300: 'hsl(173 100% 74.2%)',
          400: 'hsl(173 100% 48.2%)',
          500: 'hsl(173 100% 38.2%)',
          600: 'hsl(173 100% 28.2%)',
          700: 'hsl(173 100% 18.2%)',
          800: 'hsl(173 100% 8.2%)',
          900: 'hsl(173 100% 5.2%)',    // Extended dark
          950: 'hsl(173 100% 3.2%)',    // Extended darker
        },

        // Accent color
        // UI usage: In small doses, to emphasize elements on screen (e.g. tag fills/input halos)
        'emphasis': {
          50: 'hsl(217 100% 97%)',      // Extended light
          100: 'hsl(217 100% 91%)',
          200: 'hsl(217 100% 84%)',
          300: 'hsl(217 100% 74%)',
          400: 'hsl(217 100% 60%)',
          500: 'hsl(217 100% 50%)',
          600: 'hsl(217 100% 40%)',
          700: 'hsl(217 100% 30%)',
          800: 'hsl(217 100% 20%)',
          900: 'hsl(217 100% 15%)',     // Extended dark
          950: 'hsl(217 100% 10%)',     // Extended darker
        },

        // Warning color
        // UI usage: Alert feedback
        'alert': {
          50: 'hsl(45 100% 97%)',       // Extended light
          100: 'hsl(45 100% 91%)',
          200: 'hsl(45 100% 84%)',
          300: 'hsl(45 100% 74%)',
          400: 'hsl(45 100% 60%)',
          500: 'hsl(45 100% 50%)',
          600: 'hsl(45 100% 40%)',
          700: 'hsl(45 100% 30%)',
          800: 'hsl(45 100% 20%)',
          900: 'hsl(45 100% 15%)',      // Extended dark
          950: 'hsl(45 100% 10%)',      // Extended darker
        },

        // Error color
        // UI usage: Error feedback, destructive actions, decorating UI components
        'destructive': {
          50: 'hsl(0 100% 97%)',        // Extended light
          100: 'hsl(0 100% 91%)',
          200: 'hsl(0 100% 84%)',
          300: 'hsl(0 100% 74%)',
          400: 'hsl(0 100% 60%)',
          500: 'hsl(0 100% 50%)',
          600: 'hsl(0 100% 40%)',
          700: 'hsl(0 100% 30%)',
          800: 'hsl(0 100% 20%)',
          900: 'hsl(0 100% 15%)',       // Extended dark
          950: 'hsl(0 100% 10%)',       // Extended darker
        },

        // Neutral colors divided into three ranges
        // Light grays - UI usage: Page and container backgrounds, hover states
        'light-gray': {
          100: 'hsl(0 0% 98%)',
          200: 'hsl(0 0% 96%)',
          300: 'hsl(0 0% 94%)',
        },
        // Medium grays - UI usage: Disabled states, lower hierarchy text
        'medium-gray': {
          100: 'hsl(0 0% 90%)',
          200: 'hsl(0 0% 85%)',
          300: 'hsl(0 0% 80%)',
        },
        // Dark grays - UI usage: Body copy, labels
        'dark-gray': {
          100: 'hsl(0 0% 30%)',
          200: 'hsl(0 0% 20%)',
          300: 'hsl(0 0% 10%)',
        },
      }
    }
  }
}
