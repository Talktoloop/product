<template>
  <shadcn-dialog v-bind="{ ...$props, ...$attrs }">
    <template #default>
      <slot />
    </template>
    <template #trigger>
      <slot name="trigger" />
    </template>
    <template #content>
      <slot name="content" />
    </template>
  </shadcn-dialog>
</template>

<script setup lang="ts">
import type { ComponentProps, ComponentSlots } from 'vue-component-type-helpers'
import { Dialog as ShadcnDialog } from "../shadcn/ui/dialog"

type DialogProps = ComponentProps<typeof ShadcnDialog>
type DialogSlots = ComponentSlots<typeof ShadcnDialog>

interface Props {
  open?: DialogProps['open']
  class?: DialogProps['class']
}

defineProps<Props>()

defineSlots<DialogSlots>()

defineComponent({
  name: "MoleculeDialog",
})
</script>