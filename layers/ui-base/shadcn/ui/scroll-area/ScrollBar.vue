<script setup lang="ts">
import { cn } from '@/lib/utils'
import { ScrollAreaScrollbar, type ScrollAreaScrollbarProps, ScrollAreaThumb } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = withDefaults(defineProps<ScrollAreaScrollbarProps & { class?: HTMLAttributes['class'] }>(), {
  orientation: 'vertical',
})

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <ScrollAreaScrollbar v-bind="delegatedProps" :class="cn(
    tw`
        flex touch-none select-none transition-colors
        
        [&[data-orientation=vertical]]:h-full [&[data-orientation=vertical]]:w-2.5
        [&[data-orientation=vertical]]:border-l [&[data-orientation=vertical]]:border-l-transparent
        [&[data-orientation=vertical]]:p-px
        
        [&[data-orientation=horizontal]]:h-2.5 [&[data-orientation=horizontal]]:flex-col
        [&[data-orientation=horizontal]]:border-t [&[data-orientation=horizontal]]:border-t-transparent
        [&[data-orientation=horizontal]]:p-px
      `,
    props.class
  )">
    <ScrollAreaThumb :class="tw`
      relative flex-1 rounded-full
      bg-border dark:bg-border
    `" />
  </ScrollAreaScrollbar>
</template>
