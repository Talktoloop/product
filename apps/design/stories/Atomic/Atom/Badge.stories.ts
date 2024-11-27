import AtomBadge from '@ui/atomic/Atom/Badge'
import type { Meta, StoryObj } from '@storybook-vue/nuxt'

const meta = {
  title: 'Atomic/Atom/Badge',
  component: AtomBadge,
  tags: ['autodocs'],
  argTypes: {
    variant: omit(control.buttonVariant, ['ghost', 'link']),
  },
  args: {
    variant: exclude(defaultValue.buttonVariant, ['ghost', 'link']),
  },
  render(args: object) {
    const { default: slot, ...props } = args as { default: string }
    return {
      components: { AtomBadge },
      template: /* html */ ` <AtomBadge ${propList(props)}>${slot}</AtomBadge> `,
    }
  },
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
