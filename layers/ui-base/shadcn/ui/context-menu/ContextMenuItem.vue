<script setup lang="ts">
import { cn } from '@/lib/utils'
import {
  ContextMenuItem,
  type ContextMenuItemEmits,
  type ContextMenuItemProps,
  useForwardPropsEmits,
} from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<ContextMenuItemProps & { class?: HTMLAttributes['class'], inset?: boolean }>()
const emits = defineEmits<ContextMenuItemEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)

const itemClasses = computed(() => tw`
  relative flex 
  cursor-default select-none 
  items-center rounded-sm 
  px-2 py-1.5 
  text-sm outline-none 
  focus:bg-accent focus:text-accent-foreground
  dark:focus:bg-dark-accent dark:focus:text-dark-accent-foreground
  data-[disabled]:pointer-events-none data-[disabled]:opacity-50
  ${props.inset ? 'pl-8' : ''}
`)
</script>

<template>
  <ContextMenuItem v-bind="forwarded" :class="cn(itemClasses, props.class)">
    <slot />
  </ContextMenuItem>
</template>
