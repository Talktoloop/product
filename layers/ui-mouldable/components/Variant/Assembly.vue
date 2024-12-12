<script setup lang="ts" generic="T, G extends GuardMap">
import type { GuardMap, VariantMap, VariantSlots } from '@ui/mouldable/types';

interface Props {
  value: T
  variants: G
}

const props = defineProps<Props>()
defineSlots<VariantSlots<T, G>>()

const variantMap = computed<VariantMap<G>>(() => {
  const entries = Object.entries(props.variants).map(([key, guard]) => {
    return [key, variant(key, props.value, guard)]
  })
  return Object.fromEntries(entries)
})

const matchedVariant = computed(() => {
  const found = Object.values(variantMap.value).find((variant) => variant.when(props.value))
  if (!found) {
    return variant('default', props.value)
  }
  return found
})

</script>
<template>
  <slot :name="matchedVariant.name" :attrs="$attrs" :variant="matchedVariant" />
</template>
