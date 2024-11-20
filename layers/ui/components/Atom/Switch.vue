<template>
  <shadcn-switch v-bind="$attrs">
    <slot />
  </shadcn-switch>
</template>

<script setup lang="ts">
import type { Switch as ShadcnSwitch } from "../shadcn/ui/switch"
import type { ComponentProps } from 'vue-component-type-helpers'

type SwitchProps = ComponentProps<typeof ShadcnSwitch>

interface Props {
  defaultChecked?: SwitchProps['defaultChecked']
  checked?: SwitchProps['checked']
  disabled?: SwitchProps['disabled']
  required?: SwitchProps['required']
  name?: SwitchProps['name']
  value?: SwitchProps['value']
  asChild?: SwitchProps['asChild']
  as?: SwitchProps['as']
  class?: SwitchProps['class']
}

defineProps<Props>()

defineComponent({
  name: "AtomSwitch",
})
</script>