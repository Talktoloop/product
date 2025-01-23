<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const shortcutClasses = tw`
  ml-auto text-xs tracking-widest 
  opacity-60
  text-foreground
  dark:text-dark-foreground
`
</script>

<template>
  <span :class="cn(shortcutClasses, props.class)">
    <slot />
  </span>
</template>
