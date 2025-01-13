<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import Separator from '../separator/Separator.vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <Separator data-sidebar="separator" :class="cn('mx-2 w-auto bg-surface-border', props.class)">
    <slot />
  </Separator>
</template>
