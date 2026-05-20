<script setup lang="ts">
import { cn } from '@/lib/utils'
import { ChevronRight } from 'lucide-vue-next'
import {
  ContextMenuSubTrigger,
  type ContextMenuSubTriggerProps,
  useForwardProps,
} from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<ContextMenuSubTriggerProps & { class?: HTMLAttributes['class'], inset?: boolean }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)

const triggerClasses = computed(() => tw`
  flex cursor-default select-none 
  items-center rounded-sm 
  px-2 py-1.5 
  text-sm outline-none 
  focus:bg-accent focus:text-accent-foreground
  dark:focus:bg-dark-accent dark:focus:text-dark-accent-foreground
  data-[state=open]:bg-accent data-[state=open]:text-accent-foreground
  dark:data-[state=open]:bg-dark-accent dark:data-[state=open]:text-dark-accent-foreground
  ${props.inset ? 'pl-8' : ''}
`)

const iconClasses = tw`
  ml-auto h-4 w-4
  text-muted-foreground
  dark:text-dark-muted-foreground
`
</script>

<template>
  <ContextMenuSubTrigger v-bind="forwardedProps" :class="cn(triggerClasses, props.class)">
    <slot />
    <ChevronRight :class="iconClasses" />
  </ContextMenuSubTrigger>
</template>
