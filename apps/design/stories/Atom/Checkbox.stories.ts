import AtomCheckbox from '@ourloop/product-layer-ui/components/Atom/Checkbox.vue'
import type { Meta, StoryObj } from '@storybook-vue/nuxt'

const meta = {
  title: 'Atom/Checkbox',
  component: AtomCheckbox,
  tags: ['autodocs'],
  render: (args) => ({
    components: { AtomCheckbox },
    setup() {
      const { default: slot, ...props } = args
      return { props, slot }
    },
    template: "<AtomCheckbox v-bind='props'>{{ slot }}</AtomCheckbox>",
  }),
} satisfies Meta<typeof AtomCheckbox>

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
