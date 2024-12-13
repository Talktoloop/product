<script lang="ts" setup>
import type { NavigationItem, NavigationItemContent } from '@ui/atomic/types';

defineOptions({
  name: 'MoleculeMenuNavigation',
})

interface Props {
  orientation?: 'horizontal' | 'vertical'
  items: NavigationItem<string>[]
}

const props = withDefaults(defineProps<Props>(), {
  orientation: 'horizontal',
})

const contents = computed(() => props.items.filter(isNavigationItemContent) as NavigationItemContent<string>[])
</script>

<template>
  <shadcn-navigation-menu :orientation="orientation">
    <shadcn-navigation-menu-list v-if="items.length">
      <MoleculeMenuNavigationItem v-for="item in items" :key="item.id" :item="item" />
    </shadcn-navigation-menu-list>
  </shadcn-navigation-menu>
  <template v-for="content in contents" :key="content.id">
    <VariantContentSource :id="content.id" v-slot="{ value }">
      <slot :name="content.slot" :attrs="value" />
    </VariantContentSource>
  </template>
</template>
