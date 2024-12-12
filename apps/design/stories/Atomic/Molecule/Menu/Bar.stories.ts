import MoleculeMenuBar from '@ui/atomic/Molecule/Menu/Bar.vue'
import type { Meta, StoryObj } from '@storybook/vue3'

const meta = {
  title: 'Atomic/Molecule/Menu/Bar',
  component: MoleculeMenuBar,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof MoleculeMenuBar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    menu: [
      {
        __type: 'MenuItemMenu',
        id: 'file',
        label: 'File',
        menu: [
          {
            __type: 'MenuItemMenuItem',
            id: 'file-new',
            label: 'New',
          },
          {
            __type: 'MenuItemMenuItem',
            id: 'file-open',
            label: 'Open',
          },
        ],
      },
      {
        __type: 'MenuItemMenu',
        id: 'edit',
        label: 'Edit',
        menu: [],
      },
    ],
  },
}
