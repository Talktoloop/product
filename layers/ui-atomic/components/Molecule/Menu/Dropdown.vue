<script lang="ts" setup>
import type { DropdownMenuRootEmits, DropdownMenuRootProps } from 'radix-vue';
import type { Emits } from '../../../composables/useForwardPropsEmits';

interface Props extends DropdownMenuRootProps {
  modal?: boolean
  trigger?: string
  content?: string
}

const props = defineProps<Props>()
const emit = defineEmits<DropdownMenuRootEmits>()

const forward = useForwardPropsEmits(props, emit as Emits<string, unknown[]>, ['modal', 'trigger', 'content'])
</script>

<template>
  <shadcn-dropdown-menu v-bind="forward">
    <shadcn-dropdown-menu-trigger v-if="$slots.trigger || trigger" as-child>
      <slot name="trigger">
        {{ trigger }}
      </slot>
    </shadcn-dropdown-menu-trigger>
    <shadcn-dropdown-menu-content v-if="$slots.content || content">
      <slot name="content">
        {{ content }}
      </slot>
    </shadcn-dropdown-menu-content>
    <slot />
  </shadcn-dropdown-menu>
</template>