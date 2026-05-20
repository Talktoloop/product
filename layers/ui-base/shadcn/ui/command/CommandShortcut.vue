<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const shortcutClasses = tw`
  ml-auto 
  text-xs tracking-widest 
  text-muted-foreground
  dark:text-dark-muted-foreground
`
</script>

<template>
  <span :class="cn(shortcutClasses, props.class)">
    <slot />
  </span>
</template>
