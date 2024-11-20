<template>
  <shadcn-progress v-bind="$attrs">
    <slot />
  </shadcn-progress>
</template>

<script setup lang="ts">
import type { Progress as ShadcnProgress } from "../shadcn/ui/progress"
import type { ComponentProps } from 'vue-component-type-helpers'

type ProgressProps = ComponentProps<typeof ShadcnProgress>

interface Props {
  value: ProgressProps['value']
  max: ProgressProps['max']
}

defineProps<Props>()

defineComponent({
  name: "AtomProgress",
})
</script>