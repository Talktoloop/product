<script setup lang="ts">
import type { MenuItemMenu } from '@ui/atomic/types';

interface Props {
  item: MenuItemMenu
}

defineProps<Props>()
</script>

<template>
  <shadcn-menubar-sub>
    <shadcn-menubar-sub-trigger>
      {{ item.label }}
    </shadcn-menubar-sub-trigger>
    <shadcn-menubar-sub-content>
      <MoleculeMenuItem v-for="subItem in item.menu" :key="subItem.id" :item="subItem" />
    </shadcn-menubar-sub-content>
  </shadcn-menubar-sub>
</template>
