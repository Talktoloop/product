<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const cardClasses = tw`
  rounded-lg border
  bg-surface text-surface-foreground
  shadow-sm
  dark:bg-dark-surface
  dark:text-dark-surface-foreground
  dark:border-dark-border
`
</script>

<template>
  <div :class="cn(cardClasses, props.class)">
    <slot />
  </div>
</template>
