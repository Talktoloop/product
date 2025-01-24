<script lang="ts" setup>
import type { StepperSeparatorProps } from 'radix-vue'
import { cn } from '@/lib/utils'
import { StepperSeparator, useForwardProps } from 'radix-vue'

import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<StepperSeparatorProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <StepperSeparator v-bind="forwarded" :class="cn(tw`
      bg-muted
      dark:bg-dark-muted

      group-data-[disabled]:bg-muted 
      group-data-[disabled]:opacity-50
      dark:group-data-[disabled]:bg-dark-muted

      group-data-[state=completed]:bg-accent-foreground
      dark:group-data-[state=completed]:bg-dark-accent-foreground
    `, props.class)" />
</template>
