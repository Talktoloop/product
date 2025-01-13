<template>
  <div class="flex items-center justify-between py-2 px-4">
    <div class="flex items-center gap-3">
      <AtomAvatar v-if="avatar" :src="avatar" :fallback="title.charAt(0)" class="h-9 w-9" />
      <div class="flex flex-col">
        <h2 class="text-base font-semibold leading-tight">{{ title }}</h2>
        <p v-if="subtitle" class="text-xs text-gray-500 leading-tight">
          {{ subtitle }}
        </p>
      </div>
    </div>
    <slot name="actions" />
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'MoleculeChatHeader'
})

defineProps<{
  title: string
  subtitle?: string
  avatar?: string
}>()
</script>