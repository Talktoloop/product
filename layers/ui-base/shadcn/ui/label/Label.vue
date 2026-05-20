<script setup lang="ts">
import { cn } from '@/lib/utils'
import { Label, type LabelProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<LabelProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const labelClasses = tw`
  text-sm font-medium leading-none 
  text-foreground
  
  peer-disabled:cursor-not-allowed 
  peer-disabled:opacity-70

  dark:text-dark-foreground
`
</script>

<template>
  <Label v-bind="delegatedProps" :class="cn(labelClasses, props.class)">
    <slot />
  </Label>
</template>
