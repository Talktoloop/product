<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <tfoot :class="cn(tw`
    bg-primary/5 
    dark:bg-dark-primary/5
    font-medium 
    text-primary-foreground
    dark:text-dark-primary-foreground
  `, props.class)">
    <slot />
  </tfoot>
</template>
