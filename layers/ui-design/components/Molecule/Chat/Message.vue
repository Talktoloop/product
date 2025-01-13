<template>
  <VariantAssembly :value="message" :variants="variants">
    <template #ReceivedMessage="{ variant: { value: msg } }">
      <MoleculeChatMessageReceived :message="msg" :sequence-position="sequencePosition"
        @pin="(message: Message, pinned: boolean) => $emit('pin', message, pinned)" />
    </template>
    <template #SentMessage="{ variant: { value: msg } }">
      <MoleculeChatMessageSent :message="msg" :sequence-position="sequencePosition" />
    </template>
    <template #MessageDivider="{ variant: { value: msg } }">
      <AtomSeparator :label="msg.label" />
    </template>
  </VariantAssembly>
</template>

<script setup lang="ts">
import type { Message, MessageDivider, ReceivedMessage, SentMessage, SequencePosition } from '@ui/design/types'

defineNuxtComponent({
  name: 'MoleculeChatMessage'
})

withDefaults(defineProps<{
  message: Message
  sequencePosition?: SequencePosition
}>(), {
  sequencePosition: 'standalone'
})

defineEmits<{
  pin: [Message, boolean]
}>()

function isReceivedMessage(msg: unknown): msg is ReceivedMessage {
  return isTypeOf(msg, 'ReceivedMessage')
}

function isSentMessage(msg: unknown): msg is SentMessage {
  return isTypeOf(msg, 'SentMessage')
}

function isMessageDivider(msg: unknown): msg is MessageDivider {
  return isTypeOf(msg, 'MessageDivider')
}

const variants = {
  ReceivedMessage: isReceivedMessage,
  SentMessage: isSentMessage,
  MessageDivider: isMessageDivider
} as const

</script>
