<script lang="ts" setup>
import { buttonVariants } from '../button'
import { cn } from '@/lib/utils'
import { CalendarCellTrigger, type CalendarCellTriggerProps, useForwardProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<CalendarCellTriggerProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)

const triggerClasses = tw`
  ${buttonVariants({ variant: 'ghost' })}
  h-9 w-9 p-0 font-normal

  [&[data-today]:not([data-selected])]:bg-accent
  [&[data-today]:not([data-selected])]:text-accent-foreground
  dark:[&[data-today]:not([data-selected])]:bg-dark-accent
  dark:[&[data-today]:not([data-selected])]:text-dark-accent-foreground

  data-[selected]:bg-primary
  data-[selected]:text-primary-foreground
  data-[selected]:opacity-100
  data-[selected]:hover:bg-primary
  data-[selected]:hover:text-primary-foreground
  data-[selected]:focus:bg-primary
  data-[selected]:focus:text-primary-foreground
  dark:data-[selected]:bg-dark-primary
  dark:data-[selected]:text-dark-primary-foreground
  dark:data-[selected]:hover:bg-dark-primary
  dark:data-[selected]:hover:text-dark-primary-foreground
  dark:data-[selected]:focus:bg-dark-primary
  dark:data-[selected]:focus:text-dark-primary-foreground

  data-[disabled]:text-muted-foreground
  data-[disabled]:opacity-50
  dark:data-[disabled]:text-dark-muted-foreground

  data-[unavailable]:text-destructive-foreground
  data-[unavailable]:line-through
  dark:data-[unavailable]:text-dark-destructive-foreground

  data-[outside-view]:text-muted-foreground
  data-[outside-view]:opacity-50
  [&[data-outside-view][data-selected]]:bg-accent/50
  [&[data-outside-view][data-selected]]:text-muted-foreground
  [&[data-outside-view][data-selected]]:opacity-30
  dark:data-[outside-view]:text-dark-muted-foreground
  dark:[&[data-outside-view][data-selected]]:bg-dark-accent/50
  dark:[&[data-outside-view][data-selected]]:text-dark-muted-foreground
`
</script>

<template>
  <CalendarCellTrigger :class="cn(triggerClasses, props.class)" v-bind="forwardedProps">
    <slot />
  </CalendarCellTrigger>
</template>
