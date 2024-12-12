<script setup lang="ts">
import type { MenuItemMenu } from '@ui/atomic/types';

interface Props {
  item: MenuItemMenu
}

defineProps<Props>()
</script>

<template>
  <shadcn-menubar-menu>
    <shadcn-menubar-menu-trigger>
      {{ item.label }}
    </shadcn-menubar-menu-trigger>
    <shadcn-menubar-menu-content>
      <MoleculeMenuItem v-for="subItem in item.menu" :key="subItem.id" :item="subItem" />
    </shadcn-menubar-menu-content>
  </shadcn-menubar-menu>
</template>