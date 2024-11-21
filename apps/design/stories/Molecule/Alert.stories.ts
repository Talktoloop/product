import type { Meta, StoryObj } from '@storybook/vue3'
import Alert from '@ourloop/product-layer-ui/components/Molecule/Alert.vue'

const meta = {
  title: 'Molecule/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive'],
    },
  },
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Alert },
    template: `
      <Alert>
        <p>This is a default alert</p>
      </Alert>
    `,
  }),
}

export const Destructive: Story = {
  render: () => ({
    components: { Alert },
    template: `
      <Alert variant="destructive">
        <p>This is a destructive alert</p>
      </Alert>
    `,
  }),
}
