import OrganismAccordion from '@ui/atomic/Organism/Accordion.vue'
import type { Meta, StoryObj } from '@storybook/vue3'

const meta = {
  title: 'Atomic/Organism/Accordion',
  component: OrganismAccordion,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['single', 'multiple'],
    },
    collapsible: { control: 'boolean' },
    defaultValue: { control: 'text' },
    className: { control: 'text' },
    default: {
      control: 'text',
      description: 'Default slot content',
    },
  },
} satisfies Meta<typeof OrganismAccordion>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    type: 'single',
    collapsible: true,
    default: `
      <div class="border-b">
        <h3>Section 1</h3>
        <p>Content for section 1</p>
      </div>
      <div class="border-b">
        <h3>Section 2</h3>
        <p>Content for section 2</p>
      </div>
    `,
  },
}

export const Multiple: Story = {
  args: {
    type: 'multiple',
    default: `
      <div class="border-b">
        <h3>Section 1</h3>
        <p>Content for section 1</p>
      </div>
      <div class="border-b">
        <h3>Section 2</h3>
        <p>Content for section 2</p>
      </div>
      <div class="border-b">
        <h3>Section 3</h3>
        <p>Content for section 3</p>
      </div>
    `,
  },
}
