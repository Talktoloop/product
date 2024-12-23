import AtomSwitch from '@ui/base/Atom/Switch'
import type { Meta, StoryObj } from '@storybook-vue/nuxt'

const meta = {
  title: 'Base/Atom/Switch',
  component: AtomSwitch,
  tags: ['autodocs'],
} satisfies Meta<typeof AtomSwitch>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    defaultChecked: false,
  },
}

export const Checked: Story = {
  args: {
    checked: true,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}
