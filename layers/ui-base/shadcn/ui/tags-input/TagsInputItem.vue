<script setup lang="ts">
import { cn } from '@/lib/utils'
import { TagsInputItem, type TagsInputItemProps, useForwardProps } from 'radix-vue'

import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<TagsInputItemProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <TagsInputItem v-bind="forwardedProps" :class="cn(tw`
    flex h-6 items-center rounded 
    bg-secondary
    dark:bg-dark-secondary
    data-[state=active]:ring-ring 
    dark:data-[state=active]:ring-dark-ring
    data-[state=active]:ring-2 
    data-[state=active]:ring-offset-2 
    ring-offset-background
    dark:ring-offset-dark-background
  `, props.class)">
    <slot />
  </TagsInputItem>
</template>
