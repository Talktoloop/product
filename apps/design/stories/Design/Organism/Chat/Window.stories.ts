import type { Meta, StoryObj } from '@storybook/vue3'
import OrganismChatWindow from '@ui/design/Organism/Chat/Window.vue'

const meta = {
  title: 'Design/Organism/Chat/Window',
  component: OrganismChatWindow,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    avatar: { control: 'text' },
    messages: { control: 'object' },
  },
  ...withSlots(OrganismChatWindow, 'header-actions'),
  ...withDecorators(wrapContainer({ class: tw`h-[600px] max-w-xl` })),
} satisfies Meta<typeof OrganismChatWindow>

export default meta
type Story = StoryObj<typeof meta>

const messages = [
  {
    __type: 'ReceivedMessage',
    text: 'Hello! How can I help you today?',
    timestamp: getTimestamp(1, '10:00 AM'),
    status: 'sent',
    sender: 'Loop',
    seenAt: getTimestamp(1, '10:01 AM'),
    pinned: true,
  },
  {
    __type: 'SentMessage',
    text: "I am in Luapula, and I'm 38 years old",
    timestamp: getTimestamp(1, '10:01 AM'),
    status: 'sent',
    seenAt: getTimestamp(1, '10:02 AM'),
  },
  {
    __type: 'ReceivedMessage',
    text: 'We will direct your case to one of our managers.',
    timestamp: getTimestamp(0, '12:34 AM'),
    status: 'sent',
    sender: 'Loop',
    seenAt: getTimestamp(0, '12:35 AM'),
  },
  {
    __type: 'ReceivedMessage',
    text: 'talk to you soon!',
    timestamp: getTimestamp(0, '12:34 AM'),
    status: 'sent',
    sender: 'Loop',
    seenAt: getTimestamp(0, '12:35 AM'),
  },
]

const messagesWithStory = [
  {
    __type: 'ReceivedMessage',
    text: 'ok',
    timestamp: getTimestamp(0, '12:34 AM'),
    status: 'story',
    sender: 'John Doe',
    seenAt: getTimestamp(0, '12:35 AM'),
    pinned: true,
  },
  {
    __type: 'SentMessage',
    text: 'ok',
    timestamp: getTimestamp(0, '12:34 AM'),
    status: 'sent',
    seenAt: getTimestamp(0, '12:35 AM'),
  },
  {
    __type: 'ReceivedMessage',
    text: 'ok',
    timestamp: getTimestamp(1, '12:34 AM'),
    status: 'sent',
    sender: 'John Doe',
    seenAt: getTimestamp(1, '12:35 AM'),
  },
]

export const Default: Story = {
  args: {
    title: 'Chat Support',
    subtitle: 'We typically reply in a few minutes',
    messages,
  },
}

export const WithStory: Story = {
  args: {
    'title': 'John Doe',
    'subtitle': 'Active now',
    'avatar': 'https://github.com/shadcn.png',
    'messages': messagesWithStory,
    'header-actions':
      '<AtomButton variant="ghost" size="icon"><i class="i-lucide-more-vertical" /></AtomButton>',
  },
}
