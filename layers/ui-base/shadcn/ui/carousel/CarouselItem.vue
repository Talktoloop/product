<script setup lang="ts">
import type { WithClassAsProps } from './interface'
import { cn } from '@/lib/utils'
import { useCarousel } from './useCarousel'

const props = defineProps<WithClassAsProps>()

const { orientation } = useCarousel()

const itemClasses = (orient: string = 'horizontal') => tw`
  min-w-0 shrink-0 grow-0 basis-full
  ${orient === 'horizontal' ? 'pl-4' : 'pt-4'}
  dark:bg-dark-background
  dark:text-dark-foreground
  dark:border-dark-border
`
</script>

<template>
  <div role="group" aria-roledescription="slide" :class="cn(itemClasses(orientation || 'horizontal'), props.class)">
    <slot />
  </div>
</template>
