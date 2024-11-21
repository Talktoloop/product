<template>
  <shadcn-badge v-bind="{ ...$props, ...$attrs }">
    <template #default>
      <slot />
    </template>
  </shadcn-badge>
</template>

<script setup lang="ts">
import type { Badge as ShadcnBadge } from "../shadcn/ui/badge"
import type { ComponentProps } from 'vue-component-type-helpers'

type BadgeProps = ComponentProps<typeof ShadcnBadge>

interface Props {
  variant?: BadgeProps['variant']
  class?: BadgeProps['class']
}

defineProps<Props>()

defineSlots<{
  default?(): string
}>()

defineComponent({
  name: "AtomBadge",
})
</script>