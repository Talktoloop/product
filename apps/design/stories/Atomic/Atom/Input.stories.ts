import AtomInput from '@ui/atomic/Atom/Input'
import type { Meta, StoryObj } from '@storybook-vue/nuxt'

const meta = {
  title: 'Atomic/Atom/Input',
  component: AtomInput,
  tags: ['autodocs'],
} satisfies Meta<typeof AtomInput>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    defaultValue: '',
    // Placeholder is a fallthough attribute, unfortunately storybook cannot detect these..
    placeholder: 'Placeholder text',
  } as Story['args'], // ... so we assure TS that the type is correct
}

export const WithDefaultValue: Story = {
  args: {
    defaultValue: 'Default text',
  },
}
