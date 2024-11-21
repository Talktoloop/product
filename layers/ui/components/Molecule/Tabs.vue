<template>
  <shadcn-tabs v-bind="{ ...$props, ...$attrs }">
    <template #default>
      <slot />
    </template>
    <template #list>
      <slot name="list" />
    </template>
    <template #content>
      <slot name="content" />
    </template>
  </shadcn-tabs>
</template>

<script setup lang="ts">
import type { ComponentProps, ComponentSlots } from 'vue-component-type-helpers'
import { Tabs as ShadcnTabs } from "../shadcn/ui/tabs"

type TabsProps = ComponentProps<typeof ShadcnTabs>
type TabsSlots = ComponentSlots<typeof ShadcnTabs>

interface Props {
  modelValue?: TabsProps['modelValue']
  defaultValue?: TabsProps['defaultValue']
  orientation?: TabsProps['orientation']
  activationMode?: TabsProps['activationMode']
  class?: TabsProps['class']
}

defineProps<Props>()

defineSlots<TabsSlots>()

defineComponent({
  name: "MoleculeTabs",
})
</script>