<script lang="ts" setup>
import type { NavigationItem, NavigationItemMenu } from '@ui/base/types';

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

const contents = computed(() => props.items.filter(isNavigationItemMenu).filter(item => item.slot) as NavigationItemMenu<string>[])
</script>

<template>
  <shadcn-navigation-menu :orientation="orientation">
    <shadcn-navigation-menu-list v-if="items.length">
      <MoleculeMenuNavigationItem v-for="item in items" :key="item.id" :item="item" />
    </shadcn-navigation-menu-list>
  </shadcn-navigation-menu>
  <template v-for="content in contents" :key="content.id">
    <VariantContentSource v-if="content.slot?.id" :id="content.slot.id" v-slot="{ value }">
      <slot :name="content.slot.name" :item="value" />
    </VariantContentSource>
  </template>
</template>
