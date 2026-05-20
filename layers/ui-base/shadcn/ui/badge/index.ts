import { cva, type VariantProps } from 'class-variance-authority'

export { default as Badge } from './Badge.vue'

export const badgeVariants = cva(
  tw`
    inline-flex items-center
    rounded-full border
    px-2.5 py-0.5
    text-xs font-semibold
    transition-colors
    focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
    dark:focus:ring-offset-background
  `,
  {
    variants: {
      variant: {
        default: tw`
          border-transparent
          bg-primary text-primary-foreground hover:bg-primary/80
          dark:bg-dark-primary dark:text-dark-primary-foreground dark:hover:bg-dark-primary/80
        `,
        secondary: tw`
          border-transparent
          bg-secondary text-secondary-foreground hover:bg-secondary/80
          dark:bg-dark-secondary dark:text-dark-secondary-foreground dark:hover:bg-dark-secondary/80
        `,
        destructive: tw`
          border-transparent
          bg-destructive text-destructive-foreground hover:bg-destructive/80
          dark:bg-dark-destructive dark:text-dark-destructive-foreground dark:hover:bg-dark-destructive/80
        `,
        outline: tw`
          text-foreground
          dark:text-dark-foreground dark:border-dark-border
        `,
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export type BadgeVariants = VariantProps<typeof badgeVariants>
