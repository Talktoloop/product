<script setup lang="ts">
import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-vue-next'
import {
  AccordionHeader,
  AccordionTrigger,
  type AccordionTriggerProps,
} from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<AccordionTriggerProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})

const triggerClasses = tw`
  flex flex-1 items-center justify-between py-4
  font-medium transition-all
  hover:underline hover:text-foreground
  dark:hover:text-dark-foreground
  [&[data-state=open]>svg]:rotate-180
`

const iconClasses = tw`
  h-4 w-4 shrink-0
  transition-transform duration-200
  text-muted-foreground
  dark:text-dark-muted-foreground
`
</script>

<template>
  <AccordionHeader class="flex">
    <AccordionTrigger v-bind="delegatedProps" :class="cn(triggerClasses, props.class)">
      <slot />
      <slot name="icon">
        <ChevronDown :class="iconClasses" />
      </slot>
    </AccordionTrigger>
  </AccordionHeader>
</template>
