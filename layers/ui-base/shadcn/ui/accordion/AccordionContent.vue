<script setup lang="ts">
import { cn } from '@/lib/utils'
import { AccordionContent, type AccordionContentProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<AccordionContentProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})

const contentClasses = tw`
  overflow-hidden text-sm
  transition-all
  text-muted-foreground
  dark:text-dark-muted-foreground
  data-[state=closed]:animate-accordion-up
  data-[state=open]:animate-accordion-down
`

const innerClasses = tw`
  pb-4 pt-0
`
</script>

<template>
  <AccordionContent v-bind="delegatedProps" :class="contentClasses">
    <div :class="cn(innerClasses, props.class)">
      <slot />
    </div>
  </AccordionContent>
</template>
