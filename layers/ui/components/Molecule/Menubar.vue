<template>
  <shadcn-menubar v-bind="{ ...$props, ...$attrs }">
    <template #default>
      <slot />
    </template>
  </shadcn-menubar>
</template>

<script setup lang="ts">
import type { ComponentProps, ComponentSlots } from 'vue-component-type-helpers'
import { Menubar as ShadcnMenubar } from "../shadcn/ui/menubar"

type MenubarProps = ComponentProps<typeof ShadcnMenubar>
type MenubarSlots = ComponentSlots<typeof ShadcnMenubar>

interface Props {
  defaultValue?: MenubarProps['defaultValue']
  value?: MenubarProps['value']
  loop?: MenubarProps['loop']
  class?: MenubarProps['class']
}

defineProps<Props>()

defineSlots<MenubarSlots>()

defineComponent({
  name: "MoleculeMenubar",
})
</script>