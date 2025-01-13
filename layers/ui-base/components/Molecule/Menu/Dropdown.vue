<script lang="ts" setup>
import type { DropdownMenuRootEmits, DropdownMenuRootProps } from 'radix-vue';
import type { Emits } from '../../../composables/useForwardPropsEmits';
import type { MenuItem } from '@ui/base/types';

defineOptions({
  name: 'MoleculeMenuDropdown',
})

interface Props extends DropdownMenuRootProps {
  modal?: boolean
  menu: MenuItem[]
}

const props = defineProps<Props>()
const emit = defineEmits<DropdownMenuRootEmits>()

const forward = useForwardPropsEmits(props, emit as Emits<string, unknown[]>, ['modal', 'menu'])
</script>

<template>
  <shadcn-dropdown-menu v-bind="forward">
    <shadcn-dropdown-menu-trigger v-if="$slots.trigger" as-child>
      <slot name="trigger" />
    </shadcn-dropdown-menu-trigger>
    <shadcn-dropdown-menu-content>
      <MoleculeMenuDropdownItem v-for="item in menu" :key="item.id" :item="item" />
    </shadcn-dropdown-menu-content>
    <slot />
  </shadcn-dropdown-menu>
</template>