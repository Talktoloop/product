<template>
  <shadcn-toast v-bind="{ ...$props, ...$attrs }">
    <template #default>
      <slot />
    </template>
    <template #title>
      <slot name="title" />
    </template>
    <template #description>
      <slot name="description" />
    </template>
    <template #action>
      <slot name="action" />
    </template>
  </shadcn-toast>
</template>

<script setup lang="ts">
import type { ComponentProps, ComponentSlots } from 'vue-component-type-helpers'
import { Toast as ShadcnToast } from "../shadcn/ui/toast"

type ToastProps = ComponentProps<typeof ShadcnToast>
type ToastSlots = ComponentSlots<typeof ShadcnToast>

interface Props {
  open?: ToastProps['open']
  duration?: ToastProps['duration']
  variant?: ToastProps['variant']
  class?: ToastProps['class']
}

defineProps<Props>()

defineSlots<ToastSlots>()

defineComponent({
  name: "MoleculeToast",
})
</script>