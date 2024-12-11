<script lang="ts" setup>
import type { Tooltip as ShadcnTooltip } from '@ui/shadcn/tooltip'
import type { ComponentEmit, ComponentProps } from 'vue-component-type-helpers'

type ShadcnTooltipProps = ComponentProps<typeof ShadcnTooltip>
type _ShadcnTooltipEmits = ComponentEmit<typeof ShadcnTooltip>

interface Props extends ShadcnTooltipProps {
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
  <shadcn-tooltip v-bind="forward">
    <shadcn-tooltip-trigger v-if="$slots.trigger || trigger" as-child>
      <slot name="trigger">
        {{ trigger }}
      </slot>
    </shadcn-tooltip-trigger>
    <shadcn-tooltip-content v-if="$slots.content || content">
      <slot name="content">
        {{ content }}
      </slot>
    </shadcn-tooltip-content>
    <slot />
  </shadcn-tooltip>
</template>