import process from 'node:process'
import console from 'node:console'
import brand from './brand'

if (process.env.TRACE_CONFIG) {
  console.log('Loading tailwind config: core/config/tailwind/colors.js');
}

/** @type {import('tailwindcss').Config} */
export default {
  presets: [
    brand,
  ],
  theme: {
    extend: {
      colors: {
        // Base Theme Colors
        background: {
          DEFAULT: 'var(--color-light-gray-100)', // Light background
          contrast: 'var(--color-dark-gray-300)', // Dark contrast for background
        },
        foreground: {
          DEFAULT: 'var(--color-dark-gray-300)', // Dark text
          contrast: 'var(--color-white)', // White contrast for foreground
        },

        // Primary (maps to loop)
        primary: {
          DEFAULT: 'var(--color-loop-500)',
          foreground: 'var(--color-loop-700)',
          contrast: 'var(--color-white)',
          50: 'var(--color-loop-50)',
          100: 'var(--color-loop-100)',
          200: 'var(--color-loop-200)',
          300: 'var(--color-loop-300)',
          400: 'var(--color-loop-400)',
          500: 'var(--color-loop-500)',
          600: 'var(--color-loop-600)',
          700: 'var(--color-loop-700)',
          800: 'var(--color-loop-800)',
          900: 'var(--color-loop-900)',
          950: 'var(--color-loop-950)',
        },

        // Secondary (maps to action)
        secondary: {
          DEFAULT: 'var(--color-action-500)',
          foreground: 'var(--color-action-700)',
          contrast: 'var(--color-white)',
          50: 'var(--color-action-50)',
          100: 'var(--color-action-100)',
          200: 'var(--color-action-200)',
          300: 'var(--color-action-300)',
          400: 'var(--color-action-400)',
          500: 'var(--color-action-500)',
          600: 'var(--color-action-600)',
          700: 'var(--color-action-700)',
          800: 'var(--color-action-800)',
          900: 'var(--color-action-900)',
          950: 'var(--color-action-950)',
        },

        // Accent (maps to emphasis)
        accent: {
          DEFAULT: 'var(--color-emphasis-500)',
          foreground: 'var(--color-emphasis-700)',
          contrast: 'var(--color-white)',
          50: 'var(--color-emphasis-50)',
          100: 'var(--color-emphasis-100)',
          200: 'var(--color-emphasis-200)',
          300: 'var(--color-emphasis-300)',
          400: 'var(--color-emphasis-400)',
          500: 'var(--color-emphasis-500)',
          600: 'var(--color-emphasis-600)',
          700: 'var(--color-emphasis-700)',
          800: 'var(--color-emphasis-800)',
          900: 'var(--color-emphasis-900)',
          950: 'var(--color-emphasis-950)',
        },

        // Success (maps to action)
        success: {
          DEFAULT: 'var(--color-action-500)',
          foreground: 'var(--color-action-700)',
          contrast: 'var(--color-white)',
          50: 'var(--color-action-50)',
          100: 'var(--color-action-100)',
          200: 'var(--color-action-200)',
          300: 'var(--color-action-300)',
          400: 'var(--color-action-400)',
          500: 'var(--color-action-500)',
          600: 'var(--color-action-600)',
          700: 'var(--color-action-700)',
          800: 'var(--color-action-800)',
          900: 'var(--color-action-900)',
          950: 'var(--color-action-950)',
        },

        // Warning (maps to alert)
        warning: {
          DEFAULT: 'var(--color-alert-500)',
          foreground: 'var(--color-alert-700)',
          contrast: 'var(--color-dark-gray-300)',
          50: 'var(--color-alert-50)',
          100: 'var(--color-alert-100)',
          200: 'var(--color-alert-200)',
          300: 'var(--color-alert-300)',
          400: 'var(--color-alert-400)',
          500: 'var(--color-alert-500)',
          600: 'var(--color-alert-600)',
          700: 'var(--color-alert-700)',
          800: 'var(--color-alert-800)',
          900: 'var(--color-alert-900)',
          950: 'var(--color-alert-950)',
        },

        // Destructive (maps directly to destructive)
        destructive: {
          DEFAULT: 'var(--color-destructive-500)',
          foreground: 'var(--color-destructive-700)',
          contrast: 'var(--color-dark-gray-300)',
          50: 'var(--color-destructive-50)',
          100: 'var(--color-destructive-100)',
          200: 'var(--color-destructive-200)',
          300: 'var(--color-destructive-300)',
          400: 'var(--color-destructive-400)',
          500: 'var(--color-destructive-500)',
          600: 'var(--color-destructive-600)',
          700: 'var(--color-destructive-700)',
          800: 'var(--color-destructive-800)',
          900: 'var(--color-destructive-900)',
          950: 'var(--color-destructive-950)',
        },

        // Muted (maps to grays)
        muted: {
          DEFAULT: 'var(--color-muted-500)',
          foreground: 'var(--color-muted-700)',
          contrast: 'var(--color-white)',
          50: 'var(--color-white)',
          100: 'var(--color-light-gray-100)',
          200: 'var(--color-light-gray-200)',
          300: 'var(--color-light-gray-300)',
          400: 'var(--color-medium-gray-100)',
          500: 'var(--color-medium-gray-200)',
          600: 'var(--color-medium-gray-300)',
          700: 'var(--color-dark-gray-100)',
          800: 'var(--color-dark-gray-200)',
          900: 'var(--color-dark-gray-300)',
          950: 'var(--color-black)',
        },

        // Input Colors - Form Element Backgrounds
        input: {
          DEFAULT: 'var(--color-light-gray-100)',
          foreground: 'var(--color-dark-gray-300)',
          contrast: 'var(--color-dark-gray-300)',
          placeholder: 'var(--color-medium-gray-200)',
        },

        // Dark Theme Colors - Night Mode Variants
        dark: {
          background: {
            DEFAULT: 'var(--color-dark-gray-300)',
            contrast: 'var(--color-white)',
          },
          foreground: {
            DEFAULT: 'var(--color-white)',
            contrast: 'var(--color-dark-gray-300)',
          },

          primary: {
            DEFAULT: 'var(--color-primary)',
            foreground: 'var(--color-primary-300)',
            contrast: 'var(--color-dark-gray-300)',
            50: 'var(--color-primary-950)',
            100: 'var(--color-primary-900)',
            200: 'var(--color-primary-800)',
            300: 'var(--color-primary-700)',
            400: 'var(--color-primary-600)',
            500: 'var(--color-primary-500)',
            600: 'var(--color-primary-400)',
            700: 'var(--color-primary-300)',
            800: 'var(--color-primary-200)',
            900: 'var(--color-primary-100)',
            950: 'var(--color-primary-50)',
          },

          secondary: {
            DEFAULT: 'var(--color-action-500)',
            foreground: 'var(--color-action-300)',
            contrast: 'var(--color-dark-gray-300)',
            50: 'var(--color-action-950)',
            100: 'var(--color-action-900)',
            200: 'var(--color-action-800)',
            300: 'var(--color-action-700)',
            400: 'var(--color-action-600)',
            500: 'var(--color-action-500)',
            600: 'var(--color-action-400)',
            700: 'var(--color-action-300)',
            800: 'var(--color-action-200)',
            900: 'var(--color-action-100)',
            950: 'var(--color-action-50)',
          },

          accent: {
            DEFAULT: 'var(--color-emphasis-500)',
            foreground: 'var(--color-emphasis-300)',
            contrast: 'var(--color-dark-gray-300)',
            50: 'var(--color-emphasis-950)',
            100: 'var(--color-emphasis-900)',
            200: 'var(--color-emphasis-800)',
            300: 'var(--color-emphasis-700)',
            400: 'var(--color-emphasis-600)',
            500: 'var(--color-emphasis-500)',
            600: 'var(--color-emphasis-400)',
            700: 'var(--color-emphasis-300)',
            800: 'var(--color-emphasis-200)',
            900: 'var(--color-emphasis-100)',
            950: 'var(--color-emphasis-50)',
          },

          success: {
            DEFAULT: 'var(--color-action-500)',
            foreground: 'var(--color-action-300)',
            contrast: 'var(--color-dark-gray-300)',
            50: 'var(--color-action-950)',
            100: 'var(--color-action-900)',
            200: 'var(--color-action-800)',
            300: 'var(--color-action-700)',
            400: 'var(--color-action-600)',
            500: 'var(--color-action-500)',
            600: 'var(--color-action-400)',
            700: 'var(--color-action-300)',
            800: 'var(--color-action-200)',
            900: 'var(--color-action-100)',
            950: 'var(--color-action-50)',
          },

          warning: {
            DEFAULT: 'var(--color-alert-500)',
            foreground: 'var(--color-alert-300)',
            contrast: 'var(--color-dark-gray-300)',
            50: 'var(--color-alert-950)',
            100: 'var(--color-alert-900)',
            200: 'var(--color-alert-800)',
            300: 'var(--color-alert-700)',
            400: 'var(--color-alert-600)',
            500: 'var(--color-alert-500)',
            600: 'var(--color-alert-400)',
            700: 'var(--color-alert-300)',
            800: 'var(--color-alert-200)',
            900: 'var(--color-alert-100)',
            950: 'var(--color-alert-50)',
          },

          destructive: {
            DEFAULT: 'var(--color-destructive-500)',
            foreground: 'var(--color-destructive-300)',
            contrast: 'var(--color-dark-gray-300)',
            50: 'var(--color-destructive-950)',
            100: 'var(--color-destructive-900)',
            200: 'var(--color-destructive-800)',
            300: 'var(--color-destructive-700)',
            400: 'var(--color-destructive-600)',
            500: 'var(--color-destructive-500)',
            600: 'var(--color-destructive-400)',
            700: 'var(--color-destructive-300)',
            800: 'var(--color-destructive-200)',
            900: 'var(--color-destructive-100)',
            950: 'var(--color-destructive-50)',
          },

          muted: {
            DEFAULT: 'var(--color-muted-500)',
            foreground: 'var(--color-muted-300)',
            contrast: 'var(--color-white)',
            50: 'var(--color-black)',
            100: 'var(--color-dark-gray-300)',
            200: 'var(--color-dark-gray-200)',
            300: 'var(--color-dark-gray-100)',
            400: 'var(--color-medium-gray-300)',
            500: 'var(--color-medium-gray-200)',
            600: 'var(--color-medium-gray-100)',
            700: 'var(--color-light-gray-300)',
            800: 'var(--color-light-gray-200)',
            900: 'var(--color-light-gray-100)',
            950: 'var(--color-white)',
          },

          input: {
            DEFAULT: 'var(--color-dark-gray-300)',
            foreground: 'var(--color-white)',
            contrast: 'var(--color-white)',
            placeholder: 'var(--color-medium-gray-200)',
          },
        },

        // Surface Colors - Component Background Variants
        surface: {
          DEFAULT: 'var(--color-white)', // Elevated surface background
          foreground: 'var(--color-dark-gray-300)', // Default surface text
          contrast: 'var(--color-dark-gray-300)', // Ensures readability on surface
          ring: 'var(--color-dark-gray-300)', // Default ring color

          // Surface variants for different contexts
          primary: 'var(--color-loop-50)',    // Very Light Loop Purple - Primary surface
          secondary: 'var(--color-action-50)',   // Very Light Action Teal - Secondary surface
          accent: 'var(--color-emphasis-50)',     // Very Light Emphasis Blue - Accent surface
          muted: 'var(--color-light-gray-100)',          // Very Light Gray - Muted surface
          success: 'var(--color-action-50)',     // Very Light Success Teal - Success surface
          warning: 'var(--color-alert-50)',     // Very Light Warning Gold - Warning surface
          destructive: 'var(--color-destructive-50)',  // Very Light Destructive Red - Destructive surface
        },
        ring: {
          DEFAULT: 'var(--color-dark-gray-300)', // Default ring color
        },
      },
      ringColor: {
        ring: 'var(--color-dark-gray-300)', // Default ring color
      },
    },
  },
  variants: {
    extend: {
      ringColor: ['focus-visible'],
    },
  },
}
