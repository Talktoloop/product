import type { Meta, StoryObj } from '@storybook/vue3'
import OrganismChartBar from '@ui/atomic/Organism/Chart/Bar.vue'

const meta = {
  title: 'Atomic/Organism/Chart/Bar',
  component: OrganismChartBar as Record<keyof typeof OrganismChartBar, unknown>,
  tags: ['autodocs'],
  argTypes: {
    data: control.labeledData,
  },
  args: {
    index: 'index',
    categories: ['value'],
  },
} satisfies Meta<typeof OrganismChartBar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    data: defaultValue.labeledData!,
  },
}
