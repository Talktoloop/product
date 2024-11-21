import type { Meta, StoryObj } from '@storybook/vue3'
import Carousel from '@ourloop/product-layer-ui/components/Molecule/Carousel.vue'

const meta = {
  title: 'Molecule/Carousel',
  component: Carousel,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
  },
} satisfies Meta<typeof Carousel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Carousel },
    template: `
      <Carousel>
        <div class="p-4">Slide 1</div>
        <div class="p-4">Slide 2</div>
        <div class="p-4">Slide 3</div>
      </Carousel>
    `,
  }),
}

export const Vertical: Story = {
  render: () => ({
    components: { Carousel },
    template: `
      <Carousel orientation="vertical">
        <div class="p-4">Slide 1</div>
        <div class="p-4">Slide 2</div>
        <div class="p-4">Slide 3</div>
      </Carousel>
    `,
  }),
}
