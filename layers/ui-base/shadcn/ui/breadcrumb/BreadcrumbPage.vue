<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const pageClasses = tw`
  font-normal
  text-foreground
  dark:text-dark-foreground
`
</script>

<template>
  <span role="link" aria-disabled="true" aria-current="page" :class="cn(pageClasses, props.class)">
    <slot />
  </span>
</template>
