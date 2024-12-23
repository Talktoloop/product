<template>
  <div class="flex items-center">
    <AtomInput v-model="messageText" placeholder="Type your reply"
      class="flex-1 bg-transparent border-0 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-gray-500 h-[40px] px-4"
      @keyup.enter="handleSend" />
    <AtomButton variant="ghost" size="sm" class="text-primary hover:text-primary/90 hover:bg-transparent h-[40px] px-4"
      :disabled="!messageText" @click="handleSend">
      Send
    </AtomButton>
  </div>
</template>

<script setup lang="ts">
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