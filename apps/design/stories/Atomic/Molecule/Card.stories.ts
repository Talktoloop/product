import type { Meta, StoryObj } from '@storybook/vue3'
import MoleculeCard from '@ui/atomic/Molecule/Card.vue'

const meta = {
  title: 'Atomic/Molecule/Card',
  component: MoleculeCard,
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text' },
    header: { control: 'text' },
    title: { control: 'text' },
    description: { control: 'text' },
    content: { control: 'text' },
    footer: { control: 'text' },
  },
} satisfies Meta<typeof MoleculeCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Card Title',
    description: 'Card Description',
    content: 'Card Content',
    footer: 'Card Footer',
  },
}
