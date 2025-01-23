<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { tw } from '@/lib/utils'

const props = defineProps<{ class?: HTMLAttributes['class'] }>()

const headerClass = tw`
  flex flex-col gap-y-2
  text-center sm:text-left
`
</script>

<template>
  <div :class="cn(headerClass, props.class)">
    <slot />
  </div>
</template>
