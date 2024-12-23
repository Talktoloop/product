import OrganismCarousel from '@ui/base/Organism/Carousel.vue'
import type { Meta, StoryObj } from '@storybook/vue3'

const meta = {
  title: 'Base/Organism/Carousel',
  component: OrganismCarousel,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
  },
  ...withSlots(OrganismCarousel, 'slide-1', 'slide-2'),
  ...withDecorators(wrapContainer({ class: tw`max-w-[50%] mx-auto` })),
} satisfies Meta<typeof OrganismCarousel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    items: [
      {
        value: 'slide-1',
        content: 'Slide 1',
      },
      {
        value: 'slide-2',
        content: 'Slide 2',
      },
    ],
  },
}

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
    items: [
      {
        value: 'slide-1',
        content: 'Slide 1',
      },
      {
        value: 'slide-2',
        content: 'Slide 2',
      },
    ],
  },
}

export const WithSlots: Story = {
  args: {
    'items': [
      {
        value: 'slide-1',
      },
      {
        value: 'slide-2',
      },
    ],
    'slide-1':
      '<img src="https://picsum.photos/200/300" alt="Slide 1" class="aspect-square object-cover" />',
    'slide-2':
      '<img src="https://picsum.photos/200/300" alt="Slide 2" class="aspect-square object-cover" />',
  },
}
