<script lang="ts" setup>
import { cn } from '@/lib/utils'
import { CalendarHeadCell, type CalendarHeadCellProps, useForwardProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<CalendarHeadCellProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)

const headCellClasses = tw`
  w-9 rounded-md
  text-[0.8rem] font-normal
  text-muted-foreground
  dark:text-dark-muted-foreground
`
</script>

<template>
  <CalendarHeadCell :class="cn(headCellClasses, props.class)" v-bind="forwardedProps">
    <slot />
  </CalendarHeadCell>
</template>
