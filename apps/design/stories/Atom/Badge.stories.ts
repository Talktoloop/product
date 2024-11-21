import AtomBadge from '@ourloop/product-layer-ui/components/Atom/Badge.vue'
import type { Meta, StoryObj } from '@storybook-vue/nuxt'

const meta = {
  title: 'Atom/Badge',
  component: AtomBadge,
  tags: ['autodocs'],
  render: (args) => ({
    components: { AtomBadge },
    setup() {
      const { default: slot, ...props } = args
      return { props, slot }
    },
    template: "<AtomBadge v-bind='props'>{{ slot }}</AtomBadge>",
  }),
} satisfies Meta<typeof AtomBadge>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    default: 'Badge',
  },
}

export const Secondary: Story = {
  args: {
    default: 'Secondary',
    variant: 'secondary',
  },
}

export const Destructive: Story = {
  args: {
    default: 'Destructive',
    variant: 'destructive',
  },
}

export const Outline: Story = {
  args: {
    default: 'Outline',
    variant: 'outline',
  },
}
