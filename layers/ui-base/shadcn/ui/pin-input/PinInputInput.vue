<script setup lang="ts">
import { cn } from '@/lib/utils'
import { PinInputInput, type PinInputInputProps, useForwardProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<PinInputInputProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <PinInputInput v-bind="forwardedProps" :class="cn(
    tw`
      relative text-center
      flex h-10 w-10 items-center justify-center
      
      border-y border-r border-input
      dark:border-input
      
      text-sm text-foreground
      dark:text-foreground
      
      transition-all
      
      first:rounded-l-md first:border-l
      last:rounded-r-md
      
      focus:outline-none
      focus:ring-2 focus:ring-ring
      focus:relative focus:z-10
      dark:focus:ring-ring
    `,
    props.class
  )" />
</template>
