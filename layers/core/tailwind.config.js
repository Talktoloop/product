const { default: core } = require("@ourloop/product-core-config/tailwind/core.js")
const { default: typography } = require("@ourloop/product-core-config/tailwind/typography.js")
const { default: spacing } = require("@ourloop/product-core-config/tailwind/spacing.js")
const { default: colors } = require("@ourloop/product-core-config/tailwind/colors.js")
const { default: variables } = require("@ourloop/product-core-config/tailwind/variables.js")

if (process.env.TRACE_CONFIG) {
  console.log('Loading tailwind config: layers/core/tailwind.config.js')
}
/** @type {import('tailwindcss').Config} */
export default {
  presets: [
    core,
    typography,
    spacing,
    colors,
    variables,
  ],
  theme: {
    extend: {
      colors: {
        branded: {
          surface: {
            DEFAULT: 'var(--color-primary)',
            contrast: 'var(--color-primary-contrast)',
          }
        },
        button: {
          // Primary variant
          primary: {
            DEFAULT: 'var(--color-primary-500)',
            foreground: 'var(--color-primary-contrast)',
            hover: 'var(--color-primary-600)',
            active: 'var(--color-primary-700)',
            disabled: 'var(--color-primary-200)',
          },
          // Secondary variant
          secondary: {
            DEFAULT: 'var(--color-secondary-500)',
            foreground: 'var(--color-secondary-contrast)',
            hover: 'var(--color-secondary-600)',
            active: 'var(--color-secondary-700)',
            disabled: 'var(--color-secondary-200)',
          },
          // Accent variant
          accent: {
            DEFAULT: 'var(--color-accent-500)',
            foreground: 'var(--color-accent-contrast)',
            hover: 'var(--color-accent-600)',
            active: 'var(--color-accent-700)',
            disabled: 'var(--color-accent-200)',
          },
          // Destructive variant
          destructive: {
            DEFAULT: 'var(--color-destructive-500)',
            foreground: 'var(--color-destructive-contrast)',
            hover: 'var(--color-destructive-600)',
            active: 'var(--color-destructive-700)',
            disabled: 'var(--color-destructive-200)',
          },
          // Ghost/Muted variant
          ghost: {
            DEFAULT: 'var(--color-muted-100)',
            foreground: 'var(--color-muted-700)',
            hover: 'var(--color-muted-200)',
            active: 'var(--color-muted-300)',
            disabled: 'var(--color-muted-50)',
          }
        },
        message: {
          // Default/Muted state
          DEFAULT: {
            bg: 'var(--color-muted-50)',
            border: 'var(--color-muted-100)',
            text: 'var(--color-muted-700)'
          },
          // Selected state
          selected: {
            bg: 'var(--color-primary-100)',
            border: 'var(--color-primary-200)',
            text: 'var(--color-primary-700)'
          },
          // Active state
          active: {
            bg: 'var(--color-primary-200)',
            border: 'var(--color-primary-300)',
            text: 'var(--color-primary-700)'
          },
          // Error state
          error: {
            bg: 'var(--color-destructive-50)',
            border: 'var(--color-destructive-200)',
            text: 'var(--color-destructive-700)'
          }
        },
        // Dark mode colors
        dark: {
          branded: {
            surface: {
              DEFAULT: 'var(--color-dark-primary)',
              contrast: 'var(--color-dark-primary-contrast)',
            }
          },
          button: {
            // Primary variant
            primary: {
              DEFAULT: 'var(--color-dark-primary-500)',
              foreground: 'var(--color-dark-primary-contrast)',
              hover: 'var(--color-dark-primary-600)',
              active: 'var(--color-dark-primary-700)',
              disabled: 'var(--color-dark-primary-200)',
            },
            // Secondary variant
            secondary: {
              DEFAULT: 'var(--color-dark-secondary-500)',
              foreground: 'var(--color-dark-secondary-contrast)',
              hover: 'var(--color-dark-secondary-600)',
              active: 'var(--color-dark-secondary-700)',
              disabled: 'var(--color-dark-secondary-200)',
            },
            // Accent variant
            accent: {
              DEFAULT: 'var(--color-dark-accent-500)',
              foreground: 'var(--color-dark-accent-contrast)',
              hover: 'var(--color-dark-accent-600)',
              active: 'var(--color-dark-accent-700)',
              disabled: 'var(--color-dark-accent-200)',
            },
            // Destructive variant
            destructive: {
              DEFAULT: 'var(--color-dark-destructive-500)',
              foreground: 'var(--color-dark-destructive-contrast)',
              hover: 'var(--color-dark-destructive-600)',
              active: 'var(--color-dark-destructive-700)',
              disabled: 'var(--color-dark-destructive-200)',
            },
            // Ghost/Muted variant
            ghost: {
              DEFAULT: 'var(--color-dark-muted-100)',
              foreground: 'var(--color-dark-muted-700)',
              hover: 'var(--color-dark-muted-200)',
              active: 'var(--color-dark-muted-300)',
              disabled: 'var(--color-dark-muted-50)',
            }
          },
          message: {
            // Default/Muted state
            DEFAULT: {
              bg: 'var(--color-dark-muted-50)',
              border: 'var(--color-dark-muted-100)',
              text: 'var(--color-dark-muted-700)'
            },
            // Selected state
            selected: {
              bg: 'var(--color-dark-primary-100)',
              border: 'var(--color-dark-primary-200)',
              text: 'var(--color-dark-primary-700)'
            },
            // Active state
            active: {
              bg: 'var(--color-dark-primary-200)',
              border: 'var(--color-dark-primary-300)',
              text: 'var(--color-dark-primary-700)'
            },
            // Error state
            error: {
              bg: 'var(--color-dark-destructive-50)',
              border: 'var(--color-dark-destructive-200)',
              text: 'var(--color-dark-destructive-700)'
            }
          }
        }
      },
    },
  },
}
