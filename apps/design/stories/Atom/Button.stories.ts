import AtomButton from '@ui/Atom/Button'
import type { Meta, StoryObj } from '@storybook-vue/nuxt'

const meta = {
  title: 'Atom/Button',
  component: AtomButton,
  tags: ['autodocs'],
  render: (args) => ({
    components: { AtomButton },
    setup() {
      const { default: slot, ...props } = args
      return { props, slot }
    },
    template: "<AtomButton v-bind='props'>{{ slot }}</AtomButton>",
  }),
  argTypes: {
    variant: control.buttonVariant,
    size: control.buttonSize,
  },
  args: {
    variant: defaultValue.buttonVariant,
    size: defaultValue.buttonSize,
  },
} satisfies Meta<typeof AtomButton>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    default: 'Click me',
    variant: 'default',
    size: 'default',
  },
}

export const Secondary: Story = {
  args: {
    default: 'Secondary',
    variant: 'secondary',
    size: 'default',
  },
}

export const Destructive: Story = {
  args: {
    default: 'Destructive',
    variant: 'destructive',
    size: 'default',
  },
}

export const Outline: Story = {
  args: {
    default: 'Outline',
    variant: 'outline',
    size: 'default',
  },
}

export const Ghost: Story = {
  args: {
    default: 'Ghost',
    variant: 'ghost',
    size: 'default',
  },
}

export const Link: Story = {
  args: {
    default: 'Link',
    variant: 'link',
    size: 'default',
  },
}

// Size variants
export const Small: Story = {
  args: {
    default: 'Small Button',
    size: 'sm',
  },
}

export const Large: Story = {
  args: {
    default: 'Large Button',
    size: 'lg',
  },
}

export const Icon: Story = {
  args: {
    default: 'Icon',
    size: 'icon',
  },
}
