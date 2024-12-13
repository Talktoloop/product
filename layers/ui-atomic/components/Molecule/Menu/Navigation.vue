<script lang="ts" setup>
import type { NavigationItem } from '@ui/atomic/types';

defineOptions({
  name: 'MoleculeMenuNavigation',
})

interface Props {
  orientation?: 'horizontal' | 'vertical'
  items?: NavigationItem[]
}

defineProps<Props>()
</script>

<template>
  <shadcn-navigation-menu :orientation="orientation">
    <shadcn-navigation-menu-list v-if="items?.length">
      <MoleculeMenuNavigationItem v-for="item in items" :key="item.id" :item="item" />
    </shadcn-navigation-menu-list>
  </shadcn-navigation-menu>
</template>