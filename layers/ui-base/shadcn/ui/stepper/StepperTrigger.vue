<script lang="ts" setup>
import type { StepperTriggerProps } from 'radix-vue'
import { cn } from '@/lib/utils'
import { StepperTrigger, useForwardProps } from 'radix-vue'

import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<StepperTriggerProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <StepperTrigger v-bind="forwarded" :class="cn(tw`
      p-2 flex flex-col items-center text-center gap-2 rounded-md
      text-foreground
      dark:text-dark-foreground
      hover:bg-accent
      dark:hover:bg-dark-accent
      hover:text-accent-foreground
      dark:hover:text-dark-accent-foreground
    `, props.class)">
    <slot />
  </StepperTrigger>
</template>
