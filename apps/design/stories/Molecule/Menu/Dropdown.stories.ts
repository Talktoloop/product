import MoleculeMenuDropdown from '@ui/Molecule/Menu/Dropdown'
import type { Meta, StoryObj } from '@storybook-vue/nuxt'

const meta = {
  title: 'Molecule/Menu/Dropdown',
  component: MoleculeMenuDropdown,
  tags: ['autodocs'],
} satisfies Meta<typeof MoleculeMenuDropdown>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { MoleculeMenuDropdown },
    template: `
      <MoleculeMenuDropdown>
        <template #trigger>
          <button>Open Menu</button>
        </template>
        <template #content>
          <div class="p-2">
            <div class="py-1">Item 1</div>
            <div class="py-1">Item 2</div>
            <div class="py-1">Item 3</div>
          </div>
        </template>
      </MoleculeMenuDropdown>
    `,
  }),
}
