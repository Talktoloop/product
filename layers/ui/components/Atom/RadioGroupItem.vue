<template>
  <shadcn-radio-group-item v-bind="$attrs">
    <slot />
  </shadcn-radio-group-item>
</template>

<script setup lang="ts">
import type { RadioGroupItem as ShadcnRadioGroupItem } from "../shadcn/ui/radio-group"
import type { ComponentProps } from 'vue-component-type-helpers'

type RadioGroupItemProps = ComponentProps<typeof ShadcnRadioGroupItem>

interface Props {
  value: RadioGroupItemProps['value']
  disabled: RadioGroupItemProps['disabled']
  required: RadioGroupItemProps['required']
}

defineProps<Props>()

defineComponent({
  name: "AtomRadioGroupItem",
})
</script>