<script setup lang="ts">
import type { ComboboxGroupProps } from 'radix-vue'
import { cn } from '@/lib/utils'
import { ComboboxGroup, ComboboxLabel } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<ComboboxGroupProps & {
  class?: HTMLAttributes['class']
  heading?: string
}>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})

const groupClasses = tw`
  overflow-hidden p-1 
  text-foreground
  dark:text-dark-foreground
  [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 
  [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium 
  [&_[cmdk-group-heading]]:text-muted-foreground
  dark:[&_[cmdk-group-heading]]:text-dark-muted-foreground
`

const labelClasses = tw`
  px-2 py-1.5 
  text-xs font-medium 
  text-muted-foreground
  dark:text-dark-muted-foreground
`
</script>

<template>
  <ComboboxGroup v-bind="delegatedProps" :class="cn(groupClasses, props.class)">
    <ComboboxLabel v-if="heading" :class="labelClasses">
      {{ heading }}
    </ComboboxLabel>
    <slot />
  </ComboboxGroup>
</template>
