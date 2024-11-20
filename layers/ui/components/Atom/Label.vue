<template>
  <shadcn-label v-bind="$attrs">
    <slot />
  </shadcn-label>
</template>

<script setup lang="ts">
import type { Label as ShadcnLabel } from "../shadcn/ui/label"
import type { ComponentProps } from 'vue-component-type-helpers'

type LabelProps = ComponentProps<typeof ShadcnLabel>

interface Props {
  for: LabelProps['for']
  asChild: LabelProps['asChild']
}

defineProps<Props>()

defineComponent({
  name: "AtomLabel",
})
</script>