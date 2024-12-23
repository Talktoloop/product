<script lang="ts" setup generic="T extends Record<string, any>">

import type { BaseChartProps } from '@ui/shadcn/chart-area'

const props = defineProps<BaseChartProps<T>>()

const forward = useForwardPropsEmits(props, undefined)

// The Area Chart component from Shadcn UI is read-only,
// can't change the name, hence the forwarded implementation
defineOptions({
  name: 'OrganismChartArea',
})
</script>

<template>
  <shadcn-area-chart v-bind="forward">
    <slot />
  </shadcn-area-chart>
</template>