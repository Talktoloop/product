<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const headerClasses = tw`
  flex flex-col gap-y-1.5 
  text-center sm:text-left
`
</script>

<template>
  <div :class="cn(headerClasses, props.class)">
    <slot />
  </div>
</template>
