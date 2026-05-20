<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const descriptionClasses = tw`
  text-sm [&_p]:leading-relaxed
  text-muted-foreground
  dark:text-dark-muted-foreground
`
</script>

<template>
  <div :class="cn(descriptionClasses, props.class)">
    <slot />
  </div>
</template>
