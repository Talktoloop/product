<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const footerClasses = tw`
  flex items-center
  p-6 pt-0
`
</script>

<template>
  <div :class="cn(footerClasses, props.class)">
    <slot />
  </div>
</template>
