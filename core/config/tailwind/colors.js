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
          DEFAULT: 'hsl(255 75% 60%)',  // Loop Purple - Main brand color
          foreground: 'hsl(0 0% 100%)', // White - Text on primary backgrounds
          contrast: 'hsl(0 0% 100%)', // White - Ensures readability on primary colors
          50: 'hsl(255 85% 98%)',   // Lightest Loop Purple - Subtle backgrounds
          100: 'hsl(255 85% 94%)',
          200: 'hsl(255 80% 87%)',
          300: 'hsl(255 75% 80%)',
          400: 'hsl(255 75% 70%)',
          500: 'hsl(255 75% 60%)',  // Default Loop Purple - Main usage
          600: 'hsl(255 65% 55%)',
          700: 'hsl(255 60% 53%)',
          800: 'hsl(255 55% 52%)',
          900: 'hsl(255 50% 51%)',  // Darkest Loop Purple - Strong emphasis
          950: 'hsl(255 45% 40%)',
        },

        // Action Teal (#05C3B6) - Secondary Brand Color
        secondary: {
          DEFAULT: 'hsl(176 95% 32%)',  // Action Teal - Secondary brand color
          foreground: 'hsl(0 0% 100%)', // White - Text on secondary backgrounds
          contrast: 'hsl(0 0% 100%)', // White - Ensures readability on secondary colors
          50: 'hsl(176 57% 93%)',   // Lightest Action Teal - Subtle backgrounds
          100: 'hsl(176 60% 90%)',
          200: 'hsl(176 65% 80%)',
          300: 'hsl(176 70% 70%)',
          400: 'hsl(176 85% 50%)',
          500: 'hsl(176 95% 39%)',  // Default Action Teal - Main usage
          600: 'hsl(176 95% 36%)',
          700: 'hsl(176 96% 34%)',
          800: 'hsl(176 96% 33%)',  // Darkest Action Teal - Strong emphasis
          900: 'hsl(176 95% 30%)',
          950: 'hsl(176 95% 25%)',
        },

        // Emphasis Blue (#0066FF) - Accent Color
        accent: {
          DEFAULT: 'hsl(217 100% 45%)',  // Emphasis Blue - Highlighting important elements
          foreground: 'hsl(0 0% 100%)',  // White - Text on accent backgrounds
          contrast: 'hsl(0 0% 100%)', // White - Ensures readability on accent colors
          50: 'hsl(217 100% 95%)',   // Lightest Emphasis Blue - Subtle highlights
          100: 'hsl(217 100% 90%)',
          200: 'hsl(217 100% 80%)',
          300: 'hsl(217 100% 70%)',
          400: 'hsl(217 100% 60%)',
          500: 'hsl(217 100% 50%)',  // Default Emphasis Blue - Main usage
          600: 'hsl(217 100% 45%)',
          700: 'hsl(217 100% 42%)',
          800: 'hsl(217 100% 41%)',
          900: 'hsl(217 100% 40%)',  // Darkest Emphasis Blue - Strong emphasis
          950: 'hsl(217 100% 35%)',
        },

        // Success Teal (#05C3B6) - Positive Feedback Color
        success: {
          DEFAULT: 'hsl(176 95% 32%)',  // Success Teal - Positive status indicators
          foreground: 'hsl(0 0% 100%)', // White - Text on success backgrounds
          contrast: 'hsl(0 0% 100%)', // White - Ensures readability on success colors
          50: 'hsl(176 57% 93%)',   // Lightest Success Teal - Subtle success states
          100: 'hsl(176 60% 90%)',
          200: 'hsl(176 65% 80%)',
          300: 'hsl(176 70% 70%)',
          400: 'hsl(176 85% 50%)',
          500: 'hsl(176 95% 39%)',  // Default Success Teal - Main usage
          600: 'hsl(176 95% 36%)',
          700: 'hsl(176 96% 34%)',
          800: 'hsl(176 96% 33%)',  // Darkest Success Teal - Strong emphasis
          900: 'hsl(176 95% 30%)',
          950: 'hsl(176 95% 25%)',
        },

        // Warning Gold (#FFB800) - Cautionary Color
        warning: {
          DEFAULT: 'hsl(44 100% 50%)',  // Warning Gold - Attention-needed indicators
          foreground: 'hsl(222 47% 11%)',  // Near Black - Text on warning backgrounds
          contrast: 'hsl(222 47% 11%)', // Near Black - Ensures readability on warning colors
          50: 'hsl(44 100% 95%)',   // Lightest Warning Gold - Subtle warning states
          100: 'hsl(44 100% 90%)',
          200: 'hsl(44 100% 80%)',
          300: 'hsl(44 100% 70%)',
          400: 'hsl(44 100% 60%)',
          500: 'hsl(44 100% 50%)',  // Default Warning Gold - Main usage
          600: 'hsl(44 100% 45%)',
          700: 'hsl(44 100% 42%)',
          800: 'hsl(44 100% 41%)',
          900: 'hsl(44 100% 40%)',  // Darkest Warning Gold - Strong emphasis
          950: 'hsl(44 100% 35%)',
        },

        // Destructive Red (#FF3B3B) - Error Color
        destructive: {
          DEFAULT: 'hsl(348.7 49.2% 40.6%)',  // Destructive Red - Error indicators
          foreground: 'hsl(0 0% 100%)', // White - Text on destructive backgrounds
          contrast: 'hsl(0 0% 100%)', // White - Ensures readability on destructive colors
          50: 'hsl(348.8 61.5% 95%)',   // Lightest Destructive Red - Subtle error states
          100: 'hsl(348.8 61.5% 89.8%)',  // #F5D5DB
          200: 'hsl(348.9 67.9% 78%)',    // #EDA1AF
          300: 'hsl(348.8 67.8% 65.9%)',  // #E36D83
          400: 'hsl(348.9 54.5% 47.5%)',  // #C2304B
          500: 'hsl(348.7 49.2% 40.6%)',  // #B21D39
          600: 'hsl(348.8 34.8% 30.8%)',  // #8C1128
          700: 'hsl(349 100% 22.5%)',     // #730015
          800: 'hsl(349.5 84% 14.7%)',    // #450611
          900: 'hsl(349.5 84% 10%)',      // Darkest Destructive Red - Strong emphasis
          950: 'hsl(349.5 84% 5%)',
        },

        // Neutral Colors - UI Framework
        muted: {
          DEFAULT: 'hsl(0 0% 40%)',  // neutral-500 - Default neutral color
          foreground: 'hsl(0 0% 10%)', // neutral-800 - Default text
          contrast: 'hsl(0 0% 100%)', // neutral-000 - Ensures readability
          0: 'hsl(0 0% 100%)',    // neutral-000 - White
          50: 'hsl(0 0% 95%)',    // neutral-050 - Background, subtle borders
          100: 'hsl(0 0% 86%)',   // neutral-100 - Hover states, dividers
          200: 'hsl(0 0% 78%)',   // neutral-200 - Secondary borders
          300: 'hsl(0 0% 71%)',   // neutral-300 - Disabled text
          400: 'hsl(0 0% 57%)',   // neutral-400 - Placeholder text
          500: 'hsl(0 0% 40%)',   // neutral-500 - Primary neutral
          600: 'hsl(0 0% 35%)',   // neutral-600 - Strong text
          700: 'hsl(0 0% 29%)',   // neutral-700 - Low-contrast text
          800: 'hsl(0 0% 10%)',   // neutral-800 - High-contrast text
          900: 'hsl(0 0% 5%)',    // neutral-900 - Extra dark text
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
            DEFAULT: 'hsl(255 75% 70%)',  // Light Loop Purple - Dark mode brand color
            foreground: 'hsl(0 0% 100%)', // White - Text on dark primary
            contrast: 'hsl(222 47% 11%)', // Near Black - Ensures readability on dark primary
            50: 'hsl(255 45% 40%)',   // Darkest Dark Loop Purple - Strong emphasis
            100: 'hsl(255 50% 45%)',
            200: 'hsl(255 55% 50%)',
            300: 'hsl(255 60% 55%)',
            400: 'hsl(255 65% 60%)',
            500: 'hsl(255 75% 70%)',  // Default Dark Loop Purple - Main usage
            600: 'hsl(255 80% 75%)',
            700: 'hsl(255 85% 80%)',
            800: 'hsl(255 85% 85%)',
            900: 'hsl(255 85% 90%)',
            950: 'hsl(255 85% 98%)',  // Lightest Dark Loop Purple - Subtle backgrounds
          },

          secondary: {
            DEFAULT: 'hsl(176 95% 45%)',  // Lighter version of action-teal
            foreground: 'hsl(0 0% 100%)', // White foreground for dark secondary color
            contrast: 'hsl(222 47% 11%)', // Dark for good contrast against dark theme secondary
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
            contrast: 'hsl(222 47% 11%)', // Dark for good contrast against dark theme accent
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
            contrast: 'hsl(222 47% 11%)', // Dark for good contrast against dark theme success
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
            contrast: 'hsl(222 47% 11%)', // Dark for good contrast against dark theme warning
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
            contrast: 'hsl(222 47% 11%)', // Dark for good contrast against dark theme destructive
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

          // Surface Colors - Component Background Variants
          surface: {
            DEFAULT: 'hsl(0 0% 100%)', // White - Elevated surface background
            foreground: 'hsl(222 47% 11%)', // Near Black - Default surface text
            contrast: 'hsl(222 47% 11%)', // Near Black - Ensures readability on surface

            // Surface variants for different contexts
            primary: 'hsl(255 85% 96%)',   // Light Loop Purple - Primary surface
            secondary: 'hsl(176 57% 90%)',  // Light Action Teal - Secondary surface
            accent: 'hsl(217 100% 92%)',    // Light Emphasis Blue - Accent surface
            muted: 'hsl(0 0% 95%)',         // Light Gray - Muted surface
            success: 'hsl(176 57% 90%)',    // Light Success Teal - Success surface
            warning: 'hsl(44 100% 92%)',    // Light Warning Gold - Warning surface
            destructive: 'hsl(0 100% 92%)', // Light Destructive Red - Destructive surface
          },

          // Dark Input Colors - Dark Mode Form Element Backgrounds
          input: {
            DEFAULT: 'hsl(222 47% 8%)', // Darker Near Black - Dark mode input background
            foreground: 'hsl(0 0% 100%)', // White - Dark mode input text
            contrast: 'hsl(0 0% 100%)', // White - Ensures readability on dark input
            placeholder: 'hsl(0 0% 55%)', // Light Gray - Dark mode placeholder text
          },
        },

        // Surface Colors - Component Background Variants
        surface: {
          DEFAULT: 'hsl(0 0% 100%)', // White - Elevated surface background
          foreground: 'hsl(222 47% 11%)', // Near Black - Default surface text
          contrast: 'hsl(222 47% 11%)', // Near Black - Ensures readability on surface
          ring: 'hsl(222 47% 11%)', // Loop Purple - Default ring color
          // Surface variants for different contexts
          primary: 'hsl(255 85% 98%)',   // Very Light Loop Purple - Primary surface
          secondary: 'hsl(176 57% 93%)',  // Very Light Action Teal - Secondary surface
          accent: 'hsl(217 100% 95%)',    // Very Light Emphasis Blue - Accent surface
          muted: 'hsl(0 0% 98%)',         // Very Light Gray - Muted surface
          success: 'hsl(176 57% 93%)',    // Very Light Success Teal - Success surface
          warning: 'hsl(44 100% 95%)',    // Very Light Warning Gold - Warning surface
          destructive: 'hsl(0 100% 95%)', // Very Light Destructive Red - Destructive surface
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
