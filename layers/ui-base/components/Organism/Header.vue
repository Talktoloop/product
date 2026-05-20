<template>
  <header class="w-full bg-background border-b">
    <div class="container mx-auto px-4 h-16 flex items-center justify-between">
      <div class="flex items-center gap-8">
        <slot name="logo" />
        <slot name="navigation" />
      </div>
      <slot name="profile" />
    </div>
  </header>
</template>

<script setup lang="ts">
defineOptions({
  name: 'OrganismHeader'
})
</script>