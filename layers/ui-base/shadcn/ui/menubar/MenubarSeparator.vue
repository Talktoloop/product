<script setup lang="ts">
import { cn } from '@/lib/utils'
import { MenubarSeparator, type MenubarSeparatorProps, useForwardProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<MenubarSeparatorProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)

const separatorClasses = tw`
  -mx-1 my-1 h-px 
  bg-muted
  
  dark:bg-dark-muted
`
</script>

<template>
  <MenubarSeparator :class="cn(separatorClasses, props.class)" v-bind="forwardedProps" />
</template>
