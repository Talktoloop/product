if (process.env.TRACE_CONFIG) {
  console.log('Loading tailwind config: core/config/tailwind/typography.js');
}
/** @type {import('tailwindcss').Config} */

export default {
  plugins: [require("@tailwindcss/typography")],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            // Base styles
            color: 'var(--tw-prose-body)',
            maxWidth: '75ch', // For optimal line length
            fontSize: '16px',
            lineHeight: '1.5',

            // Headings
            h1: {
              fontSize: '48px',
              lineHeight: '1.2',
              fontWeight: '700',
              marginTop: '0',
              marginBottom: '1.5rem',
            },
            h2: {
              fontSize: '32px',
              lineHeight: '1.2',
              fontWeight: '700',
              marginTop: '2rem',
              marginBottom: '1rem',
            },
            h3: {
              fontSize: '24px',
              lineHeight: '1.3',
              fontWeight: '500',
              marginTop: '1.5rem',
              marginBottom: '0.75rem',
            },
            h4: {
              fontSize: '18px',
              lineHeight: '1.4',
              fontWeight: '500',
              marginTop: '1.25rem',
              marginBottom: '0.5rem',
            },

            // Body text styles
            p: {
              marginTop: '1rem',
              marginBottom: '1rem',
            },

            // Lists
            ul: {
              marginTop: '1rem',
              marginBottom: '1rem',
            },
            ol: {
              marginTop: '1rem',
              marginBottom: '1rem',
            },

            // Font weights
            'font-normal': '400',
            'font-medium': '500',
            'font-bold': '700',
          }
        },

        // Size variants
        sm: {
          css: {
            fontSize: '14px',
            h1: { fontSize: '36px' },
            h2: { fontSize: '24px' },
            h3: { fontSize: '18px' },
            h4: { fontSize: '16px' },
          }
        },
        lg: {
          css: {
            fontSize: '18px',
            h1: { fontSize: '56px' },
            h2: { fontSize: '40px' },
            h3: { fontSize: '28px' },
            h4: { fontSize: '20px' },
          }
        },
        xl: {
          css: {
            fontSize: '20px',
            h1: { fontSize: '64px' },
            h2: { fontSize: '48px' },
            h3: { fontSize: '32px' },
            h4: { fontSize: '24px' },
          }
        },
        '2xl': {
          css: {
            fontSize: '24px',
            h1: { fontSize: '72px' },
            h2: { fontSize: '56px' },
            h3: { fontSize: '40px' },
            h4: { fontSize: '28px' },
          }
        },
      },
    },
  },
};
