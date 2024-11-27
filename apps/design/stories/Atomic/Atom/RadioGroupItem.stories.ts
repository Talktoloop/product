import AtomRadioGroupItem from '@ui/atomic/Atom/RadioGroupItem'
import type { Meta, StoryObj } from '@storybook-vue/nuxt'

const meta = {
  title: 'Atomic/Atom/RadioGroupItem',
  component: AtomRadioGroupItem,
  tags: ['autodocs'],
} satisfies Meta<typeof AtomRadioGroupItem>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: 'option1',
    id: 'option1',
    name: 'radio-group',
  },
}

export const Disabled: Story = {
  args: {
    value: 'option2',
    id: 'option2',
    name: 'radio-group',
    disabled: true,
  },
}

export const Required: Story = {
  args: {
    value: 'option3',
    id: 'option3',
    name: 'radio-group',
    required: true,
  },
}
