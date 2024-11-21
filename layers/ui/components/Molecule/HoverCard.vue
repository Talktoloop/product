<template>
  <shadcn-hover-card v-bind="{ ...$props, ...$attrs }">
    <template #default>
      <slot />
    </template>
    <template #trigger>
      <slot name="trigger" />
    </template>
    <template #content>
      <slot name="content" />
    </template>
  </shadcn-hover-card>
</template>

<script setup lang="ts">
import type { ComponentProps, ComponentSlots } from 'vue-component-type-helpers'
import { HoverCard as ShadcnHoverCard } from "../shadcn/ui/hover-card"

type HoverCardProps = ComponentProps<typeof ShadcnHoverCard>
type HoverCardSlots = ComponentSlots<typeof ShadcnHoverCard>

interface Props {
  open?: HoverCardProps['open']
  openDelay?: HoverCardProps['openDelay']
  closeDelay?: HoverCardProps['closeDelay']
  class?: HoverCardProps['class']
}

defineProps<Props>()

defineSlots<HoverCardSlots>()

defineComponent({
  name: "MoleculeHoverCard",
})
</script>