<script setup lang="ts">
import type { ComboboxEmptyProps } from 'radix-vue'
import { cn } from '@/lib/utils'
import { ComboboxEmpty } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<ComboboxEmptyProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})

const emptyClasses = tw`
  py-6 text-center text-sm
  text-muted-foreground
  dark:text-dark-muted-foreground
`
</script>

<template>
  <ComboboxEmpty v-bind="delegatedProps" :class="cn(emptyClasses, props.class)">
    <slot />
  </ComboboxEmpty>
</template>
