import process from 'node:process'
import console from 'node:console'

if (process.env.TRACE_CONFIG) {
  console.log('Loading tailwind config: core/config/tailwind/colors.js');
}

/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        // Light Theme Colors (Default)
        background: 'hsl(0 0% 100%)', // White background color
        foreground: 'hsl(222 47% 11%)', // Dark foreground color

        // Primary Brand Color - Loop Purple (#6B4DE6)
        primary: {
          DEFAULT: 'hsl(255 75% 60%)',  // Main primary color
          foreground: 'hsl(0 0% 100%)', // White foreground for primary color
          50: 'hsl(255 85% 98%)',   // Lightest variant of primary color
          100: 'hsl(255 85% 94%)',
          200: 'hsl(255 80% 87%)',
          300: 'hsl(255 75% 80%)',
          400: 'hsl(255 75% 70%)',
          500: 'hsl(255 75% 60%)',  // Default primary color
          600: 'hsl(255 65% 55%)',
          700: 'hsl(255 60% 53%)',
          800: 'hsl(255 55% 52%)',
          900: 'hsl(255 50% 51%)',  // Darkest variant of primary color
          950: 'hsl(255 45% 40%)',
        },

        // Secondary Brand Color - Action Teal (#05C3B6)
        secondary: {
          DEFAULT: 'hsl(176 95% 32%)',  // Main secondary color
          foreground: 'hsl(0 0% 100%)', // White foreground for secondary color
          50: 'hsl(176 57% 93%)',   // Lightest variant of secondary color
          100: 'hsl(176 60% 90%)',
          200: 'hsl(176 65% 80%)',
          300: 'hsl(176 70% 70%)',
          400: 'hsl(176 85% 50%)',
          500: 'hsl(176 95% 39%)',  // Default secondary color
          600: 'hsl(176 95% 36%)',
          700: 'hsl(176 96% 34%)',
          800: 'hsl(176 96% 33%)',  // Darkest variant of secondary color
          900: 'hsl(176 95% 30%)',
          950: 'hsl(176 95% 25%)',
        },

        // Emphasis Blue (#0066FF)
        accent: {
          DEFAULT: 'hsl(217 100% 45%)',  // Main emphasis color
          foreground: 'hsl(0 0% 100%)',  // White foreground for emphasis color
          50: 'hsl(217 100% 95%)',   // Lightest variant of emphasis color
          100: 'hsl(217 100% 90%)',
          200: 'hsl(217 100% 80%)',
          300: 'hsl(217 100% 70%)',
          400: 'hsl(217 100% 60%)',
          500: 'hsl(217 100% 50%)',  // Default emphasis color
          600: 'hsl(217 100% 45%)',
          700: 'hsl(217 100% 42%)',
          800: 'hsl(217 100% 41%)',
          900: 'hsl(217 100% 40%)',  // Darkest variant of emphasis color
          950: 'hsl(217 100% 35%)',
        },

        // Success Teal (same as action-teal) (#05C3B6)
        success: {
          DEFAULT: 'hsl(176 95% 32%)',  // Main success color
          foreground: 'hsl(0 0% 100%)', // White foreground for success color
          50: 'hsl(176 57% 93%)',   // Lightest variant of success color
          100: 'hsl(176 60% 90%)',
          200: 'hsl(176 65% 80%)',
          300: 'hsl(176 70% 70%)',
          400: 'hsl(176 85% 50%)',
          500: 'hsl(176 95% 39%)',  // Default success color
          600: 'hsl(176 95% 36%)',
          700: 'hsl(176 96% 34%)',
          800: 'hsl(176 96% 33%)',  // Darkest variant of success color
          900: 'hsl(176 95% 30%)',
          950: 'hsl(176 95% 25%)',
        },

        // Warning Gold (#FFB800)
        warning: {
          DEFAULT: 'hsl(44 100% 50%)',  // Main warning color
          foreground: 'hsl(222 47% 11%)',  // Dark text for better contrast
          50: 'hsl(44 100% 95%)',   // Lightest variant of warning color
          100: 'hsl(44 100% 90%)',
          200: 'hsl(44 100% 80%)',
          300: 'hsl(44 100% 70%)',
          400: 'hsl(44 100% 60%)',
          500: 'hsl(44 100% 50%)',  // Default warning color
          600: 'hsl(44 100% 45%)',
          700: 'hsl(44 100% 42%)',
          800: 'hsl(44 100% 41%)',
          900: 'hsl(44 100% 40%)',  // Darkest variant of warning color
          950: 'hsl(44 100% 35%)',
        },

        // Destructive Red (#FF3B3B)
        destructive: {
          DEFAULT: 'hsl(0 100% 45%)',  // Main destructive color
          foreground: 'hsl(0 0% 100%)', // White foreground for destructive color
          50: 'hsl(0 100% 95%)',   // Lightest variant of destructive color
          100: 'hsl(0 100% 90%)',
          200: 'hsl(0 100% 85%)',
          300: 'hsl(0 100% 75%)',
          400: 'hsl(0 100% 68%)',
          500: 'hsl(0 100% 61%)',  // Default destructive color
          600: 'hsl(0 100% 55%)',
          700: 'hsl(0 100% 52%)',
          800: 'hsl(0 100% 50%)',
          900: 'hsl(0 100% 49%)',  // Darkest variant of destructive color
          950: 'hsl(0 100% 45%)',
        },

        // Neutral Colors
        muted: {
          DEFAULT: 'hsl(0 0% 95%)',
          foreground: 'hsl(0 0% 10%)',
          50: 'hsl(0 0% 98%)',    // Lightest neutral color
          100: 'hsl(0 0% 97%)',   // #F7F7F7
          200: 'hsl(0 0% 92%)',   // #EBEBEB
          300: 'hsl(0 0% 76%)',   // #C2C2C2
          400: 'hsl(0 0% 64%)',   // #A3A3A3
          500: 'hsl(0 0% 45%)',   // #737373
          600: 'hsl(0 0% 25%)',   // #404040
          700: 'hsl(0 0% 20%)',
          800: 'hsl(0 0% 15%)',
          900: 'hsl(0 0% 10%)',
          950: 'hsl(0 0% 5%)',    // Darkest neutral color
        },

        // Dark Theme Colors
        dark: {
          background: 'hsl(222 47% 11%)', // Dark background color
          foreground: 'hsl(0 0% 100%)', // White foreground color

          // Dark theme variants of primary colors
          primary: {
            DEFAULT: 'hsl(255 75% 70%)',  // Lighter version of loop-purple
            foreground: 'hsl(0 0% 100%)', // White foreground for dark primary color
            50: 'hsl(255 45% 40%)',
            100: 'hsl(255 50% 45%)',
            200: 'hsl(255 55% 50%)',
            300: 'hsl(255 60% 55%)',
            400: 'hsl(255 65% 60%)',
            500: 'hsl(255 75% 70%)',  // Default dark primary color
            600: 'hsl(255 80% 75%)',
            700: 'hsl(255 85% 80%)',
            800: 'hsl(255 85% 85%)',
            900: 'hsl(255 85% 90%)',
            950: 'hsl(255 85% 98%)',
          },

          secondary: {
            DEFAULT: 'hsl(176 95% 45%)',  // Lighter version of action-teal
            foreground: 'hsl(0 0% 100%)', // White foreground for dark secondary color
            50: 'hsl(176 95% 25%)',
            100: 'hsl(176 95% 30%)',
            200: 'hsl(176 95% 35%)',
            300: 'hsl(176 95% 40%)',
            400: 'hsl(176 95% 42%)',
            500: 'hsl(176 95% 45%)',  // Default dark secondary color
            600: 'hsl(176 90% 50%)',
            700: 'hsl(176 85% 60%)',
            800: 'hsl(176 80% 70%)',
            900: 'hsl(176 75% 80%)',
            950: 'hsl(176 57% 93%)',
          },

          accent: {
            DEFAULT: 'hsl(217 100% 60%)',  // Lighter version of emphasis-blue
            foreground: 'hsl(0 0% 100%)', // White foreground for dark emphasis color
            50: 'hsl(217 100% 35%)',
            100: 'hsl(217 100% 40%)',
            200: 'hsl(217 100% 45%)',
            300: 'hsl(217 100% 50%)',
            400: 'hsl(217 100% 55%)',
            500: 'hsl(217 100% 60%)',  // Default dark emphasis color
            600: 'hsl(217 100% 70%)',
            700: 'hsl(217 100% 80%)',
            800: 'hsl(217 100% 85%)',
            900: 'hsl(217 100% 90%)',
            950: 'hsl(217 100% 95%)',
          },

          success: {
            DEFAULT: 'hsl(176 95% 45%)',  // Same as dark.secondary
            foreground: 'hsl(0 0% 100%)', // White foreground for dark success color
            50: 'hsl(176 95% 25%)',
            100: 'hsl(176 95% 30%)',
            200: 'hsl(176 95% 35%)',
            300: 'hsl(176 95% 40%)',
            400: 'hsl(176 95% 42%)',
            500: 'hsl(176 95% 45%)',  // Default dark success color
            600: 'hsl(176 90% 50%)',
            700: 'hsl(176 85% 60%)',
            800: 'hsl(176 80% 70%)',
            900: 'hsl(176 75% 80%)',
            950: 'hsl(176 57% 93%)',
          },

          warning: {
            DEFAULT: 'hsl(44 100% 60%)',  // Lighter version of alert-gold
            foreground: 'hsl(0 0% 100%)', // White foreground for dark warning color
            50: 'hsl(44 100% 35%)',
            100: 'hsl(44 100% 40%)',
            200: 'hsl(44 100% 45%)',
            300: 'hsl(44 100% 50%)',
            400: 'hsl(44 100% 55%)',
            500: 'hsl(44 100% 60%)',  // Default dark warning color
            600: 'hsl(44 100% 70%)',
            700: 'hsl(44 100% 80%)',
            800: 'hsl(44 100% 85%)',
            900: 'hsl(44 100% 90%)',
            950: 'hsl(44 100% 95%)',
          },

          destructive: {
            DEFAULT: 'hsl(0 100% 71%)',  // Lighter version of destructive-red
            foreground: 'hsl(0 0% 100%)', // White foreground for dark destructive color
            50: 'hsl(0 100% 45%)',
            100: 'hsl(0 100% 50%)',
            200: 'hsl(0 100% 55%)',
            300: 'hsl(0 100% 60%)',
            400: 'hsl(0 100% 65%)',
            500: 'hsl(0 100% 71%)',  // Default dark destructive color
            600: 'hsl(0 100% 75%)',
            700: 'hsl(0 100% 80%)',
            800: 'hsl(0 100% 85%)',
            900: 'hsl(0 100% 90%)',
            950: 'hsl(0 100% 95%)',
          },

          gray: {
            50: 'hsl(0 0% 5%)',    // Darkest gray color
            100: 'hsl(0 0% 10%)',
            200: 'hsl(0 0% 15%)',
            300: 'hsl(0 0% 20%)',
            400: 'hsl(0 0% 25%)',
            500: 'hsl(0 0% 45%)',
            600: 'hsl(0 0% 64%)',
            700: 'hsl(0 0% 76%)',
            800: 'hsl(0 0% 92%)',
            900: 'hsl(0 0% 97%)',
            950: 'hsl(0 0% 98%)',  // Lightest gray color
          },
        },
      },
      ringColor: {
        'ring': 'hsl(222 47% 11%)', // Color: Loop Purple
      },
    },
  },
  variants: {
    extend: {
      ringColor: ['focus-visible'],
    },
  },
};
