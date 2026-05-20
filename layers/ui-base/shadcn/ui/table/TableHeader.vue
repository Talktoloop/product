<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <thead :class="cn(tw`
    border-b 
    border-border
    dark:border-dark-border
    [&_tr]:border-b-0
  `, props.class)">
    <slot />
  </thead>
</template>
