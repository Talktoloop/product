import OrganismCalendar from '@ui/base/Organism/Calendar.vue'
import type { Meta, StoryObj } from '@storybook/vue3'

const meta = {
  title: 'Base/Organism/Calendar',
  component: OrganismCalendar,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['single', 'range'],
    },
  },
} satisfies Meta<typeof OrganismCalendar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const Range: Story = {
  args: {
    type: 'range',
  },
}
