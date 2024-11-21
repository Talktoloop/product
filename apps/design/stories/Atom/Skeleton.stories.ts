import AtomSkeleton from '@ourloop/product-layer-ui/components/Atom/Skeleton.vue'
import type { Meta, StoryObj } from '@storybook-vue/nuxt'

const meta = {
  title: 'Atom/Skeleton',
  component: AtomSkeleton,
  tags: ['autodocs'],
} satisfies Meta<typeof AtomSkeleton>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    class: 'h-4 w-[250px]',
  },
}

export const Circle: Story = {
  args: {
    class: 'h-12 w-12 rounded-full',
  },
}
