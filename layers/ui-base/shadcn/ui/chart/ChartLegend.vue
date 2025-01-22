<script setup lang="ts">
import type { BulletLegendItemInterface } from '@unovis/ts'
import { buttonVariants } from '../button'
import { BulletLegend } from '@unovis/ts'
import { VisBulletLegend } from '@unovis/vue'
import { nextTick, onMounted, ref } from 'vue'

const props = withDefaults(defineProps<{ items: BulletLegendItemInterface[] }>(), {
  items: () => [],
})

const emits = defineEmits<{
  'legendItemClick': [d: BulletLegendItemInterface, i: number]
  'update:items': [payload: BulletLegendItemInterface[]]
}>()

const elRef = ref<HTMLElement>()

const wrapperClasses = tw`
  w-max
`

onMounted(() => {
  const selector = `.${BulletLegend.selectors.item}`
  nextTick(() => {
    const elements = elRef.value?.querySelectorAll(selector)
    const classes = [
      ...buttonVariants({ variant: 'ghost', size: 'sm' }).split(' '),
      '!inline-flex',
      '!mr-2'
    ]
    elements?.forEach(el => el.classList.add(...classes))
  })
})

function onLegendItemClick(d: BulletLegendItemInterface, i: number) {
  emits('legendItemClick', d, i)
  const isBulletActive = !props.items[i].inactive
  const isFilterApplied = props.items.some(i => i.inactive)
  if (isFilterApplied && isBulletActive) {
    // reset filter
    emits('update:items', props.items.map(item => ({ ...item, inactive: false })))
  }
  else {
    // apply selection, set other item as inactive
    emits('update:items', props.items.map(item => item.name === d.name ? ({ ...d, inactive: false }) : { ...item, inactive: true }))
  }
}
</script>

<template>
  <div ref="elRef" :class="wrapperClasses">
    <VisBulletLegend :items="items" :on-legend-item-click="onLegendItemClick" />
  </div>
</template>
