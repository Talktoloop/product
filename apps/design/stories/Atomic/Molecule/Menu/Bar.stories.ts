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
      menuItemMenu({
        label: 'File',
        menu: [
          menuItemMenuItem({
            label: 'New',
          }),
          menuItemMenuItem({
            label: 'Open',
          }),
          menuItemSeparator(),
          menuItemSubMenu({
            label: 'Recent',
            menu: [
              menuItemMenuItem({
                label: 'File 1',
              }),
            ],
          }),
        ],
      }),
      menuItemMenu({
        label: 'Edit',
        menu: [
          menuItemMenuItem({
            label: 'Cut',
            shortcut: '⌘X',
          }),
          menuItemMenuItem({
            label: 'Copy',
            shortcut: '⌘C',
          }),
          menuItemMenuItem({
            label: 'Paste',
            shortcut: '⌘V',
          }),
        ],
      }),
    ],
  },
}
