<template>
  <shadcn-navigation-menu v-bind="{ ...$props, ...$attrs }">
    <template #default>
      <slot />
    </template>
  </shadcn-navigation-menu>
</template>

<script setup lang="ts">
import type { ComponentProps, ComponentSlots } from 'vue-component-type-helpers'
import { NavigationMenu as ShadcnNavigationMenu } from "../shadcn/ui/navigation-menu"

type NavigationMenuProps = ComponentProps<typeof ShadcnNavigationMenu>
type NavigationMenuSlots = ComponentSlots<typeof ShadcnNavigationMenu>

interface Props {
  defaultValue?: NavigationMenuProps['defaultValue']
  value?: NavigationMenuProps['value']
  orientation?: NavigationMenuProps['orientation']
  class?: NavigationMenuProps['class']
}

defineProps<Props>()

defineSlots<NavigationMenuSlots>()

defineComponent({
  name: "MoleculeNavigationMenu",
})
</script>