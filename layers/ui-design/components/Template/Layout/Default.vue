<template>
  <div class="min-h-screen bg-background">
    <OrganismHeader :user="user" @logout="$emit('logout')" />
    <main class="container mx-auto px-4 py-8">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'TemplateLayoutDefault'
})

interface User {
  name: string
  avatarUrl?: string
}

interface Props {
  user?: User
}

defineProps<Props>()
defineEmits<{
  'logout': []
}>()
</script>