<template>
  <shadcn-alert-dialog v-bind="{ ...$props, ...$attrs }">
    <template #default>
      <slot />
    </template>
    <template #trigger>
      <slot name="trigger" />
    </template>
    <template #content>
      <slot name="content" />
    </template>
  </shadcn-alert-dialog>
</template>

<script setup lang="ts">
import type { ComponentProps, ComponentSlots } from 'vue-component-type-helpers'
import { AlertDialog as ShadcnAlertDialog } from "../shadcn/ui/alert-dialog"

type AlertDialogProps = ComponentProps<typeof ShadcnAlertDialog>
type AlertDialogSlots = ComponentSlots<typeof ShadcnAlertDialog>

interface Props {
  open?: AlertDialogProps['open']
  class?: AlertDialogProps['class']
}

defineProps<Props>()

defineSlots<AlertDialogSlots>()

defineComponent({
  name: "MoleculeAlertDialog",
})
</script>