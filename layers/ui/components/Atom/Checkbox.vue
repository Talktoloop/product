<template>
  <shadcn-checkbox v-bind="{ ...$props, ...$attrs }">
    <slot />
  </shadcn-checkbox>
</template>

<script setup lang="ts">
import type { Checkbox as ShadcnCheckbox } from "../shadcn/ui/checkbox"
import type { ComponentProps } from 'vue-component-type-helpers'

type CheckboxProps = ComponentProps<typeof ShadcnCheckbox>

interface Props {
  defaultChecked?: CheckboxProps['defaultChecked']
  checked?: CheckboxProps['checked']
  disabled?: CheckboxProps['disabled']
  required?: CheckboxProps['required']
  name?: CheckboxProps['name']
  value?: CheckboxProps['value']
  asChild?: CheckboxProps['asChild']
  as?: CheckboxProps['as']
  class?: CheckboxProps['class']
}

defineProps<Props>()

defineComponent({
  name: "AtomCheckbox",
})
</script>