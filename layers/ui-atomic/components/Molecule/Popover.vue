<script lang="ts" setup>
import type { Popover as ShadcnPopover } from '@ui/shadcn/popover'
import type { ComponentEmit, ComponentProps } from 'vue-component-type-helpers'

type ShadcnPopoverProps = ComponentProps<typeof ShadcnPopover>
type _ShadcnPopoverEmits = ComponentEmit<typeof ShadcnPopover>

interface Props extends ShadcnPopoverProps {
  trigger?: string
  content?: string
}

const props = defineProps<Props>()
const emit = defineEmits<{
  'update:modelValue': [unknown]
}>()

const forward = useForwardPropsEmits(props, emit)
</script>

<template>
  <shadcn-popover v-bind="forward">
    <shadcn-popover-trigger v-if="$slots.trigger || trigger" as-child>
      <slot name="trigger">
        {{ trigger }}
      </slot>
    </shadcn-popover-trigger>
    <shadcn-popover-content v-if="$slots.content || content">
      <slot name="content">
        {{ content }}
      </slot>
    </shadcn-popover-content>
    <slot />
  </shadcn-popover>
</template>