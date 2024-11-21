<template>
  <shadcn-slider v-bind="{ ...$props, ...$attrs }">
    <slot />
  </shadcn-slider>
</template>

<script setup lang="ts">
import type { ComponentProps, ComponentSlots } from 'vue-component-type-helpers'
import { Slider as ShadcnSlider } from "../shadcn/ui/slider"

type SliderProps = ComponentProps<typeof ShadcnSlider>
type SliderSlots = ComponentSlots<typeof ShadcnSlider>

interface Props {
  modelValue?: SliderProps['modelValue']
  defaultValue?: SliderProps['defaultValue']
  min?: SliderProps['min']
  max?: SliderProps['max']
  step?: SliderProps['step']
  orientation?: SliderProps['orientation']
  disabled?: SliderProps['disabled']
  class?: SliderProps['class']
}

defineProps<Props>()

defineSlots<SliderSlots>()

defineComponent({
  name: "MoleculeSlider",
})
</script>