import type { Meta, StoryObj } from '@storybook/vue3'
import MoleculeAlert from '@ui/atomic/Molecule/Alert.vue'

const meta = {
  title: 'Atomic/Molecule/Alert',
  component: MoleculeAlert,
  tags: ['autodocs'],
  argTypes: {
    variant: control.alertVariant,
    title: { control: 'text' },
    description: { control: 'text' },
    default: { control: 'text' },
  },
  args: {
    variant: defaultValue.alertVariant,
  },
  ...withSlots(MoleculeAlert, 'default'),
} satisfies Meta<typeof MoleculeAlert>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Alert Title',
    description: 'This is a default alert',
    default: '<p>Additional content can go here</p>',
  },
}

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    title: 'Error',
    description: 'Something went wrong',
    default: '<p>Please try again later</p>',
  },
}
