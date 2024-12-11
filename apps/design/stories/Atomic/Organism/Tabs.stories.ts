import OrganismTabs from '@ui/atomic/Organism/Tabs.vue'
import type { Meta, StoryObj } from '@storybook/vue3'

const meta = {
  title: 'Atomic/Organism/Tabs',
  component: OrganismTabs,
  tags: ['autodocs'],
  argTypes: {
    defaultValue: { control: 'text' },
    value: { control: 'text' },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    className: { control: 'text' },
    list: {
      control: 'text',
      description: 'List slot content',
    },
    content: {
      control: 'text',
      description: 'Content slot content',
    },
  },
} satisfies Meta<typeof OrganismTabs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    list: `
      <div>Tab 1</div>
      <div>Tab 2</div>
    `,
    content: `
      <div>Content 1</div>
      <div>Content 2</div>
    `,
  },
}

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
    list: `
      <div>Tab 1</div>
      <div>Tab 2</div>
    `,
    content: `
      <div>Content 1</div>
      <div>Content 2</div>
    `,
  },
}
