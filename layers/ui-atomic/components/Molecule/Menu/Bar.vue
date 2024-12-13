<script lang="ts" setup>
import type { MenubarRootEmits, MenubarRootProps } from 'radix-vue';
import type { Emits } from '../../../composables/useForwardPropsEmits';
import type { MenuItemMenu } from '@ui/atomic/types';

defineOptions({
  name: 'MoleculeMenuBar',
})

interface Props extends MenubarRootProps {
  menu: MenuItemMenu[]
}

const props = defineProps<Props>()
const emit = defineEmits<MenubarRootEmits>()

const forward = useForwardPropsEmits(props, emit as Emits<string, unknown[]>, ['menu'])
</script>

<template>
  <shadcn-menubar v-bind="forward">
    <MoleculeMenuBarItem v-for="item in menu" :key="item.id" :item="item" :root="true" />
  </shadcn-menubar>
</template>
