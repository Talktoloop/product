import type { Meta, StoryObj } from '@storybook/vue3'
import AtomAspectRatio from '@ui/atomic/Atom/AspectRatio'

const meta = {
  title: 'Atomic/Atom/AspectRatio',
  component: AtomAspectRatio,
  tags: ['autodocs'],
  argTypes: {
    ratio: {
      control: { type: 'select' },
      options: ['1', '16:9', '4:3', '3:4', '1:2', '2:1'],
      mapping: {
        '1': 1,
        '16:9': 16 / 9,
        '4:3': 4 / 3,
        '3:4': 3 / 4,
        '1:2': 1 / 2,
        '2:1': 2 / 1,
      },
    },
  },
  args: {
    class: 'bg-muted text-muted-foreground text-center flex items-center justify-center',
  },
  ...withSlots(AtomAspectRatio, 'default'),
} satisfies Meta<typeof AtomAspectRatio>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    ratio: 16 / 9,
    default: '16:9',
  },
}

export const Square: Story = {
  args: {
    ratio: 1,
    default: '1:1',
  },
}
