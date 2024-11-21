import AtomLabel from '@ourloop/product-layer-ui/components/Atom/Label.vue'
import type { Meta, StoryObj } from '@storybook-vue/nuxt'

const meta = {
  title: 'Atom/Label',
  component: AtomLabel,
  tags: ['autodocs'],
  render: (args) => ({
    components: { AtomLabel },
    setup() {
      const { default: slot, ...props } = args
      return { props, slot }
    },
    template: "<AtomLabel v-bind='props'>{{ slot }}</AtomLabel>",
  }),
} satisfies Meta<typeof AtomLabel>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    default: 'Label Text',
    for: 'input-id',
  },
}
