<script setup lang="ts">
import type { WithClassAsProps } from './interface'
import { cn } from '@/lib/utils'
import { useCarousel } from './useCarousel'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<WithClassAsProps>()

const { carouselRef, orientation } = useCarousel()

const contentClasses = (orient: string = 'horizontal') => tw`
  flex
  ${orient === 'horizontal' ? '-ml-4' : '-mt-4 flex-col'}
`
</script>

<template>
  <div ref="carouselRef" class="overflow-hidden">
    <div :class="cn(contentClasses(orientation || 'horizontal'), props.class)" v-bind="$attrs">
      <slot />
    </div>
  </div>
</template>
