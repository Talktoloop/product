<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <td :class="cn(tw`
      p-4 align-middle 
      [&:has([role=checkbox])]:pr-0
      text-foreground
      dark:text-dark-foreground
    `, props.class)">
    <slot />
  </td>
</template>
