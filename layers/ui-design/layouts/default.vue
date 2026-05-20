<template>
  <TemplateLayoutDefault :user="user" @logout="handleLogout">
    <slot />
  </TemplateLayoutDefault>
</template>

<script setup lang="ts">
defineOptions({
  name: 'LayoutDefault'
})

interface User {
  name: string
  avatarUrl?: string
}

// Mock user data - this should come from auth state
const user = ref<User>({
  name: 'John Doe'
})

const handleLogout = () => {
  // Handle logout - this should be implemented in the shell layer
  console.log('Logout clicked')
}
</script>
