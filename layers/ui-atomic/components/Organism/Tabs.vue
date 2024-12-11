<script lang="ts" setup>
import type { TabsRootProps } from 'radix-vue'

interface TabItem {
  value: string
  label: string
  content: string | string[]
  name?: string
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
        <slot v-if="item.name" :name="`${item.name}-trigger`">
          {{ item.label }}
        </slot>
        <template v-else>
          {{ item.label }}
        </template>
      </shadcn-tabs-trigger>
    </shadcn-tabs-list>
    <shadcn-tabs-content v-for="item in items" :key="item.value" :value="item.value">
      <slot v-if="item.name" :name="item.name">
        <template v-if="Array.isArray(item.content)">
          <p v-for="(line, i) in item.content" :key="i">{{ line }}</p>
        </template>
        <template v-else>
          {{ item.content }}
        </template>
      </slot>
      <template v-else>
        <template v-if="Array.isArray(item.content)">
          <p v-for="(line, i) in item.content" :key="i">{{ line }}</p>
        </template>
        <template v-else>
          {{ item.content }}
        </template>
      </template>
    </shadcn-tabs-content>
  </shadcn-tabs>
</template>