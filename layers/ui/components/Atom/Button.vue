<template>
  <shadcn-ui-button v-bind="$attrs">
    <slot />
  </shadcn-ui-button>
</template>
<script setup lang="ts">
import type { ButtonVariants } from "../shadcn/ui/button"

interface Props {
  variant?: ButtonVariants["variant"]
  size?: ButtonVariants["size"]
}

defineProps<Props>()

defineSlots<{
  default?(): string
}>()

defineComponent({
  name: "AtomButton",
})
</script>
