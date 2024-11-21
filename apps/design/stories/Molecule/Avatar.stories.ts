import type { Meta, StoryObj } from '@storybook/vue3'
import Avatar from '@ourloop/product-layer-ui/components/Molecule/Avatar.vue'

const meta = {
  title: 'Molecule/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'base', 'lg'],
    },
  },
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Avatar },
    template: `
      <Avatar size="base">
        <span>JD</span>
      </Avatar>
    `,
  }),
}

export const Small: Story = {
  render: () => ({
    components: { Avatar },
    template: `
      <Avatar size="sm">
        <span>JD</span>
      </Avatar>
    `,
  }),
}

export const Large: Story = {
  render: () => ({
    components: { Avatar },
    template: `
      <Avatar size="lg">
        <span>JD</span>
      </Avatar>
    `,
  }),
}
