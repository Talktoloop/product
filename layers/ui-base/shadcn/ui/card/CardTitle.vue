<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const titleClasses = tw`
  text-2xl font-semibold
  leading-none tracking-tight
  text-foreground
  dark:text-dark-foreground
`
</script>

<template>
  <h3 :class="cn(titleClasses, props.class)">
    <slot />
  </h3>
</template>
