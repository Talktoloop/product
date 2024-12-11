<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'

defineOptions({
  name: 'MoleculeCard',
})

type ShadcnCardProps = {
  class?: HTMLAttributes['class']
}

interface Props extends ShadcnCardProps {
  title?: string
  description?: string
  content?: string
  header?: string
  footer?: string
}

const props = defineProps<Props>()

const forward = useForwardPropsEmits(props, undefined, [
  'title',
  'description',
  'content',
  'header',
  'footer'
])
</script>

<template>
  <shadcn-card v-bind="forward">
    <shadcn-card-header v-if="$slots.header || header">
      <slot name="header">
        {{ header }}
      </slot>
    </shadcn-card-header>
    <shadcn-card-title v-if="$slots.title || title">
      <slot name="title">
        {{ title }}
      </slot>
    </shadcn-card-title>
    <shadcn-card-description v-if="$slots.description || description">
      <slot name="description">
        {{ description }}
      </slot>
    </shadcn-card-description>
    <shadcn-card-content v-if="$slots.content || content">
      <slot name="content">
        {{ content }}
      </slot>
    </shadcn-card-content>
    <shadcn-card-footer v-if="$slots.footer || footer">
      <slot name="footer">
        {{ footer }}
      </slot>
    </shadcn-card-footer>
    <slot />
  </shadcn-card>
</template>