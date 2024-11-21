import type { Meta, StoryObj } from '@storybook/vue3'
import DropdownMenu from '@ourloop/product-layer-ui/components/Molecule/DropdownMenu.vue'

const meta = {
  title: 'Molecule/DropdownMenu',
  component: DropdownMenu,
  tags: ['autodocs'],
} satisfies Meta<typeof DropdownMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { DropdownMenu },
    template: `
      <DropdownMenu>
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
      </DropdownMenu>
    `,
  }),
}
