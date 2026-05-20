<script setup lang="ts">
import { cn } from '@/lib/utils'
import { TagsInputRoot, type TagsInputRootEmits, type TagsInputRootProps, useForwardPropsEmits } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<TagsInputRootProps & { class?: HTMLAttributes['class'] }>()
const emits = defineEmits<TagsInputRootEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <TagsInputRoot v-bind="forwarded" :class="cn(tw`
    flex flex-wrap gap-2 items-center rounded-md 
    border border-input 
    dark:border-dark-input
    bg-background 
    dark:bg-dark-background
    px-3 py-2 text-sm
    text-foreground
    dark:text-dark-foreground
  `, props.class)">
    <slot />
  </TagsInputRoot>
</template>
