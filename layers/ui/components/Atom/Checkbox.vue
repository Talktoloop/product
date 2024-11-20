<template>
  <shadcn-checkbox v-bind="$attrs">
    <slot />
  </shadcn-checkbox>
</template>

<script setup lang="ts">
import type { Checkbox as ShadcnCheckbox } from "../shadcn/ui/checkbox"
import type { ComponentProps } from 'vue-component-type-helpers'

type CheckboxProps = ComponentProps<typeof ShadcnCheckbox>

interface Props {
  checked: CheckboxProps['checked']
  disabled: CheckboxProps['disabled']
  required: CheckboxProps['required']
  name: CheckboxProps['name']
}

defineProps<Props>()

defineComponent({
  name: "AtomCheckbox",
})
</script>