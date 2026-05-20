<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div class="relative w-full overflow-auto">
    <table :class="cn(tw`
      w-full caption-bottom text-sm
      text-foreground
      dark:text-dark-foreground
    `, props.class)">
      <slot />
    </table>
  </div>
</template>
