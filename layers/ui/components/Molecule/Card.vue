<template>
  <shadcn-card v-bind="{ ...$props, ...$attrs }">
    <slot />
    <template #header>
      <slot name="header" />
    </template>
    <template #title>
      <slot name="title" />
    </template>
    <template #description>
      <slot name="description" />
    </template>
    <template #footer>
      <slot name="footer" />
    </template>
  </shadcn-card>
</template>

<script setup lang="ts">
import type { ComponentProps, ComponentSlots } from 'vue-component-type-helpers'
import { Card as ShadcnCard } from "../shadcn/ui/card"

type CardProps = ComponentProps<typeof ShadcnCard>
type CardSlots = ComponentSlots<typeof ShadcnCard>

interface Props {
  class?: CardProps['class']
}

defineProps<Props>()

defineSlots<CardSlots>()

defineComponent({
  name: "MoleculeCard",
})
</script>