import MoleculeTooltip from '@ui/atomic/Molecule/Tooltip.vue'
import type { Meta, StoryObj } from '@storybook/vue3'

const meta = {
  title: 'Atomic/Molecule/Tooltip',
  component: MoleculeTooltip,
  tags: ['autodocs'],
  argTypes: {
    delayDuration: { control: 'number' },
    skipDelayDuration: { control: 'number' },
    trigger: {
      control: 'text',
      description: 'Trigger slot content',
    },
    content: {
      control: 'text',
      description: 'Content slot content',
    },
  },
} satisfies Meta<typeof MoleculeTooltip>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    trigger: '<button>Hover me</button>',
    content: 'Tooltip content',
  },
}

export const WithDelay: Story = {
  args: {
    delayDuration: 500,
    trigger: '<button>Hover with delay</button>',
    content: 'Delayed tooltip content',
  },
}
