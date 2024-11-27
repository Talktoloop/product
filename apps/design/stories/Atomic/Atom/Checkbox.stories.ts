import AtomCheckbox from '@ui/atomic/Atom/Checkbox'
import type { Meta, StoryObj } from '@storybook-vue/nuxt'

const meta = {
  title: 'Atomic/Atom/Checkbox',
  component: AtomCheckbox,
  tags: ['autodocs'],
  argTypes: {
    defaultChecked: control.falseTrue,
  },
  args: {
    defaultChecked: defaultValue.falseTrue,
  },
} satisfies Meta<typeof AtomCheckbox>

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
