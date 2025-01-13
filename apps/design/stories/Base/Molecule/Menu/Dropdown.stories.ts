import MoleculeMenuDropdown from '@ui/base/Molecule/Menu/Dropdown.vue'
import type { Meta, StoryObj } from '@storybook-vue/nuxt'

const meta = {
  title: 'Base/Molecule/Menu/Dropdown',
  component: MoleculeMenuDropdown,
  tags: ['autodocs'],
  ...withSlots(MoleculeMenuDropdown, 'trigger'),
} satisfies Meta<typeof MoleculeMenuDropdown>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    trigger: 'Open Menu',
    menu: [
      menuItemMenu({
        label: 'Profile',
        shortcut: '⇧⌘P',
        menu: [
          menuItemMenuItem({
            label: 'Profile',
            shortcut: '⇧⌘P',
          }),
        ],
      }),
    ],
  },
}
