<script setup lang="ts">
import { cn } from '@/lib/utils'
import {
  MenubarItem,
  type MenubarItemEmits,
  type MenubarItemProps,
  useForwardPropsEmits,
} from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<MenubarItemProps & { class?: HTMLAttributes['class'], inset?: boolean }>()

const emits = defineEmits<MenubarItemEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)

const itemClasses = tw`
  relative flex cursor-default select-none 
  items-center rounded-sm 
  px-2 py-1.5 
  text-sm outline-none 
  
  focus:bg-accent 
  focus:text-accent-foreground 
  
  data-[disabled]:pointer-events-none 
  data-[disabled]:opacity-50

  dark:focus:bg-dark-accent
  dark:focus:text-dark-accent-foreground
`
</script>

<template>
  <MenubarItem v-bind="forwarded" :class="cn(itemClasses, inset && 'pl-8', props.class)">
    <slot />
  </MenubarItem>
</template>
