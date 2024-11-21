<template>
  <shadcn-button v-bind="{ ...$props, ...$attrs }">
    <slot />
  </shadcn-button>
</template>

<script setup lang="ts">
import type { Button as ShadcnButton } from "../shadcn/ui/button"
import type { ComponentProps } from 'vue-component-type-helpers'

type ButtonProps = ComponentProps<typeof ShadcnButton>

interface Props {
  variant?: ButtonProps['variant']
  size?: ButtonProps['size']
  asChild?: ButtonProps['asChild']
  as?: ButtonProps['as']
  class?: ButtonProps['class']
}

defineProps<Props>()

defineSlots<{
  default?(): string
}>()

defineComponent({
  name: "AtomButton",
})
</script>
