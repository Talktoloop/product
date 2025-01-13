import process from 'node:process'
import console from 'node:console'
import typography from '@tailwindcss/typography'

if (process.env.TRACE_CONFIG) {
  console.log('Loading tailwind config: core/config/tailwind/typography.js');
}
/** @type {import('tailwindcss').Config} */

export default {
  plugins: [typography],
  theme: {
    extend: {
      fontSize: {
        'xs': ['12px', '16px'],
        'sm': ['14px', '20px'],
        'base': ['16px', '24px'],
        'lg': ['18px', '28px'],
        'xl': ['20px', '32px'],
        '2xl': ['24px', '32px'],
        '3xl': ['30px', '36px'],
        '4xl': ['36px', '44px'],
        '5xl': ['48px', '56px'],
        '6xl': ['60px', '72px'],
        '7xl': ['72px', '84px'],
        '8xl': ['96px', '108px'],
        '9xl': ['128px', '144px'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'var(--tw-prose-body)',
            maxWidth: '75ch',
            fontSize: '16px',
            lineHeight: '24px',

            h1: {
              fontSize: '48px',
              lineHeight: '56px',
              fontWeight: '700',
              marginTop: '0',
              marginBottom: '24px',
            },
            h2: {
              fontSize: '36px',
              lineHeight: '44px',
              fontWeight: '700',
              marginTop: '32px',
              marginBottom: '16px',
            },
            h3: {
              fontSize: '30px',
              lineHeight: '36px',
              fontWeight: '600',
              marginTop: '24px',
              marginBottom: '12px',
            },
            h4: {
              fontSize: '24px',
              lineHeight: '32px',
              fontWeight: '600',
              marginTop: '20px',
              marginBottom: '8px',
            },
            h5: {
              fontSize: '20px',
              lineHeight: '28px',
              fontWeight: '600',
              marginTop: '16px',
              marginBottom: '8px',
            },
            h6: {
              fontSize: '16px',
              lineHeight: '24px',
              fontWeight: '600',
              marginTop: '16px',
              marginBottom: '8px',
            },

            p: {
              marginTop: '16px',
              marginBottom: '16px',
              lineHeight: '24px',
            },

            ul: {
              marginTop: '16px',
              marginBottom: '16px',
              paddingLeft: '24px',
              li: {
                marginTop: '8px',
                marginBottom: '8px',
              },
            },
            ol: {
              marginTop: '16px',
              marginBottom: '16px',
              paddingLeft: '24px',
              li: {
                marginTop: '8px',
                marginBottom: '8px',
              },
            },

            'font-thin': '100',
            'font-extralight': '200',
            'font-light': '300',
            'font-normal': '400',
            'font-medium': '500',
            'font-semibold': '600',
            'font-bold': '700',
            'font-extrabold': '800',
            'font-black': '900',
          },
        },

        sm: {
          css: {
            fontSize: '14px',
            lineHeight: '20px',
            h1: {
              fontSize: '36px',
              lineHeight: '40px',
            },
            h2: {
              fontSize: '30px',
              lineHeight: '36px',
            },
            h3: {
              fontSize: '24px',
              lineHeight: '32px',
            },
            h4: {
              fontSize: '20px',
              lineHeight: '28px',
            },
            h5: {
              fontSize: '16px',
              lineHeight: '24px',
            },
            h6: {
              fontSize: '14px',
              lineHeight: '20px',
            },
          },
        },
        lg: {
          css: {
            fontSize: '18px',
            lineHeight: '28px',
            h1: {
              fontSize: '60px',
              lineHeight: '72px',
            },
            h2: {
              fontSize: '48px',
              lineHeight: '56px',
            },
            h3: {
              fontSize: '36px',
              lineHeight: '44px',
            },
            h4: {
              fontSize: '30px',
              lineHeight: '36px',
            },
            h5: {
              fontSize: '24px',
              lineHeight: '32px',
            },
            h6: {
              fontSize: '20px',
              lineHeight: '28px',
            },
          },
        },
        xl: {
          css: {
            fontSize: '20px',
            lineHeight: '32px',
            h1: {
              fontSize: '72px',
              lineHeight: '84px',
            },
            h2: {
              fontSize: '60px',
              lineHeight: '72px',
            },
            h3: {
              fontSize: '48px',
              lineHeight: '56px',
            },
            h4: {
              fontSize: '36px',
              lineHeight: '44px',
            },
            h5: {
              fontSize: '30px',
              lineHeight: '36px',
            },
            h6: {
              fontSize: '24px',
              lineHeight: '32px',
            },
          },
        },
      },
    },
  },
};
