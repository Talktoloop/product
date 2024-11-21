<template>
  <shadcn-progress v-bind="{ ...$props, ...$attrs }">
    <slot />
  </shadcn-progress>
</template>

<script setup lang="ts">
import type { Progress as ShadcnProgress } from "../shadcn/ui/progress"
import type { ComponentProps } from 'vue-component-type-helpers'

type ProgressProps = ComponentProps<typeof ShadcnProgress>

interface Props {
  max?: ProgressProps['max']
  getValueLabel?: ProgressProps['getValueLabel']
  asChild?: ProgressProps['asChild']
  as?: ProgressProps['as']
  class?: ProgressProps['class']
}

defineModel<ProgressProps['modelValue']>()
defineProps<Props>()

defineComponent({
  name: "AtomProgress",
})
</script>