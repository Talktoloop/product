<template>
  <shadcn-scroll-area v-bind="{ ...$props, ...$attrs }">
    <slot />
  </shadcn-scroll-area>
</template>

<script setup lang="ts">
import type { ComponentProps, ComponentSlots } from 'vue-component-type-helpers'
import { ScrollArea as ShadcnScrollArea } from "../shadcn/ui/scroll-area"

type ScrollAreaProps = ComponentProps<typeof ShadcnScrollArea>
type ScrollAreaSlots = ComponentSlots<typeof ShadcnScrollArea>

interface Props {
  type?: ScrollAreaProps['type']
  scrollHideDelay?: ScrollAreaProps['scrollHideDelay']
  class?: ScrollAreaProps['class']
}

defineProps<Props>()

defineSlots<ScrollAreaSlots>()

defineComponent({
  name: "MoleculeScrollArea",
})
</script>