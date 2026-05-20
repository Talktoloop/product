<script setup lang="ts">
import { cn } from '@/lib/utils'
import { Check } from 'lucide-vue-next'
import {
  ContextMenuCheckboxItem,
  type ContextMenuCheckboxItemEmits,
  type ContextMenuCheckboxItemProps,
  ContextMenuItemIndicator,
  useForwardPropsEmits,
} from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<ContextMenuCheckboxItemProps & { class?: HTMLAttributes['class'] }>()
const emits = defineEmits<ContextMenuCheckboxItemEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)

const itemClasses = tw`
  relative flex 
  cursor-default select-none 
  items-center rounded-sm 
  py-1.5 pl-8 pr-2 
  text-sm outline-none 
  focus:bg-accent focus:text-accent-foreground
  dark:focus:bg-dark-accent dark:focus:text-dark-accent-foreground
  data-[disabled]:pointer-events-none data-[disabled]:opacity-50
`

const indicatorWrapperClasses = tw`
  absolute left-2 
  flex h-3.5 w-3.5 
  items-center justify-center
`

const indicatorIconClasses = tw`
  h-4 w-4
  text-foreground
  dark:text-dark-foreground
`
</script>

<template>
  <ContextMenuCheckboxItem v-bind="forwarded" :class="cn(itemClasses, props.class)">
    <span :class="indicatorWrapperClasses">
      <ContextMenuItemIndicator>
        <Check :class="indicatorIconClasses" />
      </ContextMenuItemIndicator>
    </span>
    <slot />
  </ContextMenuCheckboxItem>
</template>
