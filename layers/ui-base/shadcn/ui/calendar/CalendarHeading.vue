<script lang="ts" setup>
import { cn } from '@/lib/utils'
import { CalendarHeading, type CalendarHeadingProps, useForwardProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<CalendarHeadingProps & { class?: HTMLAttributes['class'] }>()

defineSlots<{
  default(props: { headingValue: string }): any
}>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)

const headingClasses = tw`
  text-sm font-medium
  text-foreground
  dark:text-dark-foreground
`
</script>

<template>
  <CalendarHeading v-slot="{ headingValue }" :class="cn('text-sm font-medium', props.class)" v-bind="forwardedProps">
    <slot :heading-value>
      {{ headingValue }}
    </slot>
  </CalendarHeading>
</template>
