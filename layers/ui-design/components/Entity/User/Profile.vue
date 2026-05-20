<template>
  <div class="relative">
    <button type="button" class="flex items-center gap-2 p-2 rounded-md hover:bg-primary-foreground transition-colors"
      @click="isOpen = !isOpen">
      <div class="flex items-center gap-2">
        <div v-if="user.avatarUrl" class="w-8 h-8 rounded-full overflow-hidden bg-primary-foreground">
          <img :src="user.avatarUrl" :alt="user.name" class="w-full h-full object-cover">
        </div>
        <div v-else class="w-8 h-8 rounded-full bg-primary-foreground flex items-center justify-center">
          <span class="text-sm font-medium text-primary-contrast">{{ initials }}</span>
        </div>
        <span class="text-sm font-medium text-primary-contrast">{{ user.name }}</span>
      </div>
      <ChevronDown class="w-4 h-4 text-primary-contrast/80" :class="{ 'rotate-180': isOpen }" />
    </button>

    <div v-if="isOpen" class="absolute right-0 mt-2 w-48 rounded-md bg-surface shadow-lg ring-1 ring-surface-muted">
      <div class="py-1">
        <NuxtLink to="/settings"
          class="flex items-center gap-2 px-4 py-2 text-sm text-foreground hover:bg-surface-muted transition-colors">
          <Settings class="w-4 h-4" />
          Settings
        </NuxtLink>
        <button type="button"
          class="flex w-full items-center gap-2 px-4 py-2 text-sm text-destructive hover:bg-surface-muted transition-colors"
          @click="$emit('logout')">
          <LogOut class="w-4 h-4" />
          Log out
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { ChevronDown, Settings, LogOut } from 'lucide-vue-next'

defineOptions({
  name: 'EntityUserProfile'
})

interface User {
  name: string
  avatarUrl?: string
}

interface Props {
  user: User
}

const props = defineProps<Props>()
defineEmits<{
  'logout': []
}>()

const isOpen = ref(false)

const initials = computed(() => {
  return props.user.name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
})
</script>