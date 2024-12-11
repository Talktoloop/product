<script lang="ts" setup>
import type { AccordionRootProps } from 'radix-vue';

interface AccordionItem {
  value: string
  trigger: string
  content: string | string[]
  name?: string
}

interface Props extends AccordionRootProps {
  items: AccordionItem[]
}

const props = defineProps<Props>()

const forward = useForwardPropsEmits(props, undefined, ['items'])
</script>

<template>
  <shadcn-accordion v-bind="forward">
    <shadcn-accordion-item v-for="item in items" :key="item.value" :value="item.value">
      <shadcn-accordion-trigger>
        <slot v-if="item.name" :name="`${item.name}-trigger`">
          {{ item.trigger }}
        </slot>
        <template v-else>
          {{ item.trigger }}
        </template>
      </shadcn-accordion-trigger>
      <shadcn-accordion-content>
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
      </shadcn-accordion-content>
    </shadcn-accordion-item>
  </shadcn-accordion>
</template>
