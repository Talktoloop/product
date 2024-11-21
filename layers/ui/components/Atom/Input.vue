<template>
  <shadcn-input v-bind="{ ...$props, ...$attrs }">
    <slot />
  </shadcn-input>
</template>

<script setup lang="ts">
import type { Input as ShadcnInput } from "../shadcn/ui/input"
import type { ComponentProps } from 'vue-component-type-helpers'

type InputProps = ComponentProps<typeof ShadcnInput>

interface Props {
  defaultValue?: InputProps['defaultValue']
  class?: InputProps['class']
}

defineModel<InputProps['modelValue']>()

defineProps<Props>()

defineComponent({
  name: "AtomInput",
})
</script>