import MoleculeMenuBar from '@ui/atomic/Molecule/Menu/Bar.vue'
import type { Meta, StoryObj } from '@storybook/vue3'

const meta = {
  title: 'Atomic/Molecule/Menu/Bar',
  component: MoleculeMenuBar,
  tags: ['autodocs'],
  argTypes: {
    menu: {
      control: 'text',
      description: 'Menu slot content',
    },
    default: {
      control: 'text',
      description: 'Default slot content',
    },
  },
} satisfies Meta<typeof MoleculeMenuBar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    menu: `
      <div>Menu Item 1</div>
      <div>Menu Item 2</div>
    `,
  },
}
