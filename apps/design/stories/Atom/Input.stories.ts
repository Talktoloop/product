import AtomInput from '@ui/Atom/Input'
import type { Meta, StoryObj } from '@storybook-vue/nuxt'

const meta = {
  title: 'Atom/Input',
  component: AtomInput,
  tags: ['autodocs'],
} satisfies Meta<typeof AtomInput>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    defaultValue: '',
  },
}

export const WithDefaultValue: Story = {
  args: {
    defaultValue: 'Default text',
  },
}
