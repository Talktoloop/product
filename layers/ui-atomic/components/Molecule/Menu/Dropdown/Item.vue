<script lang="ts" setup>
import type { DropdownMenuItemProps } from 'radix-vue'
import type { MenuItem } from '@ui/atomic/types'

interface Props extends DropdownMenuItemProps {
  item: MenuItem
}

defineProps<Props>()

</script>

<template>
  <VariantAssembly :value="item" :variants="menuItemVariants">
    <template #item="{ variant: { value } }">
      <shadcn-dropdown-menu-item v-bind="$attrs" :disabled="value.disabled">
        <component :is="value.icon" v-if="value.icon" class="mr-2 h-4 w-4" />
        <span :class="{ 'ml-6': value.inset }">{{ value.label }}</span>
        <span v-if="value.shortcut" class="ml-auto text-xs tracking-widest opacity-60">
          {{ value.shortcut }}
        </span>
      </shadcn-dropdown-menu-item>
    </template>
    <template #menu="{ variant: { value } }">
      <MoleculeMenuDropdownSub :item="value" />
    </template>
    <template #checkbox="{ variant: { value } }">
      <MoleculeMenuDropdownCheckboxItem :item="value" />
    </template>
    <template #radioGroup="{ variant: { value } }">
      <MoleculeMenuDropdownRadioGroup :item="value" />
    </template>
    <template #separator>
      <shadcn-dropdown-menu-separator />
    </template>
  </VariantAssembly>
</template>