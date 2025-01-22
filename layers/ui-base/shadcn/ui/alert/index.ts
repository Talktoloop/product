import { cva, type VariantProps } from 'class-variance-authority'

export { default as Alert } from './Alert.vue'
export { default as AlertDescription } from './AlertDescription.vue'
export { default as AlertTitle } from './AlertTitle.vue'

export const alertVariants = cva(
  tw`
    relative w-full rounded-lg border p-4
    [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px]
    [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground
    dark:[&>svg]:text-dark-foreground
  `,
  {
    variants: {
      variant: {
        default: tw`
          bg-background text-foreground
          dark:bg-dark-background dark:text-dark-foreground
        `,
        destructive: tw`
          border-destructive/50 text-destructive
          dark:border-dark-destructive/50 dark:text-dark-destructive
          [&>svg]:text-destructive
          dark:[&>svg]:text-dark-destructive
        `,
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export type AlertVariants = VariantProps<typeof alertVariants>
