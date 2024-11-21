<template>
  <shadcn-select v-bind="{ ...$props, ...$attrs }">
    <template #default>
      <slot />
    </template>
    <template #trigger>
      <slot name="trigger" />
    </template>
    <template #content>
      <slot name="content" />
    </template>
  </shadcn-select>
</template>

<script setup lang="ts">
import type { ComponentProps, ComponentSlots } from 'vue-component-type-helpers'
import { Select as ShadcnSelect } from "../shadcn/ui/select"

type SelectProps = ComponentProps<typeof ShadcnSelect>
type SelectSlots = ComponentSlots<typeof ShadcnSelect>

interface Props {
  modelValue?: SelectProps['modelValue']
  defaultValue?: SelectProps['defaultValue']
  disabled?: SelectProps['disabled']
  required?: SelectProps['required']
  class?: SelectProps['class']
}

defineProps<Props>()

defineSlots<SelectSlots>()

defineComponent({
  name: "MoleculeSelect",
})
</script>