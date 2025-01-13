<script lang="ts" setup>
import type { TooltipRootProps, TooltipRootEmits } from 'radix-vue'

defineOptions({
  name: 'MoleculeTooltip',
})

interface Props extends TooltipRootProps {
  content?: string
}

const props = defineProps<Props>()
const model = defineModel<boolean>()
const emit = defineEmits<TooltipRootEmits>()

const forward = useForwardPropsEmits<Props, 'update:open'>(props, emit, ['content'])
</script>

<template>
  <shadcn-tooltip-provider>
    <shadcn-tooltip v-bind="forward" v-model="model" as-child>
      <shadcn-tooltip-trigger as-child>
        <slot />
      </shadcn-tooltip-trigger>
      <shadcn-tooltip-content v-if="$slots.content || content">
        <slot name="content">
          <p>{{ content }}</p>
        </slot>
      </shadcn-tooltip-content>
    </shadcn-tooltip>
  </shadcn-tooltip-provider>
</template>
