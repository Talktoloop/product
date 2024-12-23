import type { Meta, StoryObj } from '@storybook/vue3'
import MoleculeChatMessage from '@ui/design/Molecule/Chat/Message.vue'

const meta = {
  title: 'Design/Molecule/Chat/Message',
  component: MoleculeChatMessage,
  tags: ['autodocs'],
  argTypes: {
    message: {
      control: 'object',
    },
    sequencePosition: {
      control: 'select',
      options: ['first', 'middle', 'last', 'standalone'],
    },
  },
  ...withDecorators(wrapContainer({ class: 'bg-surface' })),
} satisfies Meta<typeof MoleculeChatMessage>

export default meta
type Story = StoryObj<typeof meta>

// Received Messages
export const ReceivedStandalone: Story = {
  args: {
    message: {
      __type: 'ReceivedMessage',
      status: 'sent',
      text: 'Hello, how are you?',
      sender: 'John Doe',
      timestamp: getTimestamp(1, '10:00 AM'),
    },
    sequencePosition: 'standalone',
  },
}

export const ReceivedFirst: Story = {
  args: {
    message: {
      __type: 'ReceivedMessage',
      status: 'sent',
      text: 'This is the first message in a sequence',
      sender: 'John Doe',
      timestamp: getTimestamp(1, '10:00 AM'),
    },
    sequencePosition: 'first',
  },
}

export const ReceivedMiddle: Story = {
  args: {
    message: {
      __type: 'ReceivedMessage',
      status: 'sent',
      text: 'This is a middle message in a sequence',
      sender: 'John Doe',
      timestamp: getTimestamp(1, '10:00 AM'),
    },
    sequencePosition: 'middle',
  },
}

export const ReceivedLast: Story = {
  args: {
    message: {
      __type: 'ReceivedMessage',
      status: 'sent',
      text: 'This is the last message in a sequence',
      sender: 'John Doe',
      timestamp: getTimestamp(1, '10:00 AM'),
    },
    sequencePosition: 'last',
  },
}

export const ReceivedPinned: Story = {
  args: {
    message: {
      __type: 'ReceivedMessage',
      status: 'story',
      text: 'This message has been pinned to the story',
      sender: 'John Doe',
      timestamp: getTimestamp(1, '10:00 AM'),
      pinned: true,
    },
    sequencePosition: 'standalone',
  },
}

// Sent Messages
export const SentStandalone: Story = {
  args: {
    message: {
      __type: 'SentMessage',
      status: 'sent',
      text: "I'm doing great, thanks!",
      timestamp: getTimestamp(1, '10:00 AM'),
    },
    sequencePosition: 'standalone',
  },
}

export const SentFirst: Story = {
  args: {
    message: {
      __type: 'SentMessage',
      status: 'sent',
      text: 'This is the first message in a sequence',
      timestamp: getTimestamp(1, '10:00 AM'),
    },
    sequencePosition: 'first',
  },
}

export const SentMiddle: Story = {
  args: {
    message: {
      __type: 'SentMessage',
      status: 'sent',
      text: 'This is a middle message in a sequence',
      timestamp: getTimestamp(1, '10:00 AM'),
    },
    sequencePosition: 'middle',
  },
}

export const SentLast: Story = {
  args: {
    message: {
      __type: 'SentMessage',
      status: 'sent',
      text: 'This is the last message in a sequence',
      timestamp: getTimestamp(1, '10:00 AM'),
      seenAt: getTimestamp(1, '10:01 AM'),
    },
    sequencePosition: 'last',
  },
}

export const SentFailed: Story = {
  args: {
    message: {
      __type: 'SentMessage',
      status: 'failed',
      text: 'This message failed to send',
      timestamp: getTimestamp(1, '10:00 AM'),
    },
    sequencePosition: 'standalone',
  },
}
