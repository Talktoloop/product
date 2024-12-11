import OrganismCarousel from '@ui/atomic/Organism/Carousel.vue'
import type { Meta, StoryObj } from '@storybook/vue3'

const meta = {
  title: 'Atomic/Organism/Carousel',
  component: OrganismCarousel,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    loop: { control: 'boolean' },
    className: { control: 'text' },
    current: { control: 'number' },
    previous: {
      control: 'text',
      description: 'Previous button slot',
    },
    next: {
      control: 'text',
      description: 'Next button slot',
    },
    items: {
      control: 'text',
      description: 'Items slot content',
    },
  },
} satisfies Meta<typeof OrganismCarousel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    items: `
      <div>Slide 1</div>
      <div>Slide 2</div>
      <div>Slide 3</div>
    `,
    previous: '<button>Previous</button>',
    next: '<button>Next</button>',
  },
}

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
    items: `
      <div>Slide 1</div>
      <div>Slide 2</div>
      <div>Slide 3</div>
    `,
  },
}
