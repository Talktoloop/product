<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <tr :class="cn(tw`
    border-b 
    border-border
    dark:border-dark-border
    transition-colors 
    hover:bg-muted/50
    dark:hover:bg-dark-muted/50
    data-[state=selected]:bg-muted
    dark:data-[state=selected]:bg-dark-muted
  `, props.class)">
    <slot />
  </tr>
</template>
