<template>
  <MoleculeChatMessageBase direction="left" :variant="message.status === 'story' ? 'primary-story' : 'primary'"
    :sequence-position="sequencePosition">
    <template #header>
      {{ message.sender }} • {{ formatTime(message.timestamp) }}
    </template>

    <template #actions>
      <AtomButton variant="ghost" size="sm" class="text-primary hover:text-primary hover:bg-primary/10"
        @click="$emit('pin', message, true)">
        <PinIcon class="w-4 h-4" :fill="message.pinned ? 'currentColor' : 'none'" />
        {{ message.pinned ? 'Pinned to Story' : 'Pin to Story' }}
      </AtomButton>
    </template>

    {{ message.text }}
  </MoleculeChatMessageBase>
</template>

<script setup lang="ts">
import type { ReceivedMessage, SequencePosition } from '@ui/design/types'
import { PinIcon } from 'lucide-vue-next'

defineNuxtComponent({
  name: 'MoleculeChatMessageReceived'
})

defineProps<{
  message: ReceivedMessage
  sequencePosition: SequencePosition
}>()

defineEmits<{
  pin: [ReceivedMessage, boolean]
}>()
</script>