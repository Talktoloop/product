import OrganismChartLine from '@ui/atomic/Organism/Chart/Line.vue'
import type { Meta, StoryObj } from '@storybook/vue3'

const meta = {
  title: 'Atomic/Organism/Chart/Line',
  component: OrganismChartLine as Record<keyof typeof OrganismChartLine, unknown>,
  tags: ['autodocs'],
  argTypes: {
    data: control.xyData,
  },
  args: {
    index: 'x',
    categories: ['y'],
  },
} satisfies Meta<typeof OrganismChartLine>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    data: defaultValue.xyData!,
  },
}
