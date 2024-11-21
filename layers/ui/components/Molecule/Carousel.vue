<template>
  <shadcn-carousel v-bind="{ ...$props, ...$attrs }">
    <template #default>
      <slot />
    </template>
    <template #previous>
      <slot name="previous" />
    </template>
    <template #next>
      <slot name="next" />
    </template>
  </shadcn-carousel>
</template>

<script setup lang="ts">
import type { ComponentProps, ComponentSlots } from 'vue-component-type-helpers'
import { Carousel as ShadcnCarousel } from "../shadcn/ui/carousel"

type CarouselProps = ComponentProps<typeof ShadcnCarousel>
type CarouselSlots = ComponentSlots<typeof ShadcnCarousel>

interface Props {
  orientation?: CarouselProps['orientation']
  opts?: CarouselProps['opts']
  plugins?: CarouselProps['plugins']
  class?: CarouselProps['class']
}

defineProps<Props>()

defineSlots<CarouselSlots>()

defineComponent({
  name: "MoleculeCarousel",
})
</script>