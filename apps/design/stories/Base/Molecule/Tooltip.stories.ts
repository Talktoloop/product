import MoleculeTooltip from '@ui/base/Molecule/Tooltip.vue'
import type { Meta, StoryObj } from '@storybook/vue3'

const meta = {
  title: 'Base/Molecule/Tooltip',
  component: MoleculeTooltip,
  tags: ['autodocs'],
  argTypes: {
    delayDuration: { control: 'number' },
    content: {
      control: 'text',
      description: 'Tooltip content',
    },
  },
  ...withSlots(MoleculeTooltip, 'default'),
} satisfies Meta<typeof MoleculeTooltip>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    default: '<button>Hover me</button>',
    content: 'Tooltip content',
  },
}

export const WithDelay: Story = {
  args: {
    delayDuration: 1500,
    default: '<button>Hover with delay</button>',
    content: 'Delayed tooltip content',
  },
}
