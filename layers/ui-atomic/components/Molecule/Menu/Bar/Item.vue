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

const variants = {
  separator: isMenuItemSeparator,
  checkbox: isMenuItemCheckbox,
  radioGroup: isMenuItemRadioGroup,
  menu: isMenuItemMenu,
  item: isMenuItemMenuItem,
}

</script>

<template>
  <VariantAssembly :value="item" :variants="variants">
    <template #separator="{ attrs }">
      <shadcn-menubar-separator v-bind="{ ...options, ...attrs }" />
    </template>
    <template #checkbox="{ attrs, variant: { value } }">
      <shadcn-menubar-checkbox-item :checked="value.checked" v-bind="{ ...options, ...attrs }" />
    </template>
    <template #radioGroup="{ attrs, variant: { value } }">
      <MoleculeMenuBarRadioGroup :item="value" v-bind="{ ...options, ...attrs }" />
    </template>
    <template #menu="{ attrs, variant: { value } }">
      <MoleculeMenuBarMenu v-if="root" :item="value" v-bind="{ ...options, ...attrs }" />
      <MoleculeMenuBarSub v-else :item="value" v-bind="{ ...options, ...attrs }" />
    </template>
    <template #item="{ attrs, variant: { value } }">
      <shadcn-menubar-item v-bind="{ ...options, ...attrs }">
        {{ value.label }}
        <shadcn-menubar-item-shortcut v-if="value.shortcut">
          {{ value.shortcut }}
        </shadcn-menubar-item-shortcut>
      </shadcn-menubar-item>
    </template>
    <template #default="{ attrs, variant: { value } }">
      <shadcn-menubar-item v-bind="{ ...options, ...attrs }">
        Unknown item: {{ JSON.stringify(value) }}
      </shadcn-menubar-item>
    </template>
  </VariantAssembly>
</template>
