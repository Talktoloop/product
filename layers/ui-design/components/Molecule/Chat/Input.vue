<template>
  <div class="flex flex-col items-end">
    <AtomInput v-model="messageText" placeholder="Type your reply"
      class="flex-1 bg-transparent border-0 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-gray-500 h-[40px] px-4"
      @keyup.enter="handleSend" />
    <AtomButton variant="secondary" :disabled="!messageText" @click="handleSend">
      <SendHorizonal />
      Send
    </AtomButton>
  </div>
</template>

<script setup lang="ts">
import { SendHorizonal } from 'lucide-vue-next';
defineOptions({
  name: 'MoleculeChatInput'
})

const messageText = ref('')
const emit = defineEmits<{
  send: [message: string]
}>()

function handleSend() {
  if (!messageText.value) return
  emit('send', messageText.value)
  messageText.value = ''
}</script>