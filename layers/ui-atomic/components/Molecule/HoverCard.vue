<script lang="ts" setup>
import type { HoverCardRootEmits, HoverCardRootProps } from 'radix-vue'

defineOptions({
  name: 'MoleculeHoverCard',
})

interface Props extends HoverCardRootProps {
  trigger?: string
  content?: string
}

const props = defineProps<Props>()
const emit = defineEmits<HoverCardRootEmits>()

const forward = useForwardPropsEmits<Props, 'update:open'>(props, emit, ['trigger', 'content'])
</script>

<template>
  <shadcn-hover-card v-bind="forward">
    <shadcn-hover-card-trigger v-if="$slots.trigger || trigger" as-child>
      <slot name="trigger">
        {{ trigger }}
      </slot>
    </shadcn-hover-card-trigger>
    <shadcn-hover-card-content v-if="$slots.content || content">
      <slot name="content">
        {{ content }}
      </slot>
    </shadcn-hover-card-content>
    <slot />
  </shadcn-hover-card>
</template>