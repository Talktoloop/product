<script lang="ts" setup>
import type { StepperIndicatorProps } from 'radix-vue'
import { cn } from '@/lib/utils'
import { StepperIndicator, useForwardProps } from 'radix-vue'

import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<StepperIndicatorProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <StepperIndicator v-bind="forwarded" :class="cn(tw`
      inline-flex items-center justify-center rounded-full w-10 h-10
      text-muted-foreground/50
      dark:text-dark-muted-foreground/50

      group-data-[disabled]:text-muted-foreground 
      group-data-[disabled]:opacity-50
      dark:group-data-[disabled]:text-dark-muted-foreground

      group-data-[state=active]:bg-primary 
      group-data-[state=active]:text-primary-foreground
      dark:group-data-[state=active]:bg-dark-primary
      dark:group-data-[state=active]:text-dark-primary-foreground

      group-data-[state=completed]:bg-accent 
      group-data-[state=completed]:text-accent-foreground
      dark:group-data-[state=completed]:bg-dark-accent
      dark:group-data-[state=completed]:text-dark-accent-foreground
    `, props.class)">
    <slot />
  </StepperIndicator>
</template>
