import { cva, type VariantProps } from 'class-variance-authority'

export { default as Avatar } from './Avatar.vue'
export { default as AvatarFallback } from './AvatarFallback.vue'
export { default as AvatarImage } from './AvatarImage.vue'

export const avatarVariant = cva(
  tw`
    inline-flex items-center justify-center
    font-normal select-none shrink-0
    overflow-hidden
    bg-secondary text-foreground
    dark:bg-dark-secondary dark:text-dark-foreground
  `,
  {
    variants: {
      size: {
        sm: tw`h-10 w-10 text-xs`,
        base: tw`h-16 w-16 text-2xl`,
        lg: tw`h-32 w-32 text-5xl`,
      },
      shape: {
        circle: tw`rounded-full`,
        square: tw`rounded-md`,
      },
    },
  }
)

export type AvatarVariants = VariantProps<typeof avatarVariant>
