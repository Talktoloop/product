import MoleculeAlert from '@ui/atomic/Molecule/Alert'
import type { Meta, StoryObj } from '@storybook-vue/nuxt'

const meta = {
  title: 'Atomic/Molecule/Alert',
  component: MoleculeAlert,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive'],
    },
  },
} satisfies Meta<typeof MoleculeAlert>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { MoleculeAlert },
    template: `
      <MoleculeAlert>
        <p>This is a default alert</p>
      </MoleculeAlert>
    `,
  }),
}

export const Destructive: Story = {
  render: () => ({
    components: { MoleculeAlert },
    template: `
      <MoleculeAlert variant="destructive">
        <p>This is a destructive alert</p>
      </MoleculeAlert>
    `,
  }),
}
