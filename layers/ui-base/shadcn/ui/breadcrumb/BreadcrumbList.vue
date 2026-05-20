<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const listClasses = tw`
  flex flex-wrap items-center
  gap-1.5 sm:gap-2.5
  break-words text-sm
  text-muted-foreground
  dark:text-dark-muted-foreground
`
</script>

<template>
  <ol :class="cn(listClasses, props.class)">
    <slot />
  </ol>
</template>
