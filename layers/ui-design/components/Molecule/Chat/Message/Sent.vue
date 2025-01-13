<template>
  <MoleculeChatMessageBase direction="right" :variant="message.status === 'failed' ? 'destructive' : 'muted'"
    :sequence-position="sequencePosition">
    <template #header>
      {{ formatTime(message.timestamp) }}
    </template>

    <template #footer>
      <span v-if="message.seenAt" class="text-xs text-muted-foreground">
        Seen {{ formatTime(message.seenAt) }}
      </span>
    </template>

    {{ message.text }}

    <template v-if="message.status === 'failed'" #error>
      Message failed to send
    </template>
  </MoleculeChatMessageBase>
</template>

<script setup lang="ts">
import type { SentMessage, SequencePosition } from '@ui/design/types'

defineNuxtComponent({
  name: 'MoleculeChatMessageSent'
})

defineProps<{
  message: SentMessage
  sequencePosition: SequencePosition
}>()
</script>