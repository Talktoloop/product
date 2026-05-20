<template>
  <nav class="flex items-center gap-4">
    <NuxtLink v-for="item in items" :key="item.label" :to="item.to"
      class="px-3 py-2 text-sm font-medium text-primary-contrast/80 hover:text-primary-contrast transition-colors"
      active-class="text-primary-contrast">
      {{ item.label }}
    </NuxtLink>
  </nav>
</template>

<script setup lang="ts">
defineOptions({
  name: 'MoleculeNavigation'
})

interface NavigationItem {
  label: string
  to: string
}

const items: NavigationItem[] = [
  { label: 'Dashboard', to: '/dashboard' },
  { label: 'Stories', to: '/moderator/story' },
  { label: 'Settings', to: '/settings' }
]
</script>