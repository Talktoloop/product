<script setup lang="ts" generic="T">
import type { Variant } from '@ui/moudlable/types/variants';

interface Props {
  context: T
  variants: Variant[]
}

const props = defineProps<Props>()

const variant = computed(() => {
  return props.variants.find((variant) => variant.when(props.context))
})

const slotName = computed(() => {
  return variant.value?.name ?? 'default'
})
</script>
<template>
  <slot :name="slotName" :attrs="$attrs" />
</template>