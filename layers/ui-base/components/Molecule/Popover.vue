<script lang="ts" setup>
import type { Popover as ShadcnPopover } from '@ui/shadcn/popover'
import type { PopoverRootProps } from 'radix-vue';

defineOptions({
  name: 'MoleculePopover',
})

interface Props extends PopoverRootProps {
  trigger?: string
  content?: string
}

const props = defineProps<Props>()
const model = defineModel<boolean>()

const forward = useForwardPropsEmits(props)
</script>

<template>
  <shadcn-popover v-bind="forward" v-model="model">
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