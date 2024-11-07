if (process.env.TRACE_CONFIG) {
  console.log('Loading tailwind config: core/config/tailwind/colors.js');
}
/** @type {import('tailwindcss').Config} */

export default {
  theme: {
    extend: {
      colors: {
        background: 'hsl(0 0% 100%)',
        foreground: 'hsl(222 47% 11%)',

        primary: {
          DEFAULT: 'hsl(217 91% 60%)',  // Bright blue similar to Talk to Loop
          foreground: 'hsl(0 0% 100%)',
          50: 'hsl(217 91% 97%)',
          100: 'hsl(217 91% 94%)',
          200: 'hsl(217 91% 87%)',
          300: 'hsl(217 91% 80%)',
          400: 'hsl(217 91% 70%)',
          500: 'hsl(217 91% 60%)',  // DEFAULT
          600: 'hsl(217 91% 50%)',
          700: 'hsl(217 91% 40%)',
          800: 'hsl(217 91% 30%)',
          900: 'hsl(217 91% 20%)',
          950: 'hsl(217 91% 10%)',
        },

        secondary: {
          DEFAULT: 'hsl(222 47% 11%)',  // Dark blue used in text
          foreground: 'hsl(0 0% 100%)',
          50: 'hsl(222 47% 97%)',
          100: 'hsl(222 47% 94%)',
          200: 'hsl(222 47% 87%)',
          300: 'hsl(222 47% 80%)',
          400: 'hsl(222 47% 70%)',
          500: 'hsl(222 47% 60%)',
          600: 'hsl(222 47% 50%)',
          700: 'hsl(222 47% 40%)',
          800: 'hsl(222 47% 30%)',
          900: 'hsl(222 47% 20%)',
          950: 'hsl(222 47% 11%)',  // DEFAULT
        },

        muted: {
          DEFAULT: 'hsl(220 14% 96%)',  // Light gray for backgrounds
          foreground: 'hsl(220 14% 46%)',
          50: 'hsl(220 14% 98%)',
          100: 'hsl(220 14% 96%)',  // DEFAULT
          200: 'hsl(220 14% 90%)',
          300: 'hsl(220 14% 80%)',
          400: 'hsl(220 14% 70%)',
          500: 'hsl(220 14% 60%)',
          600: 'hsl(220 14% 50%)',
          700: 'hsl(220 14% 40%)',
          800: 'hsl(220 14% 30%)',
          900: 'hsl(220 14% 20%)',
          950: 'hsl(220 14% 10%)',
        },

        success: {
          DEFAULT: 'hsl(142 76% 36%)',  // Green for CTAs
          foreground: 'hsl(0 0% 100%)',
          50: 'hsl(142 76% 97%)',
          100: 'hsl(142 76% 94%)',
          200: 'hsl(142 76% 87%)',
          300: 'hsl(142 76% 80%)',
          400: 'hsl(142 76% 46%)',
          500: 'hsl(142 76% 36%)',  // DEFAULT
          600: 'hsl(142 76% 26%)',
          700: 'hsl(142 76% 21%)',
          800: 'hsl(142 76% 16%)',
          900: 'hsl(142 76% 11%)',
          950: 'hsl(142 76% 8%)',
        },

        destructive: {
          DEFAULT: 'hsl(0 84% 60%)',
          foreground: 'hsl(0 0% 100%)',
          50: 'hsl(0 84% 97%)',
          100: 'hsl(0 84% 94%)',
          200: 'hsl(0 84% 87%)',
          300: 'hsl(0 84% 80%)',
          400: 'hsl(0 84% 70%)',
          500: 'hsl(0 84% 60%)',  // DEFAULT
          600: 'hsl(0 84% 50%)',
          700: 'hsl(0 84% 40%)',
          800: 'hsl(0 84% 30%)',
          900: 'hsl(0 84% 20%)',
          950: 'hsl(0 84% 10%)',
        },
      },
    },
  },
};
