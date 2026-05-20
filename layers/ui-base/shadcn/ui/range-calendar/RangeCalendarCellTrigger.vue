<script lang="ts" setup>
import { buttonVariants } from '../button'
import { cn } from '@/lib/utils'
import { RangeCalendarCellTrigger, type RangeCalendarCellTriggerProps, useForwardProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<RangeCalendarCellTriggerProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <RangeCalendarCellTrigger :class="cn(
    buttonVariants({ variant: 'ghost' }),
    tw`
      h-9 w-9 p-0 font-normal data-[selected]:opacity-100

      [&[data-today]:not([data-selected])]:bg-accent
      [&[data-today]:not([data-selected])]:text-accent-foreground
      dark:[&[data-today]:not([data-selected])]:bg-accent
      dark:[&[data-today]:not([data-selected])]:text-accent-foreground

      data-[selection-start]:bg-primary
      data-[selection-start]:text-primary-foreground
      dark:data-[selection-start]:bg-primary
      dark:data-[selection-start]:text-primary-foreground
      data-[selection-start]:hover:bg-primary
      data-[selection-start]:hover:text-primary-foreground
      data-[selection-start]:focus:bg-primary
      data-[selection-start]:focus:text-primary-foreground

      data-[selection-end]:bg-primary
      data-[selection-end]:text-primary-foreground
      dark:data-[selection-end]:bg-primary
      dark:data-[selection-end]:text-primary-foreground
      data-[selection-end]:hover:bg-primary
      data-[selection-end]:hover:text-primary-foreground
      data-[selection-end]:focus:bg-primary
      data-[selection-end]:focus:text-primary-foreground

      data-[outside-view]:text-muted-foreground
      dark:data-[outside-view]:text-muted-foreground
      data-[outside-view]:opacity-50
      [&[data-outside-view][data-selected]]:bg-accent/50
      dark:[&[data-outside-view][data-selected]]:bg-accent/50
      [&[data-outside-view][data-selected]]:text-muted-foreground
      [&[data-outside-view][data-selected]]:opacity-30

      data-[disabled]:text-muted-foreground
      dark:data-[disabled]:text-muted-foreground
      data-[disabled]:opacity-50

      data-[unavailable]:text-destructive-foreground
      dark:data-[unavailable]:text-destructive-foreground
      data-[unavailable]:line-through
    `,
    props.class,
  )" v-bind="forwardedProps">
    <slot />
  </RangeCalendarCellTrigger>
</template>
