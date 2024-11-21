<template>
  <shadcn-radio-group-item v-bind="{ ...$props, ...$attrs }">
    <slot />
  </shadcn-radio-group-item>
</template>

<script setup lang="ts">
import type { RadioGroupItem as ShadcnRadioGroupItem } from "../shadcn/ui/radio-group"
import type { ComponentProps } from 'vue-component-type-helpers'

type RadioGroupItemProps = ComponentProps<typeof ShadcnRadioGroupItem>

interface Props {
  id: RadioGroupItemProps['id']
  name: RadioGroupItemProps['name']
  asChild?: RadioGroupItemProps['asChild']
  as?: RadioGroupItemProps['as']
  class?: RadioGroupItemProps['class']
  value: RadioGroupItemProps['value']
  disabled?: RadioGroupItemProps['disabled']
  required?: RadioGroupItemProps['required']
}

defineProps<Props>()

defineComponent({
  name: "AtomRadioGroupItem",
})
</script>