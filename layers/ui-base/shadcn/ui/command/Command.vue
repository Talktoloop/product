<script setup lang="ts">
import type { ComboboxRootEmits, ComboboxRootProps } from 'radix-vue'
import { cn } from '@/lib/utils'
import { ComboboxRoot, useForwardPropsEmits } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = withDefaults(defineProps<ComboboxRootProps & { class?: HTMLAttributes['class'] }>(), {
  open: true,
  modelValue: '',
})

const emits = defineEmits<ComboboxRootEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)

const commandClasses = tw`
  flex h-full w-full flex-col 
  overflow-hidden rounded-md 
  bg-surface text-surface-foreground
  dark:bg-dark-surface dark:text-dark-surface-foreground
`
</script>

<template>
  <ComboboxRoot v-bind="forwarded" :class="cn(commandClasses, props.class)">
    <slot />
  </ComboboxRoot>
</template>
