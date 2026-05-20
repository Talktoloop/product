<script setup lang="ts">
import { cn } from '@/lib/utils'
import { DropdownMenuLabel, type DropdownMenuLabelProps, useForwardProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<DropdownMenuLabelProps & { class?: HTMLAttributes['class'], inset?: boolean }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)

const labelClasses = tw`
  px-2 py-1.5 
  text-sm font-semibold
  text-foreground
  dark:text-dark-foreground
`
</script>

<template>
  <DropdownMenuLabel v-bind="forwardedProps" :class="cn(labelClasses, inset && 'pl-8', props.class)">
    <slot />
  </DropdownMenuLabel>
</template>
