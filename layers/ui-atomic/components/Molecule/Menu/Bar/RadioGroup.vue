<script setup lang="ts">
import type { MenuItemRadioGroup } from '@ui/atomic/types';

interface Props {
  item: MenuItemRadioGroup
}

defineProps<Props>()

</script>

<template>
  <shadcn-menubar-radio-group v-bind="{ ...$attrs }" :value="item.value">
    <shadcn-menubar-radio-item v-for="radio in item.items" :key="radio.value" :value="radio.value" />
  </shadcn-menubar-radio-group>
</template>
