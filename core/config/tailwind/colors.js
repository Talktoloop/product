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
        // Base Theme Colors
        background: {
          DEFAULT: 'hsl(0 0% 95%)', // Light Gray - Base page background
          contrast: 'hsl(222 47% 11%)', // Near Black - Ensures readability on background
        },
        foreground: {
          DEFAULT: 'hsl(222 47% 11%)', // Near Black - Default text color
          contrast: 'hsl(0 0% 100%)', // White - Ensures readability on foreground
        },

        // Loop Purple (#6B4DE6) - Primary Brand Color
        primary: {
          DEFAULT: 'hsl(255 75% 60%)',  // loop-500
          foreground: 'hsl(255 60% 53%)', // loop-700
          contrast: 'hsl(0 0% 100%)', // White for readability
          50: 'hsl(255 85% 97%)',    // Lightest shade
          100: 'hsl(255 85% 94%)',   // loop-100
          200: 'hsl(255 80% 87%)',   // loop-200
          300: 'hsl(255 75% 80%)',   // loop-300
          400: 'hsl(255 75% 70%)',   // loop-400
          500: 'hsl(255 75% 60%)',   // loop-500
          600: 'hsl(255 65% 55%)',   // loop-600
          700: 'hsl(255 60% 53%)',   // loop-700
          800: 'hsl(255 55% 52%)',   // loop-800
          900: 'hsl(255 50% 45%)',   // Darker shade
          950: 'hsl(255 45% 40%)',   // Darkest shade
        },

        // Action Teal (#05C3B6) - Secondary Brand Color
        secondary: {
          DEFAULT: 'hsl(176 95% 39%)',  // action-500
          foreground: 'hsl(176 96% 34%)', // action-700
          contrast: 'hsl(0 0% 100%)', // White for readability
          50: 'hsl(176 57% 95%)',    // Lightest shade
          100: 'hsl(176 60% 90%)',   // action-100
          200: 'hsl(176 65% 80%)',   // action-200
          300: 'hsl(176 70% 70%)',   // action-300
          400: 'hsl(176 85% 50%)',   // action-400
          500: 'hsl(176 95% 39%)',   // action-500
          600: 'hsl(176 95% 36%)',   // action-600
          700: 'hsl(176 96% 34%)',   // action-700
          800: 'hsl(176 96% 33%)',   // action-800
          900: 'hsl(176 95% 28%)',   // Darker shade
          950: 'hsl(176 95% 25%)',   // Darkest shade
        },

        // Emphasis Blue (#0066FF) - Accent Color
        accent: {
          DEFAULT: 'hsl(217 100% 50%)',  // emphasis-500
          foreground: 'hsl(217 100% 42%)', // emphasis-700
          contrast: 'hsl(0 0% 100%)', // White for readability
          50: 'hsl(217 100% 97%)',   // Lightest shade
          100: 'hsl(217 100% 90%)',  // emphasis-100
          200: 'hsl(217 100% 80%)',  // emphasis-200
          300: 'hsl(217 100% 70%)',  // emphasis-300
          400: 'hsl(217 100% 60%)',  // emphasis-400
          500: 'hsl(217 100% 50%)',  // emphasis-500
          600: 'hsl(217 100% 45%)',  // emphasis-600
          700: 'hsl(217 100% 42%)',  // emphasis-700
          800: 'hsl(217 100% 41%)',  // emphasis-800
          900: 'hsl(217 100% 35%)',  // Darker shade
          950: 'hsl(217 100% 30%)',  // Darkest shade
        },

        // Success Teal (#05C3B6) - Positive Feedback Color
        success: {
          DEFAULT: 'hsl(176 95% 39%)',  // success-500
          foreground: 'hsl(176 96% 34%)', // success-700
          contrast: 'hsl(0 0% 100%)', // White for readability
          50: 'hsl(176 57% 95%)',    // Lightest shade
          100: 'hsl(176 60% 90%)',   // success-100
          200: 'hsl(176 65% 80%)',   // success-200
          300: 'hsl(176 70% 70%)',   // success-300
          400: 'hsl(176 85% 50%)',   // success-400
          500: 'hsl(176 95% 39%)',   // success-500
          600: 'hsl(176 95% 36%)',   // success-600
          700: 'hsl(176 96% 34%)',   // success-700
          800: 'hsl(176 96% 33%)',   // success-800
          900: 'hsl(176 95% 28%)',   // Darker shade
          950: 'hsl(176 95% 25%)',   // Darkest shade
        },

        // Warning Gold (#FFB800) - Cautionary Color
        warning: {
          DEFAULT: 'hsl(44 100% 50%)',  // alert-500
          foreground: 'hsl(44 100% 42%)', // alert-700
          contrast: 'hsl(222 47% 11%)', // Near black for readability on light colors
          50: 'hsl(44 100% 97%)',    // Lightest shade
          100: 'hsl(44 100% 90%)',   // alert-100
          200: 'hsl(44 100% 80%)',   // alert-200
          300: 'hsl(44 100% 70%)',   // alert-300
          400: 'hsl(44 100% 60%)',   // alert-400
          500: 'hsl(44 100% 50%)',   // alert-500
          600: 'hsl(44 100% 45%)',   // alert-600
          700: 'hsl(44 100% 42%)',   // alert-700
          800: 'hsl(44 100% 41%)',   // alert-800
          900: 'hsl(44 100% 35%)',   // Darker shade
          950: 'hsl(44 100% 30%)',   // Darkest shade
        },

        // Destructive Red (#FF3B3B) - Error Color
        destructive: {
          DEFAULT: 'hsl(348.7 49.2% 40.6%)',  // destructive-500
          foreground: 'hsl(349 100% 22.5%)', // destructive-700
          contrast: 'hsl(0 0% 100%)', // White for readability
          50: 'hsl(348.8 61.5% 95%)',      // Lightest shade
          100: 'hsl(348.8 61.5% 89.8%)',   // destructive-100
          200: 'hsl(348.9 67.9% 78%)',     // destructive-200
          300: 'hsl(348.8 67.8% 65.9%)',   // destructive-300
          400: 'hsl(348.9 54.5% 47.5%)',   // destructive-400
          500: 'hsl(348.7 49.2% 40.6%)',   // destructive-500
          600: 'hsl(348.8 34.8% 30.8%)',   // destructive-600
          700: 'hsl(349 100% 22.5%)',      // destructive-700
          800: 'hsl(349.5 84% 14.7%)',     // destructive-800
          900: 'hsl(349.5 84% 10%)',       // Darker shade
          950: 'hsl(349.5 84% 5%)',        // Darkest shade
        },

        // Neutral Colors - UI Framework
        muted: {
          DEFAULT: 'hsl(0 0% 40%)',  // neutral-500
          foreground: 'hsl(0 0% 29%)', // neutral-700
          contrast: 'hsl(0 0% 100%)', // White for readability
          50: 'hsl(0 0% 95%)',     // Lightest shade
          100: 'hsl(0 0% 86%)',    // neutral-100
          200: 'hsl(0 0% 78%)',    // neutral-200
          300: 'hsl(0 0% 71%)',    // neutral-300
          400: 'hsl(0 0% 57%)',    // neutral-400
          500: 'hsl(0 0% 40%)',    // neutral-500
          600: 'hsl(0 0% 35%)',    // neutral-600
          700: 'hsl(0 0% 29%)',    // neutral-700
          800: 'hsl(0 0% 10%)',    // neutral-800
          900: 'hsl(0 0% 5%)',     // Darker shade
          950: 'hsl(0 0% 3%)',     // Darkest shade
        },

        // Input Colors - Form Element Backgrounds
        input: {
          DEFAULT: 'hsl(0 0% 98%)', // Very Light Gray - Default input background
          foreground: 'hsl(222 47% 11%)', // Near Black - Default input text
          contrast: 'hsl(222 47% 11%)', // Near Black - Ensures readability on input
          placeholder: 'hsl(0 0% 45%)', // Medium Gray - Placeholder text
        },

        // Dark Theme Colors - Night Mode Variants
        dark: {
          background: {
            DEFAULT: 'hsl(222 47% 8%)', // Very Dark Near Black - Dark mode base background
            contrast: 'hsl(0 0% 100%)', // White - Ensures readability on dark background
          },
          foreground: {
            DEFAULT: 'hsl(0 0% 100%)', // White - Dark mode text
            contrast: 'hsl(222 47% 11%)', // Near Black - Ensures readability on dark foreground
          },

          primary: {
            DEFAULT: 'hsl(255 75% 70%)',  // Dark loop-500
            foreground: 'hsl(255 80% 75%)', // Dark loop-700
            contrast: 'hsl(222 47% 11%)', // Near Black for readability
            50: 'hsl(255 45% 40%)',    // Darkest shade
            100: 'hsl(255 50% 45%)',   // Dark loop-100
            200: 'hsl(255 55% 50%)',   // Dark loop-200
            300: 'hsl(255 60% 55%)',   // Dark loop-300
            400: 'hsl(255 65% 60%)',   // Dark loop-400
            500: 'hsl(255 75% 70%)',   // Dark loop-500
            600: 'hsl(255 80% 75%)',   // Dark loop-600
            700: 'hsl(255 85% 80%)',   // Dark loop-700
            800: 'hsl(255 85% 85%)',   // Dark loop-800
            900: 'hsl(255 85% 90%)',   // Lighter shade
            950: 'hsl(255 85% 95%)',   // Lightest shade
          },

          secondary: {
            DEFAULT: 'hsl(176 95% 45%)',  // Dark action-500
            foreground: 'hsl(176 85% 60%)', // Dark action-700
            contrast: 'hsl(222 47% 11%)', // Near Black for readability
            50: 'hsl(176 95% 25%)',    // Darkest shade
            100: 'hsl(176 95% 30%)',   // Dark action-100
            200: 'hsl(176 95% 35%)',   // Dark action-200
            300: 'hsl(176 95% 40%)',   // Dark action-300
            400: 'hsl(176 95% 42%)',   // Dark action-400
            500: 'hsl(176 95% 45%)',   // Dark action-500
            600: 'hsl(176 90% 50%)',   // Dark action-600
            700: 'hsl(176 85% 60%)',   // Dark action-700
            800: 'hsl(176 80% 70%)',   // Dark action-800
            900: 'hsl(176 75% 80%)',   // Lighter shade
            950: 'hsl(176 57% 93%)',   // Lightest shade
          },

          accent: {
            DEFAULT: 'hsl(217 100% 60%)',  // Dark emphasis-500
            foreground: 'hsl(217 100% 70%)', // Dark emphasis-700
            contrast: 'hsl(222 47% 11%)', // Near Black for readability
            50: 'hsl(217 100% 35%)',   // Darkest shade
            100: 'hsl(217 100% 40%)',  // Dark emphasis-100
            200: 'hsl(217 100% 45%)',  // Dark emphasis-200
            300: 'hsl(217 100% 50%)',  // Dark emphasis-300
            400: 'hsl(217 100% 55%)',  // Dark emphasis-400
            500: 'hsl(217 100% 60%)',  // Dark emphasis-500
            600: 'hsl(217 100% 70%)',  // Dark emphasis-600
            700: 'hsl(217 100% 80%)',  // Dark emphasis-700
            800: 'hsl(217 100% 85%)',  // Dark emphasis-800
            900: 'hsl(217 100% 90%)',  // Lighter shade
            950: 'hsl(217 100% 95%)',  // Lightest shade
          },

          success: {
            DEFAULT: 'hsl(176 95% 45%)',  // Dark success-500
            foreground: 'hsl(176 85% 60%)', // Dark success-700
            contrast: 'hsl(222 47% 11%)', // Near Black for readability
            50: 'hsl(176 95% 25%)',    // Darkest shade
            100: 'hsl(176 95% 30%)',   // Dark success-100
            200: 'hsl(176 95% 35%)',   // Dark success-200
            300: 'hsl(176 95% 40%)',   // Dark success-300
            400: 'hsl(176 95% 42%)',   // Dark success-400
            500: 'hsl(176 95% 45%)',   // Dark success-500
            600: 'hsl(176 90% 50%)',   // Dark success-600
            700: 'hsl(176 85% 60%)',   // Dark success-700
            800: 'hsl(176 80% 70%)',   // Dark success-800
            900: 'hsl(176 75% 80%)',   // Lighter shade
            950: 'hsl(176 57% 93%)',   // Lightest shade
          },

          warning: {
            DEFAULT: 'hsl(44 100% 60%)',  // Dark alert-500
            foreground: 'hsl(44 100% 70%)', // Dark alert-700
            contrast: 'hsl(222 47% 11%)', // Near Black for readability
            50: 'hsl(44 100% 35%)',    // Darkest shade
            100: 'hsl(44 100% 40%)',   // Dark alert-100
            200: 'hsl(44 100% 45%)',   // Dark alert-200
            300: 'hsl(44 100% 50%)',   // Dark alert-300
            400: 'hsl(44 100% 55%)',   // Dark alert-400
            500: 'hsl(44 100% 60%)',   // Dark alert-500
            600: 'hsl(44 100% 70%)',   // Dark alert-600
            700: 'hsl(44 100% 80%)',   // Dark alert-700
            800: 'hsl(44 100% 85%)',   // Dark alert-800
            900: 'hsl(44 100% 90%)',   // Lighter shade
            950: 'hsl(44 100% 95%)',   // Lightest shade
          },

          destructive: {
            DEFAULT: 'hsl(0 100% 71%)',  // Dark destructive-500
            foreground: 'hsl(0 100% 80%)', // Dark destructive-700
            contrast: 'hsl(222 47% 11%)', // Near Black for readability
            50: 'hsl(0 100% 45%)',     // Darkest shade
            100: 'hsl(0 100% 50%)',    // Dark destructive-100
            200: 'hsl(0 100% 55%)',    // Dark destructive-200
            300: 'hsl(0 100% 60%)',    // Dark destructive-300
            400: 'hsl(0 100% 65%)',    // Dark destructive-400
            500: 'hsl(0 100% 71%)',    // Dark destructive-500
            600: 'hsl(0 100% 75%)',    // Dark destructive-600
            700: 'hsl(0 100% 80%)',    // Dark destructive-700
            800: 'hsl(0 100% 85%)',    // Dark destructive-800
            900: 'hsl(0 100% 90%)',    // Lighter shade
            950: 'hsl(0 100% 95%)',    // Lightest shade
          },

          gray: {
            50: 'hsl(0 0% 5%)',     // Darkest shade
            100: 'hsl(0 0% 10%)',   // Dark gray-100
            200: 'hsl(0 0% 15%)',   // Dark gray-200
            300: 'hsl(0 0% 20%)',   // Dark gray-300
            400: 'hsl(0 0% 25%)',   // Dark gray-400
            500: 'hsl(0 0% 45%)',   // Dark gray-500
            600: 'hsl(0 0% 64%)',   // Dark gray-600
            700: 'hsl(0 0% 76%)',   // Dark gray-700
            800: 'hsl(0 0% 92%)',   // Dark gray-800
            900: 'hsl(0 0% 97%)',   // Lighter shade
            950: 'hsl(0 0% 98%)',   // Lightest shade
          },

          surface: {
            DEFAULT: 'hsl(222 47% 8%)', // Dark surface background
            foreground: 'hsl(0 0% 100%)', // White text for dark mode
            contrast: 'hsl(0 0% 100%)', // White for readability
            ring: 'hsl(0 0% 100%)', // White ring for dark mode

            // Surface variants for dark mode
            primary: 'hsl(255 45% 40%)',    // Dark primary surface
            secondary: 'hsl(176 95% 25%)',   // Dark secondary surface
            accent: 'hsl(217 100% 35%)',     // Dark accent surface
            muted: 'hsl(0 0% 15%)',          // Dark muted surface
            success: 'hsl(176 95% 25%)',     // Dark success surface
            warning: 'hsl(44 100% 35%)',     // Dark warning surface
            destructive: 'hsl(0 100% 45%)',  // Dark destructive surface
          },

          input: {
            DEFAULT: 'hsl(222 47% 8%)', // Dark input background
            foreground: 'hsl(0 0% 100%)', // White text for dark mode
            contrast: 'hsl(0 0% 100%)', // White for readability
            placeholder: 'hsl(0 0% 55%)', // Light gray placeholder text
          },
        },

        // Surface Colors - Component Background Variants
        surface: {
          DEFAULT: 'hsl(0 0% 100%)', // White - Elevated surface background
          foreground: 'hsl(222 47% 11%)', // Near Black - Default surface text
          contrast: 'hsl(222 47% 11%)', // Near Black - Ensures readability on surface
          ring: 'hsl(222 47% 11%)', // Loop Purple - Default ring color

          // Surface variants for different contexts
          primary: 'hsl(255 85% 97%)',    // Very Light Loop Purple - Primary surface
          secondary: 'hsl(176 57% 93%)',   // Very Light Action Teal - Secondary surface
          accent: 'hsl(217 100% 95%)',     // Very Light Emphasis Blue - Accent surface
          muted: 'hsl(0 0% 98%)',          // Very Light Gray - Muted surface
          success: 'hsl(176 57% 93%)',     // Very Light Success Teal - Success surface
          warning: 'hsl(44 100% 95%)',     // Very Light Warning Gold - Warning surface
          destructive: 'hsl(0 100% 95%)',  // Very Light Destructive Red - Destructive surface
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
