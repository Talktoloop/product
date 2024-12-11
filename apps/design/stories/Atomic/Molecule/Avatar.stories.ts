import type { Meta, StoryObj } from '@storybook/vue3'
import MoleculeAvatar from '@ui/atomic/Molecule/Avatar.vue'
import { avatar } from '~/utils/images'

const meta = {
  title: 'Atomic/Molecule/Avatar',
  component: MoleculeAvatar,
  tags: ['autodocs'],
  argTypes: {
    size: control.avatarSize,
    src: { control: 'text' },
    alt: { control: 'text' },
    fallback: { control: 'text' },
  },
  args: {
    size: defaultValue.avatarSize,
    src: avatar.placeholder,
  },
} satisfies Meta<typeof MoleculeAvatar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    src: avatar.placeholder,
    fallback: 'JD',
  },
}

export const Small: Story = {
  args: {
    src: avatar.john,
    size: 'sm',
    fallback: 'JD',
  },
}

export const Large: Story = {
  args: {
    src: avatar.jane,
    size: 'lg',
    fallback: 'JD',
  },
}
