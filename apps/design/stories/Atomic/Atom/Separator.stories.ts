import AtomSeparator from '@ui/atomic/Atom/Separator'
import type { Meta, StoryObj } from '@storybook-vue/nuxt'

const meta = {
  title: 'Atomic/Atom/Separator',
  component: AtomSeparator,
  tags: ['autodocs'],
  ...withDecorators(wrapContainer({ class: tw`w-full h-px bg-surface-background` })),
} satisfies Meta<typeof AtomSeparator>

export default meta

type Story = StoryObj<typeof meta>

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
    decorative: true,
    asChild: false,
  },
}

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
    decorative: true,
    asChild: false,
  },
}
