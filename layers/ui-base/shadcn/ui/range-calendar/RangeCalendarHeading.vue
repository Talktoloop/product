<script lang="ts" setup>
import { cn } from '@/lib/utils'
import { RangeCalendarHeading, type RangeCalendarHeadingProps, useForwardProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<RangeCalendarHeadingProps & { class?: HTMLAttributes['class'] }>()

defineSlots<{
  default(props: { headingValue: string }): any
}>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)

const headingClass = tw`
  text-sm font-medium
  text-foreground
  dark:text-dark-foreground
`
</script>

<template>
  <RangeCalendarHeading v-slot="{ headingValue }" :class="cn(headingClass, props.class)" v-bind="forwardedProps">
    <slot :heading-value="headingValue">
      {{ headingValue }}
    </slot>
  </RangeCalendarHeading>
</template>
