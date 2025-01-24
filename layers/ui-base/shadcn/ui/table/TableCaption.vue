<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <caption :class="cn(tw`
    mt-4 text-sm 
    text-muted-foreground
    dark:text-dark-muted-foreground
  `, props.class)">
    <slot />
  </caption>
</template>
