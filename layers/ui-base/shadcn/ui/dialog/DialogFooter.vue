<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{ class?: HTMLAttributes['class'] }>()

const footerClasses = tw`
  flex flex-col-reverse 
  sm:flex-row sm:justify-end sm:gap-x-2
`
</script>

<template>
  <div :class="cn(footerClasses, props.class)">
    <slot />
  </div>
</template>
