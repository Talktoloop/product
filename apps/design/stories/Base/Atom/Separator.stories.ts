import AtomSeparator from '@ui/base/Atom/Separator'
import type { Meta, StoryObj } from '@storybook-vue/nuxt'

const meta = {
  title: 'Base/Atom/Separator',
  component: AtomSeparator,
  tags: ['autodocs'],
  ...withDecorators(wrapContainer({ class: tw`w-full bg-surface-background p-8 justify-center` })),
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

export const WithLabel: Story = {
  args: {
    label: 'Separator',
  },
}
