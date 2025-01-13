import type { Meta, StoryObj } from '@storybook/vue3'
import Counter from '@ui/base/Atom/Counter.vue'

const meta = {
  title: 'Base/Atom/Counter',
  component: Counter,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    shade: {
      control: 'select',
      options: ['light', 'medium', 'dark'],
    },
    disabled: {
      control: 'boolean',
    },
    checked: {
      control: 'boolean',
    },
    count: {
      control: 'number',
    },
  },
} satisfies Meta<typeof Counter>

export default meta
type Story = StoryObj<typeof meta>

// Secondary variant stories
export const Default: Story = {
  args: {
    count: 5,
    variant: 'secondary',
    shade: 'medium',
  },
}

export const Light: Story = {
  args: {
    count: 5,
    variant: 'secondary',
    shade: 'light',
  },
}

export const Dark: Story = {
  args: {
    count: 5,
    variant: 'secondary',
    shade: 'dark',
  },
}

// Primary variant stories
export const Primary: Story = {
  args: {
    count: 5,
    variant: 'primary',
    shade: 'medium',
  },
}

export const PrimaryLight: Story = {
  args: {
    count: 5,
    variant: 'primary',
    shade: 'light',
  },
}

export const PrimaryDark: Story = {
  args: {
    count: 5,
    variant: 'primary',
    shade: 'dark',
  },
}

// State stories
export const Checked: Story = {
  args: {
    checked: true,
    variant: 'primary',
    shade: 'medium',
  },
}

export const Disabled: Story = {
  args: {
    count: 5,
    disabled: true,
  },
}

export const DisabledChecked: Story = {
  args: {
    checked: true,
    disabled: true,
  },
}

// Edge cases
export const LargeNumber: Story = {
  args: {
    count: 99,
    variant: 'primary',
    shade: 'medium',
  },
}

export const Zero: Story = {
  args: {
    count: 0,
    variant: 'primary',
    shade: 'medium',
  },
}
