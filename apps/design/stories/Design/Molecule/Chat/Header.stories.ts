import type { Meta, StoryObj } from '@storybook/vue3'
import MoleculeChatHeader from '@ui/design/Molecule/Chat/Header.vue'

const meta = {
  title: 'Design/Molecule/Chat/Header',
  component: MoleculeChatHeader,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    avatar: { control: 'text' },
  },
  ...withSlots(MoleculeChatHeader, 'actions'),
} satisfies Meta<typeof MoleculeChatHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Chat with Support',
  },
}

export const WithSubtitle: Story = {
  args: {
    title: 'Team Chat',
    subtitle: '3 members online',
  },
}

export const WithAvatar: Story = {
  args: {
    title: 'John Doe',
    subtitle: 'Active now',
    avatar: 'https://github.com/shadcn.png',
  },
}

export const WithActions: Story = {
  args: {
    title: 'Project Discussion',
    subtitle: '4 participants',
    actions:
      '<AtomButton variant="ghost" size="icon"><i class="i-lucide-more-vertical" /></AtomButton>',
  },
}
