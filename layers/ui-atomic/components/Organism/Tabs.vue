<script lang="ts" setup>
import type { TabsRootProps } from 'radix-vue'

defineOptions({
  name: 'OrganismTabs',
})

interface TabItem {
  value: string
  label?: string
  content?: string | string[]
}

interface Props extends TabsRootProps {
  items: TabItem[]
}

const props = defineProps<Props>()

const forward = useForwardPropsEmits(props, undefined, ['items'])
</script>

<template>
  <shadcn-tabs v-bind="forward">
    <shadcn-tabs-list>
      <shadcn-tabs-trigger v-for="item in items" :key="item.value" :value="item.value">
        <slot :name="`${item.value}-trigger`" :label="item.label">
          {{ item.label }}
        </slot>
      </shadcn-tabs-trigger>
    </shadcn-tabs-list>
    <shadcn-tabs-content v-for="item in items" :key="item.value" :value="item.value">
      <slot :name="`${item.value}-content`">
        <template v-if="Array.isArray(item.content)">
          <p v-for="(line, i) in item.content" :key="i">{{ line }}</p>
        </template>
        <template v-else>
          {{ item.content }}
        </template>
      </slot>
    </shadcn-tabs-content>
  </shadcn-tabs>
</template>