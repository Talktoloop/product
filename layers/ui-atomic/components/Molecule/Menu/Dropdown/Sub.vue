<script lang="ts" setup>
import type { DropdownMenuSubProps } from 'radix-vue'
import type { MenuItemMenu } from '@ui/atomic/types'

interface Props extends DropdownMenuSubProps {
  item: MenuItemMenu
}

defineProps<Props>()
</script>

<template>
  <shadcn-dropdown-menu-sub v-bind="$attrs">
    <shadcn-dropdown-menu-sub-trigger :disabled="item.disabled">
      {{ item.label }}
      <shadcn-dropdown-menu-shortcut v-if="item.shortcut">
        {{ item.shortcut }}
      </shadcn-dropdown-menu-shortcut>
    </shadcn-dropdown-menu-sub-trigger>
    <shadcn-dropdown-menu-sub-content>
      <MoleculeMenuDropdownItem v-for="subItem in item.menu" :key="subItem.id" :item="subItem" />
    </shadcn-dropdown-menu-sub-content>
  </shadcn-dropdown-menu-sub>
</template>