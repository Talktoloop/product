import type { Meta, StoryObj } from '@storybook/vue3'
import Card from '@ourloop/product-layer-ui/components/Molecule/Card.vue'

const meta = {
  title: 'Molecule/Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Card },
    template: `
      <Card>
        <div class="p-4">Card Content</div>
      </Card>
    `,
  }),
}

export const WithHeaderAndFooter: Story = {
  render: () => ({
    components: { Card },
    template: `
      <Card>
        <template #header>
          <div class="p-4">Card Header</div>
        </template>
        <div class="p-4">Card Content</div>
        <template #footer>
          <div class="p-4">Card Footer</div>
        </template>
      </Card>
    `,
  }),
}
