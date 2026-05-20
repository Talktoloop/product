import type { TypedObject } from '@ourloop/product-core-types'

type MessageStatus = 'sent' | 'failed' | 'story'

export type SequencePosition = 'first' | 'middle' | 'last' | 'standalone'

interface BaseMessage {
  timestamp: Date
  text: string
  status: MessageStatus
}

export interface ReceivedMessage extends BaseMessage, TypedObject {
  __type: 'ReceivedMessage'
  status: 'sent' | 'story'
  sender: string
  pinned?: boolean
}

export interface SentMessage extends BaseMessage, TypedObject {
  __type: 'SentMessage'
  status: 'sent' | 'failed'
  seenAt?: Date
}

export type ChatMessage = ReceivedMessage | SentMessage

export interface MessageDivider extends TypedObject {
  __type: 'MessageDivider'
  label: string
}

export type Message = ChatMessage | MessageDivider
