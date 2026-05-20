import { cva, type VariantProps } from 'class-variance-authority'

export { default as Button } from './Button.vue'

export const buttonVariants = cva(
  tw`
    inline-flex items-center justify-center gap-2
    whitespace-nowrap rounded-md text-sm font-medium
    ring-offset-background transition-colors
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
    disabled:pointer-events-none disabled:opacity-50
    [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0
  `,
  {
    variants: {
      variant: {
        default: tw`
          bg-button-primary text-button-primary-foreground
          hover:bg-button-primary-hover active:bg-button-primary-active
          disabled:bg-button-primary-disabled
          dark:bg-dark-button-primary dark:text-dark-button-primary-foreground
          dark:hover:bg-dark-button-primary-hover dark:active:bg-dark-button-primary-active
          dark:disabled:bg-dark-button-primary-disabled
        `,
        destructive: tw`
          bg-button-destructive text-button-destructive-foreground
          hover:bg-button-destructive-hover active:bg-button-destructive-active
          disabled:bg-button-destructive-disabled
          dark:bg-dark-button-destructive dark:text-dark-button-destructive-foreground
          dark:hover:bg-dark-button-destructive-hover dark:active:bg-dark-button-destructive-active
          dark:disabled:bg-dark-button-destructive-disabled
        `,
        outline: tw`
          border border-input bg-background
          hover:bg-button-ghost-hover hover:text-button-ghost-foreground
          active:bg-button-ghost-active
          dark:border-dark-input dark:bg-dark-background
          dark:hover:bg-dark-button-ghost-hover dark:hover:text-dark-button-ghost-foreground
          dark:active:bg-dark-button-ghost-active
        `,
        secondary: tw`
          bg-button-secondary text-button-secondary-foreground
          hover:bg-button-secondary-hover active:bg-button-secondary-active
          disabled:bg-button-secondary-disabled
          dark:bg-dark-button-secondary dark:text-dark-button-secondary-foreground
          dark:hover:bg-dark-button-secondary-hover dark:active:bg-dark-button-secondary-active
          dark:disabled:bg-dark-button-secondary-disabled
        `,
        ghost: tw`
          bg-button-ghost text-button-ghost-foreground
          hover:bg-button-ghost-hover active:bg-button-ghost-active
          disabled:bg-button-ghost-disabled
          dark:bg-dark-button-ghost dark:text-dark-button-ghost-foreground
          dark:hover:bg-dark-button-ghost-hover dark:active:bg-dark-button-ghost-active
          dark:disabled:bg-dark-button-ghost-disabled
        `,
        link: tw`
          text-button-primary underline-offset-4 hover:underline
          dark:text-dark-button-primary dark:hover:underline
        `,
      },
      size: {
        default: tw`h-9 px-4 py-2`,
        sm: tw`h-8 rounded-md px-3 text-xs`,
        lg: tw`h-10 rounded-md px-8`,
        icon: tw`h-9 w-9`,
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export type ButtonVariants = VariantProps<typeof buttonVariants>
