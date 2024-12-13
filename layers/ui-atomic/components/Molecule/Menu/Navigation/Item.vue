<script lang="ts" setup generic="T extends string">
import type { NavigationItem } from '@ui/atomic/types'
import { navigationMenuTriggerStyle } from '@ui/shadcn/navigation-menu';

defineOptions({
  name: 'MoleculeMenuNavigationItem',
})

interface Props {
  item: NavigationItem<T>
}

defineProps<Props>()
</script>

<template>
  <shadcn-navigation-menu-item :disabled="item.disabled">
    <VariantAssembly :value="item" :variants="navigationItemVariants">
      <template #link="{ attrs, variant: { value } }">
        <NuxtLink v-bind="value.link">
          <shadcn-navigation-menu-link v-bind="attrs" :class="navigationMenuTriggerStyle()">
            <component :is="value.icon" v-if="value.icon" class="mr-2 h-4 w-4" />
            {{ value.label }}
          </shadcn-navigation-menu-link>
        </NuxtLink>
      </template>

      <template #content="{ attrs, variant: { value } }">
        <shadcn-navigation-menu-trigger :disabled="value.disabled">
          <component :is="value.icon" v-if="value.icon" class="mr-2 h-4 w-4" />
          {{ value.label }}
        </shadcn-navigation-menu-trigger>
        <shadcn-navigation-menu-content>
          <VariantContentTarget :id="value.id" :value="attrs" />
        </shadcn-navigation-menu-content>
      </template>
    </VariantAssembly>
  </shadcn-navigation-menu-item>
</template>