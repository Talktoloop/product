<script setup lang="ts">
import { cn } from '@/lib/utils'
import {
  MenuItem,
  type MenuItemEmits,
  type MenuItemProps,
  useForwardPropsEmits,
} from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<MenuItemProps & { class?: HTMLAttributes['class'], inset?: boolean }>()

const emits = defineEmits<MenuItemEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <MenuItem v-bind="forwarded" :class="cn(
    'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    inset && 'pl-8',
    props.class,
  )">
  <slot />
  </MenuItem>
</template>
