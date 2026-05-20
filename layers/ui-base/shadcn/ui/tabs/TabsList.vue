<script setup lang="ts">
import { cn } from '@/lib/utils'
import { TabsList, type TabsListProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<TabsListProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <TabsList v-bind="delegatedProps" :class="cn(tw`
      inline-flex items-center justify-center rounded-md p-1
      bg-muted
      dark:bg-dark-muted
      text-muted-foreground
      dark:text-dark-muted-foreground
    `, props.class)">
    <slot />
  </TabsList>
</template>
