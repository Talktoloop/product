import OrganismTabs from '@ui/base/Organism/Tabs.vue'
import type { Meta, StoryObj } from '@storybook/vue3'

const meta = {
  title: 'Base/Organism/Tabs',
  component: OrganismTabs,
  tags: ['autodocs'],
  argTypes: {
    defaultValue: { control: 'text' },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    variant: {
      control: 'select',
      options: ['default', 'primary'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium'],
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

export const Primary: Story = {
  args: {
    variant: 'primary',
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

export const Small: Story = {
  args: {
    size: 'small',
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

export const WithSteppers: Story = {
  args: {
    items: [
      {
        label: 'Step 1',
        value: 'step-1',
        stepper: true,
        content: 'Step 1 Content',
      },
      {
        label: 'Step 2',
        value: 'step-2',
        stepper: 2,
        content: 'Step 2 Content',
      },
      {
        label: 'Step 3',
        value: 'step-3',
        stepper: 3,
        content: 'Step 3 Content',
      },
    ],
  },
}

export const WithTags: Story = {
  args: {
    items: [
      {
        label: 'Features',
        value: 'features',
        tag: 'New',
        content: 'Features Content',
      },
      {
        label: 'Settings',
        value: 'settings',
        tag: 'Updated',
        content: 'Settings Content',
      },
    ],
  },
}

export const WithCounters: Story = {
  args: {
    items: [
      {
        label: 'Messages',
        value: 'messages',
        counter: 5,
        content: 'Messages Content',
      },
      {
        label: 'Notifications',
        value: 'notifications',
        counter: 2,
        content: 'Notifications Content',
      },
    ],
  },
}

export const WithArrayContent: Story = {
  args: {
    items: [
      {
        label: 'Tab 1',
        value: 'tab-1',
        content: ['Line 1 of content', 'Line 2 of content', 'Line 3 of content'],
      },
      {
        label: 'Tab 2',
        value: 'tab-2',
        content: ['Another line 1', 'Another line 2'],
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
    'tab-1-content': 'Custom Content 1',
    'tab-2-content': 'Custom Content 2',
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
    'tab-1-trigger': 'Custom Trigger 1',
    'tab-2-trigger': 'Custom Trigger 2',
  },
}
