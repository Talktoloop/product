<template>
  <MoleculeAvatar :class="sizeClasses[size]" :src="user.avatarUrl || ''" :alt="user.name">
    <template #fallback>
      {{ initials }}
    </template>
  </MoleculeAvatar>
</template>

<script setup lang="ts">
defineOptions({
  name: 'EntityUserAvatar'
})

interface User {
  name: string
  avatarUrl?: string
}

interface Props {
  user: User
  size?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md'
})

const sizeClasses = {
  sm: 'h-8 w-8',
  md: 'h-10 w-10',
  lg: 'h-12 w-12'
}

const initials = computed(() => {
  return props.user.name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
})
</script>