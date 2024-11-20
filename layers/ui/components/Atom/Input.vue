<template>
  <shadcn-input v-bind="$attrs">
    <slot />
  </shadcn-input>
</template>

<script setup lang="ts">
import type { Input as ShadcnInput } from "../shadcn/ui/input"
import type { ComponentProps } from 'vue-component-type-helpers'

type InputProps = ComponentProps<typeof ShadcnInput>

interface Props {
  type: InputProps['type']
  disabled: InputProps['disabled']
  required: InputProps['required']
  placeholder: InputProps['placeholder']
}

defineProps<Props>()

defineComponent({
  name: "AtomInput",
})
</script>