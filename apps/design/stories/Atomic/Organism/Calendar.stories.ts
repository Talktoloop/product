import OrganismCalendar from '@ui/atomic/Organism/Calendar.vue'
import type { Meta, StoryObj } from '@storybook/vue3'

const meta = {
  title: 'Atomic/Organism/Calendar',
  component: OrganismCalendar,
  tags: ['autodocs'],
  argTypes: {
    mode: {
      control: 'select',
      options: ['single', 'multiple', 'range'],
    },
    selected: { control: 'date' },
    month: { control: 'date' },
    disabled: { control: 'boolean' },
    fromDate: { control: 'date' },
    toDate: { control: 'date' },
    default: {
      control: 'text',
      description: 'Default slot content',
    },
  },
} satisfies Meta<typeof OrganismCalendar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    mode: 'single',
    selected: new Date(),
  },
}

export const Range: Story = {
  args: {
    mode: 'range',
    fromDate: new Date(2024, 0, 1),
    toDate: new Date(2024, 11, 31),
  },
}
