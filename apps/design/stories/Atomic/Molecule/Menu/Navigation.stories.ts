import MoleculeMenuNavigation from '@ui/atomic/Molecule/Menu/Navigation.vue'
import type { Meta, StoryObj } from '@storybook/vue3'

const meta = {
  title: 'Atomic/Molecule/Menu/Navigation',
  component: MoleculeMenuNavigation,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    list: {
      control: 'text',
      description: 'List slot content',
    },
    content: {
      control: 'text',
      description: 'Content slot content',
    },
  },
} satisfies Meta<typeof MoleculeMenuNavigation>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    list: `
      <div>Navigation Item 1</div>
      <div>Navigation Item 2</div>
    `,
    content: `
      <div>Content 1</div>
      <div>Content 2</div>
    `,
  },
}
