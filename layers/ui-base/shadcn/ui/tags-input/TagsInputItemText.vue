<script setup lang="ts">
import { cn } from '@/lib/utils'
import { TagsInputItemText, type TagsInputItemTextProps, useForwardProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<TagsInputItemTextProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <TagsInputItemText v-bind="forwardedProps" :class="cn(tw`
    py-1 px-2 text-sm rounded 
    bg-transparent
    text-foreground
    dark:text-dark-foreground
  `, props.class)" />
</template>
