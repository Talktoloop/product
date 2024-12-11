import OrganismTabs from '@ui/atomic/Organism/Tabs.vue'
import type { Meta, StoryObj } from '@storybook/vue3'

const meta = {
  title: 'Atomic/Organism/Tabs',
  component: OrganismTabs,
  tags: ['autodocs'],
  argTypes: {
    defaultValue: { control: 'text' },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
  },
  ...withSlots(OrganismTabs, 'tab-1-trigger', 'tab-1-content', 'tab-2-trigger', 'tab-2-content'),
} satisfies Meta<typeof OrganismTabs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    items: [
      {
        label: 'Tab 1',
        value: 'tab-1',
        content: 'Content 1',
      },
      {
        label: 'Tab 2',
        value: 'tab-2',
        content: 'Content 2',
      },
    ],
  },
}

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
    items: [
      {
        label: 'Tab 1',
        value: 'tab-1',
        content: 'Content 1',
      },
      {
        label: 'Tab 2',
        value: 'tab-2',
        content: 'Content 2',
      },
    ],
  },
}

export const WithContentSlots: Story = {
  args: {
    'items': [
      {
        label: 'Tab 1',
        value: 'tab-1',
      },
      {
        label: 'Tab 2',
        value: 'tab-2',
      },
    ],
    'tab-1-content': 'Content 1',
    'tab-2-content': 'Content 2',
  },
}

export const WithTriggerSlot: Story = {
  args: {
    'items': [
      {
        value: 'tab-1',
        content: 'Content 1',
      },
      {
        value: 'tab-2',
        content: 'Content 2',
      },
    ],
    'tab-1-trigger': 'Tab 1',
    'tab-2-trigger': 'Tab 2',
  },
}
