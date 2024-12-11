import MoleculeSelect from '@ui/atomic/Molecule/Select.vue'
import type { Meta, StoryObj } from '@storybook/vue3'

const meta = {
  title: 'Atomic/Molecule/Select',
  component: MoleculeSelect,
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: 'text' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    trigger: {
      control: 'text',
      description: 'Trigger slot content',
    },
    content: {
      control: 'text',
      description: 'Content slot content',
    },
    group: {
      control: 'text',
      description: 'Group slot content',
    },
  },
} satisfies Meta<typeof MoleculeSelect>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Select an option',
    content: `
      <div>Option 1</div>
      <div>Option 2</div>
      <div>Option 3</div>
    `,
  },
}

export const WithGroups: Story = {
  args: {
    placeholder: 'Select an option',
    group: `
      <div>Group 1</div>
      <div>Group 2</div>
    `,
    content: `
      <div>Option 1</div>
      <div>Option 2</div>
    `,
  },
}
