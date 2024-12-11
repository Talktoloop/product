import type { Meta, StoryObj } from '@storybook/vue3'
import OrganismChartArea from '@ui/atomic/Organism/Chart/Area.vue'

const meta = {
  title: 'Atomic/Organism/Chart/Area',
  component: OrganismChartArea as Record<keyof typeof OrganismChartArea, unknown>,
  tags: ['autodocs'],
  argTypes: {
    data: control.labeledData,
  },
  args: {
    index: 'index',
    categories: ['value'],
  },
} satisfies Meta<typeof OrganismChartArea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    data: defaultValue.labeledData!,
  },
}
