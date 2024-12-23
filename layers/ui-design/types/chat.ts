type MessageStatus = 'sent' | 'failed' | 'story'

export type SequencePosition = 'first' | 'middle' | 'last' | 'standalone'

interface BaseMessage {
  timestamp: Date
  text: string
  status: MessageStatus
}

export interface ReceivedMessage extends BaseMessage {
  __type: 'ReceivedMessage'
  status: 'sent' | 'story'
  sender: string
  pinned?: boolean
}

export interface SentMessage extends BaseMessage {
  __type: 'SentMessage'
  status: 'sent' | 'failed'
  seenAt?: Date
}

export type ChatMessage = ReceivedMessage | SentMessage

export interface MessageDivider {
  __type: 'MessageDivider'
  label: string
}

export type Message = ChatMessage | MessageDivider
