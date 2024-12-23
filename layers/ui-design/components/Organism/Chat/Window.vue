<template>
  <div class="flex flex-col h-full bg-white">
    <div class="border-b border-gray-200">
      <MoleculeChatHeader :title="title" :subtitle="subtitle" :avatar="avatar">
        <template #actions>
          <slot name="header-actions" />
        </template>
      </MoleculeChatHeader>
      <OrganismTabs v-model="activeTab" :items="[
        { value: 'conversation', label: 'Messenger conversation' },
        { value: 'story', label: 'Story preview' }
      ]" />
    </div>

    <div class="flex-1 overflow-y-auto">
      <div class="flex flex-col gap-0.5 p-3">
        <template v-for="item in messageList" :key="item.key">
          <MoleculeChatMessage v-bind="item" @pin="isMessageItem(item) ? $emit('pin', item.message) : () => { }" />
        </template>
      </div>
    </div>

    <div class="border-t border-gray-200">
      <MoleculeChatInput @send="$emit('send', $event)" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TypedObject } from '@core/types/src';
import type { ChatMessage, MessageDivider, SequencePosition } from '@ui/design/types'

defineOptions({
  name: 'OrganismChatWindow'
})

const props = defineProps<{
  title: string
  subtitle?: string
  avatar?: string
  messages: ChatMessage[]
}>()

const activeTab = ref('conversation')

interface MessageItem extends TypedObject {
  __type: 'MessageItem'
  key: string
  message: ChatMessage
  position: SequencePosition
}

interface DividerItem extends TypedObject {
  __type: 'DividerItem'
  message: MessageDivider
}

type MessageListItem = MessageItem | DividerItem

function isMessageItem(item: MessageListItem): item is MessageItem {
  return item.__type === 'MessageItem'
}

const messageList = computed<MessageListItem[]>(() => {
  const items: MessageListItem[] = []
  let lastMessage: ChatMessage | null = null
  let lastDate: string | null = null

  // Filter messages based on activeTab
  const filteredMessages = props.messages.filter(message =>
    activeTab.value === 'conversation' ||
    (activeTab.value === 'story' && message.__type === 'ReceivedMessage' && message.pinned)
  )

  // Sort messages by timestamp
  const sortedMessages = [...filteredMessages].sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime())

  sortedMessages.forEach((message, index) => {
    const currentDate = formatDate(message.timestamp)

    // Add date divider if date changes
    if (currentDate !== lastDate) {
      items.push({
        __type: 'DividerItem',
        message: {
          __type: 'MessageDivider',
          label: currentDate
        }
      })
      lastDate = currentDate
      lastMessage = null
    }

    // Add message
    const position = (() => {
      if (!lastMessage || lastMessage.__type !== message.__type) {
        const nextMessage = sortedMessages[index + 1]
        if (!nextMessage || nextMessage.__type !== message.__type ||
          formatDate(nextMessage.timestamp) !== currentDate) {
          return 'standalone'
        }
        return 'first'
      }
      const nextMessage = sortedMessages[index + 1]
      if (!nextMessage || nextMessage.__type !== message.__type ||
        formatDate(nextMessage.timestamp) !== currentDate) {
        return 'last'
      }
      return 'middle'
    })()

    items.push({
      __type: 'MessageItem',
      key: `message-${message.timestamp.toISOString()}`,
      message,
      position
    })
    lastMessage = message
  })

  return items
})

defineEmits<{
  pin: [message: ChatMessage]
  send: [message: string]
}>()
</script>