<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const titleClasses = tw`
  mb-1 font-medium leading-none tracking-tight
  text-foreground
  dark:text-dark-foreground
`
</script>

<template>
  <h5 :class="cn(titleClasses, props.class)">
    <slot />
  </h5>
</template>
