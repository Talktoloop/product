<script lang="ts" setup>
import type { AccordionRootProps } from 'radix-vue';

defineOptions({
  name: 'OrganismAccordion',
})

interface AccordionItem {
  value: string
  trigger?: string
  content?: string | string[]
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
        <slot :name="`${item.value}-trigger`">
          {{ item.trigger }}
        </slot>
      </shadcn-accordion-trigger>
      <shadcn-accordion-content>
        <slot :name="`${item.value}-content`">
          <template v-if="Array.isArray(item.content)">
            <p v-for="(line, i) in item.content" :key="i">{{ line }}</p>
          </template>
          <template v-else-if="item.content">
            {{ item.content }}
          </template>
        </slot>
      </shadcn-accordion-content>
    </shadcn-accordion-item>
  </shadcn-accordion>
</template>
