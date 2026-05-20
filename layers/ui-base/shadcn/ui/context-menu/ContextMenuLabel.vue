<script setup lang="ts">
import { cn } from '@/lib/utils'
import { ContextMenuLabel, type ContextMenuLabelProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<ContextMenuLabelProps & { class?: HTMLAttributes['class'], inset?: boolean }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})

const labelClasses = computed(() => tw`
  px-2 py-1.5 
  text-sm font-semibold 
  text-foreground
  dark:text-dark-foreground
  ${props.inset ? 'pl-8' : ''}
`)
</script>

<template>
  <ContextMenuLabel v-bind="delegatedProps" :class="cn(labelClasses, props.class)">
    <slot />
  </ContextMenuLabel>
</template>
