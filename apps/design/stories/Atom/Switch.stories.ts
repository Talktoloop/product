import AtomSwitch from '@ourloop/product-layer-ui/components/Atom/Switch.vue'
import type { Meta, StoryObj } from '@storybook-vue/nuxt'

const meta = {
  title: 'Atom/Switch',
  component: AtomSwitch,
  tags: ['autodocs'],
  render: (args) => ({
    components: { AtomSwitch },
    setup() {
      const { default: slot, ...props } = args
      return { props, slot }
    },
    template: "<AtomSwitch v-bind='props' />",
  }),
} satisfies Meta<typeof AtomSwitch>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    defaultChecked: false,
  },
}

export const Checked: Story = {
  args: {
    checked: true,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}
