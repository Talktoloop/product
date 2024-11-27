import OrganismCarousel from '@ui/atomic/Organism/Carousel'
import type { Meta, StoryObj } from '@storybook-vue/nuxt'

const meta = {
  title: 'Atomic/Organism/Carousel',
  component: OrganismCarousel,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
  },
} satisfies Meta<typeof OrganismCarousel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { OrganismCarousel },
    template: `
      <OrganismCarousel>
        <div class="p-4">Slide 1</div>
        <div class="p-4">Slide 2</div>
        <div class="p-4">Slide 3</div>
      </OrganismCarousel>
    `,
  }),
}

export const Vertical: Story = {
  render: () => ({
    components: { OrganismCarousel },
    template: `
      <OrganismCarousel orientation="vertical">
        <div class="p-4">Slide 1</div>
        <div class="p-4">Slide 2</div>
        <div class="p-4">Slide 3</div>
      </OrganismCarousel>
    `,
  }),
}
