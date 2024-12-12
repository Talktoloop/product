<script setup lang="ts">
import type { MenuItemMenu } from '@ui/atomic/types';

interface Props {
  item: MenuItemMenu
}

defineProps<Props>()
</script>

<template>
  <shadcn-menubar-menu>
    <shadcn-menubar-trigger>
      {{ item.label }}
      <shadcn-menubar-shortcut v-if="item.shortcut">
        {{ item.shortcut }}
      </shadcn-menubar-shortcut>
    </shadcn-menubar-trigger>
    <shadcn-menubar-content>
      <MoleculeMenuBarItem v-for="subItem in item.menu" :key="subItem.id" :item="subItem" />
    </shadcn-menubar-content>
  </shadcn-menubar-menu>
</template>