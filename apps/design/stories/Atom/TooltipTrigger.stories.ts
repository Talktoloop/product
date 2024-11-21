import AtomTooltipTrigger from '@ourloop/product-layer-ui/components/Atom/TooltipTrigger.vue'
import type { Meta, StoryObj } from '@storybook-vue/nuxt'

const meta = {
  title: 'Atom/TooltipTrigger',
  component: AtomTooltipTrigger,
  tags: ['autodocs'],
  render: (args) => ({
    components: { AtomTooltipTrigger },
    setup() {
      const { default: slot, ...props } = args
      return { props, slot }
    },
    template: "<AtomTooltipTrigger v-bind='props'>{{ slot }}</AtomTooltipTrigger>",
  }),
} satisfies Meta<typeof AtomTooltipTrigger>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    default: 'Hover me',
  },
}
