import AtomLabel from '@ui/atomic/Atom/Label'
import type { Meta, StoryObj } from '@storybook-vue/nuxt'

const meta = {
  title: 'Atomic/Atom/Label',
  component: AtomLabel,
  tags: ['autodocs'],
  ...withSlots(AtomLabel, 'default'),
} satisfies Meta<typeof AtomLabel>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    default: 'Label Text',
    for: 'input-id',
  },
}
