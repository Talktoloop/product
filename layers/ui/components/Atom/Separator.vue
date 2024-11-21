<template>
  <shadcn-separator v-bind="{ ...$props, ...$attrs }">
    <slot />
  </shadcn-separator>
</template>

<script setup lang="ts">
import type { Separator as ShadcnSeparator } from "../shadcn/ui/separator"
import type { ComponentProps } from 'vue-component-type-helpers'

type SeparatorProps = ComponentProps<typeof ShadcnSeparator>

interface Props {
  orientation: SeparatorProps['orientation']
  decorative: SeparatorProps['decorative']
  asChild: SeparatorProps['asChild']
  as?: SeparatorProps['as']
  class?: SeparatorProps['class']
}

defineProps<Props>()

defineComponent({
  name: "AtomSeparator",
})
</script>