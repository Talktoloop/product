import MoleculeSelect from '@ui/atomic/Molecule/Select.vue'
import type { Meta, StoryObj } from '@storybook/vue3'

const meta = {
  title: 'Atomic/Molecule/Select',
  component: MoleculeSelect,
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
  },
  ...withSlots(MoleculeSelect, 'default'),
  ...withDecorators(trackModel(), withEmits('update:open')),
} satisfies Meta<typeof MoleculeSelect>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Select an option',
    items: [
      { label: 'Option 1', value: 'option-1' },
      { label: 'Option 2', value: 'option-2' },
      { label: 'Option 3', value: 'option-3' },
    ],
  },
}

export const WithGroups: Story = {
  args: {
    placeholder: 'Select an option',
    groups: [
      { label: 'Group 1', items: [{ label: 'Option 1', value: 'option-1' }] },
      { label: 'Group 2', items: [{ label: 'Option 2', value: 'option-2' }] },
    ],
  },
}

export const WithItemsAndGroups: Story = {
  args: {
    placeholder: 'Select an option',
    items: [{ label: 'Option 1', value: 'option-1' }],
    groups: [{ label: 'Group 1', items: [{ label: 'Option 2', value: 'option-2' }] }],
  },
}
