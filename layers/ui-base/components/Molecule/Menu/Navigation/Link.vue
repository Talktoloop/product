<script lang="ts" setup generic="T extends string">
import type { NavigationItemLink } from '@ui/base/types';
import { navigationMenuTriggerStyle } from '@ui/shadcn/navigation-menu';

interface Props {
  item: NavigationItemLink<T>
  root?: boolean
}

withDefaults(defineProps<Props>(), {
  root: true,
})
</script>

<template>
  <shadcn-navigation-menu-item v-if="root" :disabled="item.disabled">
    <NuxtLink v-bind="item.link">
      <shadcn-navigation-menu-link :class="navigationMenuTriggerStyle()">
        <component :is="item.icon" v-if="item.icon" class="mr-2 h-4 w-4" />
        {{ item.label }}
      </shadcn-navigation-menu-link>
    </NuxtLink>
  </shadcn-navigation-menu-item>
  <NuxtLink v-else v-bind="item.link">
    <shadcn-navigation-menu-link :class="navigationMenuTriggerStyle()">
      <component :is="item.icon" v-if="item.icon" class="mr-2 h-4 w-4" />
      {{ item.label }}
    </shadcn-navigation-menu-link>
  </NuxtLink>
</template>
