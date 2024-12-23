import OrganismAccordion from '@ui/base/Organism/Accordion.vue'
import type { Meta, StoryObj } from '@storybook/vue3'

const meta = {
  title: 'Base/Organism/Accordion',
  component: OrganismAccordion,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['single', 'multiple'],
    },
    collapsible: { control: 'boolean' },
    defaultValue: { control: 'text' },
  },
  ...withSlots(
    OrganismAccordion,
    'section-1-trigger',
    'section-1-content',
    'section-2-trigger',
    'section-2-content'
  ),
} satisfies Meta<typeof OrganismAccordion>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    type: 'single',
    collapsible: true,
    items: [
      {
        value: 'section-1',
        trigger: 'Section 1',
        content: 'Content for section 1',
      },
      {
        value: 'section-2',
        trigger: 'Section 2',
        content: 'Content for section 2',
      },
    ],
  },
}

export const multiple: Story = {
  args: {
    type: 'multiple',
    items: [
      {
        value: 'section-1',
        trigger: 'Section 1',
        content: 'Content for section 1',
      },
      {
        value: 'section-2',
        trigger: 'Section 2',
        content: 'Content for section 2',
      },
    ],
  },
}

export const WithSlots: Story = {
  args: {
    'type': 'single',
    'items': [
      {
        value: 'section-1',
      },
      {
        value: 'section-2',
      },
    ],
    'section-1-trigger': 'Section 1',
    'section-1-content': 'Content for section 1',
    'section-2-trigger': 'Section 2',
    'section-2-content': 'Content for section 2',
  },
}
