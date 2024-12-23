<script lang="ts" setup generic="T extends Record<string, any>">
import type { BaseChartProps } from '@ui/shadcn/chart-line'

const props = defineProps<BaseChartProps<T>>()

const forward = useForwardPropsEmits(props, undefined)

// The Line Chart component from Shadcn UI is read-only,
// can't change the name, hence the forwarded implementation
defineOptions({
  name: 'OrganismChartLine',
})
</script>

<template>
  <shadcn-line-chart v-bind="forward">
    <slot />
  </shadcn-line-chart>
</template>