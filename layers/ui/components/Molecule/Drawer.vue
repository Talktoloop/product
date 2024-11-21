<template>
  <shadcn-drawer v-bind="{ ...$props, ...$attrs }">
    <template #default>
      <slot />
    </template>
    <template #trigger>
      <slot name="trigger" />
    </template>
    <template #content>
      <slot name="content" />
    </template>
  </shadcn-drawer>
</template>

<script setup lang="ts">
import type { ComponentProps, ComponentSlots } from 'vue-component-type-helpers'
import { Drawer as ShadcnDrawer } from "../shadcn/ui/drawer"

type DrawerProps = ComponentProps<typeof ShadcnDrawer>
type DrawerSlots = ComponentSlots<typeof ShadcnDrawer>

interface Props {
  open?: DrawerProps['open']
  side?: DrawerProps['side']
  class?: DrawerProps['class']
}

defineProps<Props>()

defineSlots<DrawerSlots>()

defineComponent({
  name: "MoleculeDrawer",
})
</script>