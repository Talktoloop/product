<template>
  <shadcn-alert v-bind="$attrs">
    <template #default>
      <slot />
    </template>
    <template #title>
      <slot name="title" />
    </template>
    <template #description>
      <slot name="description" />
    </template>
  </shadcn-alert>
</template>

<script setup lang="ts">
import type { AlertVariants } from "../shadcn/ui/alert"
import type { ComponentProps, ComponentSlots } from 'vue-component-type-helpers'
import { Alert as ShadcnAlert } from "../shadcn/ui/alert"

type AlertProps = ComponentProps<typeof ShadcnAlert>
type AlertSlots = ComponentSlots<typeof ShadcnAlert>
interface Props extends AlertProps {
  variant?: AlertVariants["variant"]
}

defineProps<Props>()

defineSlots<AlertSlots>()

defineComponent({
  name: "MoleculeAlert",
})
</script>