import type { Meta, StoryObj } from '@storybook/vue3'
import MoleculeCard from '@ui/base/Molecule/Card.vue'

const meta = {
  title: 'Base/Molecule/Card',
  component: MoleculeCard,
  tags: ['autodocs'],
  argTypes: {
    class: { control: 'text' },
    header: { control: 'text' },
    title: { control: 'text' },
    description: { control: 'text' },
    footer: { control: 'text' },
  },
  ...withSlots(MoleculeCard, 'default'),
} satisfies Meta<typeof MoleculeCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Card Title',
    description: 'Card Description',
    default: 'Card Content',
    footer: 'Card Footer',
  },
}
