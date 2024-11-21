import type { Meta, StoryObj } from '@storybook/vue3'
import Drawer from '@ourloop/product-layer-ui/components/Molecule/Drawer.vue'

const meta = {
  title: 'Molecule/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  argTypes: {
    side: {
      control: 'select',
      options: ['left', 'right', 'top', 'bottom'],
    },
  },
} satisfies Meta<typeof Drawer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Drawer },
    template: `
      <Drawer>
        <template #trigger>
          <button>Open Drawer</button>
        </template>
        <template #content>
          <div class="p-4">
            <h2 class="text-lg font-bold">Drawer Content</h2>
            <p>This is the drawer content</p>
          </div>
        </template>
      </Drawer>
    `,
  }),
}

export const RightSide: Story = {
  render: () => ({
    components: { Drawer },
    template: `
      <Drawer side="right">
        <template #trigger>
          <button>Open Right Drawer</button>
        </template>
        <template #content>
          <div class="p-4">
            <h2 class="text-lg font-bold">Right Drawer</h2>
            <p>This drawer opens from the right</p>
          </div>
        </template>
      </Drawer>
    `,
  }),
}
