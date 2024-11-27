import MoleculeDrawer from '@ui/Molecule/Drawer.vue'
import type { Meta, StoryObj } from '@storybook-vue/nuxt'

const meta = {
  title: 'Molecule/Drawer',
  component: MoleculeDrawer,
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: 'select',
      options: ['left', 'right', 'top', 'bottom'],
    },
  },
} satisfies Meta<typeof MoleculeDrawer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    direction: 'bottom',
    default: 'Simple Drawer',
  },
}

export const RightSide: Story = {
  render: () => ({
    components: { MoleculeDrawer },
    template: `
      <MoleculeDrawer direction="right">
        <template #trigger>
          <button>Open Right Drawer</button>
        </template>
        <template #content>
          <div class="p-4">
            <h2 class="text-lg font-bold">Right Drawer</h2>
            <p>This drawer opens from the right</p>
          </div>
        </template>
      </MoleculeDrawer>
    `,
  }),
}
