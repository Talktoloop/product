import AtomProgress from '@ui/base/Atom/Progress'
import type { Meta, StoryObj } from '@storybook-vue/nuxt'

const meta = {
  title: 'Base/Atom/Progress',
  component: AtomProgress,
  tags: ['autodocs'],
} satisfies Meta<typeof AtomProgress>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    modelValue: 50,
    max: 100,
  },
}

export const Complete: Story = {
  args: {
    modelValue: 100,
    max: 100,
  },
}
