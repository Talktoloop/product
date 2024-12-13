<script lang="ts" setup generic="T extends string">
import type { NavigationItemMenu } from '@ui/atomic/types';
import { navigationMenuTriggerStyle } from '@ui/shadcn/navigation-menu';

interface Props {
  item: NavigationItemMenu<T>
}

const props = defineProps<Props>()

const rows = computed(() => !props.item.rows || props.item.rows === 'auto' ? Math.max(3, props.item.menu?.length ?? 0) : props.item.rows)

const contentRowSpan = computed(() =>
  cond(
    rows.value,
    [3, 'row-span-3'],
    [4, 'row-span-4'],
    [5, 'row-span-5'],
    [6, 'row-span-6']
  ))

</script>

<template>
  <shadcn-navigation-menu-item>
    <shadcn-navigation-menu-trigger>
      {{ item.label }}
    </shadcn-navigation-menu-trigger>
    <shadcn-navigation-menu-content>
      <ul class="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[minmax(0,.75fr)_minmax(0,1fr)]">
        <template v-if="item.slot?.id">
          <li :class="contentRowSpan">
            <NuxtLink v-if="item.slot.link" v-bind="item.slot.link">
              <shadcn-navigation-menu-link as-child :class="navigationMenuTriggerStyle()">
                <VariantContentTarget :id="item.slot.id" :value="item" />
              </shadcn-navigation-menu-link>
            </NuxtLink>
            <VariantContentTarget v-else :id="item.slot.id" :value="item" />
          </li>
        </template>
        <template v-if="item.menu && item.menu.length">
          <li v-for="subItem in item.menu" :key="subItem.id">
            <MoleculeMenuNavigationLink :item="subItem" :root="false" />
          </li>
        </template>
      </ul>
    </shadcn-navigation-menu-content>
  </shadcn-navigation-menu-item>
</template>
