import AtomButton from "@ourloop/product-layer-ui/components/Atom/Button.vue"
import type { Meta, StoryObj } from "@storybook-vue/nuxt"

const meta = {
  title: "Atom/Button",
  component: AtomButton,
  tags: ["autodocs"],
  render: (args) => ({
    components: { AtomButton },
    setup() {
      const { default: slot, ...props } = args
      console.log({slot, props})
      return { props, slot }
    },
    template: "<AtomButton v-bind='props'>{{ slot }}</AtomButton>",
  }),
} satisfies Meta<typeof AtomButton>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    default: "Click me",
  },
}
