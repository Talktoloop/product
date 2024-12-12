<script setup lang="ts">
import type { MenuItem } from '@ui/atomic/types';

interface Props {
  item: MenuItem
  root?: boolean
}

const props = defineProps<Props>()

const options = computed(() => ({
  disabled: props.item.disabled,
  inset: props.item.inset,
}))

</script>

<template>
  <shadcn-menubar-separator v-if="isMenuItemSeparator(item)" v-bind="{ ...options, ...$attrs }" />
  <shadcn-menubar-checkbox
v-else-if="isMenuItemCheckbox(item)" :checked="item.checked"
    v-bind="{ ...options, ...$attrs }" />
  <MoleculeMenuBarRadioGroup v-else-if="isMenuItemRadioGroup(item)" :item="item" v-bind="{ ...options, ...$attrs }" />
  <MoleculeMenuBarMenu v-else-if="isMenuItemMenu(item) && root" :item="item" v-bind="{ ...options, ...$attrs }" />
  <MoleculeMenuBarSub v-else-if="isMenuItemMenu(item)" :item="item" v-bind="{ ...options, ...$attrs }" />
  <shadcn-menubar-item v-else v-bind="{ ...options, ...$attrs }">
    {{ item.label }}
    <shadcn-menubar-item-shortcut v-if="item.shortcut">
      {{ item.shortcut }}
    </shadcn-menubar-item-shortcut>
  </shadcn-menubar-item>
</template>
