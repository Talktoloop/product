import MoleculeAvatar from '@ui/Molecule/Avatar'
import type { Meta, StoryObj } from '@storybook-vue/nuxt'

const meta = {
  title: 'Molecule/Avatar',
  component: MoleculeAvatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'base', 'lg'],
    },
  },
} satisfies Meta<typeof MoleculeAvatar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { MoleculeAvatar },
    template: `
      <MoleculeAvatar size="base">
        <span>JD</span>
      </MoleculeAvatar>
    `,
  }),
}

export const Small: Story = {
  render: () => ({
    components: { MoleculeAvatar },
    template: `
      <MoleculeAvatar size="sm">
        <span>JD</span>
      </MoleculeAvatar>
    `,
  }),
}

export const Large: Story = {
  render: () => ({
    components: { MoleculeAvatar },
    template: `
      <MoleculeAvatar size="lg">
        <span>JD</span>
      </MoleculeAvatar>
    `,
  }),
}
