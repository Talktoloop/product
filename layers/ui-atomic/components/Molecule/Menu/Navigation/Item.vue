<script lang="ts" setup generic="T extends string">
import type { NavigationItem } from '@ui/atomic/types'

defineOptions({
  name: 'MoleculeMenuNavigationItem',
})

interface Props {
  item: NavigationItem<T>
}

defineProps<Props>()
</script>

<template>
  <VariantAssembly :value="item" :variants="navigationItemVariants">
    <template #link="{ attrs, variant: { value } }">
      <MoleculeMenuNavigationLink :item="value" :root="true" v-bind="attrs" />
    </template>

    <template #content="{ attrs, variant: { value } }">
      <MoleculeMenuNavigationMenu :item="value" v-bind="attrs" />
    </template>
  </VariantAssembly>
</template>
