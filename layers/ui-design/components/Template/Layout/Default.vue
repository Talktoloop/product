<template>
  <div class="min-h-screen bg-gray-50">
    <OrganismHeader />
    <main class="container mx-auto px-4 py-8">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
// The OrganismHeader component will be auto-imported by Nuxt
</script>