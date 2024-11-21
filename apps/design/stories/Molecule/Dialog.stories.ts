import type { Meta, StoryObj } from '@storybook/vue3'
import Dialog from '@ourloop/product-layer-ui/components/Molecule/Dialog.vue'

const meta = {
  title: 'Molecule/Dialog',
  component: Dialog,
  tags: ['autodocs'],
} satisfies Meta<typeof Dialog>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Dialog },
    template: `
      <Dialog>
        <template #trigger>
          <button>Open Dialog</button>
        </template>
        <template #content>
          <div class="p-4">
            <h2 class="text-lg font-bold">Dialog Title</h2>
            <p>Dialog content goes here</p>
          </div>
        </template>
      </Dialog>
    `,
  }),
}
