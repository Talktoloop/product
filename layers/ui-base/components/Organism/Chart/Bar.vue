<script lang="ts" setup generic="T extends Record<string, any>">
import type { BaseChartProps } from '@ui/shadcn/chart-bar'

const props = defineProps<BaseChartProps<T>>()

const forward = useForwardPropsEmits(props, undefined)

// The Bar Chart component from Shadcn UI is read-only,
// can't change the name, hence the forwarded implementation
defineOptions({
  name: 'OrganismChartBar',
})
</script>

<template>
  <shadcn-bar-chart v-bind="forward">
    <slot />
  </shadcn-bar-chart>
</template>