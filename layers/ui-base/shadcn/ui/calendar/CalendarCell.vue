<script lang="ts" setup>
import { cn } from '@/lib/utils'
import { CalendarCell, type CalendarCellProps, useForwardProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<CalendarCellProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)

const cellClasses = tw`
  relative h-9 w-9 p-0
  text-center text-sm
  focus-within:relative focus-within:z-20
  [&:has([data-selected])]:rounded-md
  [&:has([data-selected])]:bg-accent
  [&:has([data-selected][data-outside-view])]:bg-accent/50
  dark:[&:has([data-selected])]:bg-dark-accent
  dark:[&:has([data-selected][data-outside-view])]:bg-dark-accent/50
`
</script>

<template>
  <CalendarCell :class="cn(cellClasses, props.class)" v-bind="forwardedProps">
    <slot />
  </CalendarCell>
</template>
