<template>
  <shadcn-dropdown-menu v-bind="{ ...$props, ...$attrs }">
    <template #default>
      <slot />
    </template>
    <template #trigger>
      <slot name="trigger" />
    </template>
    <template #content>
      <slot name="content" />
    </template>
  </shadcn-dropdown-menu>
</template>

<script setup lang="ts">
import type { ComponentProps, ComponentSlots } from 'vue-component-type-helpers'
import { DropdownMenu as ShadcnDropdownMenu } from "../shadcn/ui/dropdown-menu"

type DropdownMenuProps = ComponentProps<typeof ShadcnDropdownMenu>
type DropdownMenuSlots = ComponentSlots<typeof ShadcnDropdownMenu>

interface Props {
  open?: DropdownMenuProps['open']
  class?: DropdownMenuProps['class']
}

defineProps<Props>()

defineSlots<DropdownMenuSlots>()

defineComponent({
  name: "MoleculeDropdownMenu",
})
</script>