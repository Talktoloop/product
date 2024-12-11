import MoleculeToast from '@ui/atomic/Molecule/Toast.vue'
import type { Meta, StoryObj } from '@storybook/vue3'

const meta = {
  title: 'Atomic/Molecule/Toast',
  component: MoleculeToast,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive'],
    },
    duration: { control: 'number' },
    altText: { control: 'text' },
    title: {
      control: 'text',
      description: 'Title slot content',
    },
    description: {
      control: 'text',
      description: 'Description slot content',
    },
    action: {
      control: 'text',
      description: 'Action slot content',
    },
  },
} satisfies Meta<typeof MoleculeToast>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Toast Title',
    description: 'Toast description message',
    action: '<button>Action</button>',
    altText: 'Toast action',
  },
}

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    title: 'Error',
    description: 'Something went wrong',
    action: '<button>Try Again</button>',
    altText: 'Try again',
  },
}
