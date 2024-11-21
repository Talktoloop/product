import type { Meta, StoryObj } from '@storybook/vue3'
import Calendar from '@ourloop/product-layer-ui/components/Molecule/Calendar.vue'
import { parseDate } from '@internationalized/date'

const meta = {
  title: 'Molecule/Calendar',
  component: Calendar,
  tags: ['autodocs'],
} satisfies Meta<typeof Calendar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Calendar },
    setup() {
      const modelValue = parseDate('2024-03-15')
      return { modelValue }
    },
    template: `
      <Calendar :modelValue="modelValue" />
    `,
  }),
}

export const WithDefaultValue: Story = {
  render: () => ({
    components: { Calendar },
    setup() {
      const defaultValue = parseDate('2024-03-15')
      return { defaultValue }
    },
    template: `
      <Calendar :defaultValue="defaultValue" />
    `,
  }),
}
