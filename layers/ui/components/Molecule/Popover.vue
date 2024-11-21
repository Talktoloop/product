<template>
  <shadcn-popover v-bind="{ ...$props, ...$attrs }">
    <template #default>
      <slot />
    </template>
    <template #trigger>
      <slot name="trigger" />
    </template>
    <template #content>
      <slot name="content" />
    </template>
  </shadcn-popover>
</template>

<script setup lang="ts">
import type { ComponentProps, ComponentSlots } from 'vue-component-type-helpers'
import { Popover as ShadcnPopover } from "../shadcn/ui/popover"

type PopoverProps = ComponentProps<typeof ShadcnPopover>
type PopoverSlots = ComponentSlots<typeof ShadcnPopover>

interface Props {
  open?: PopoverProps['open']
  defaultOpen?: PopoverProps['defaultOpen']
  modal?: PopoverProps['modal']
  class?: PopoverProps['class']
}

defineProps<Props>()

defineSlots<PopoverSlots>()

defineComponent({
  name: "MoleculePopover",
})
</script>