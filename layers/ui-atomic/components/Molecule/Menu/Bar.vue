<script lang="ts" setup>
import type { MenubarRootEmits, MenubarRootProps } from 'radix-vue';
import type { Emits } from '../../../composables/useForwardPropsEmits';


interface Props extends MenubarRootProps {
  trigger?: string
  content?: string
}

const props = defineProps<Props>()
const emit = defineEmits<MenubarRootEmits>()

const forward = useForwardPropsEmits(props, emit as Emits<string, unknown[]>, ['trigger', 'content'])
</script>

<template>
  <shadcn-menubar v-bind="forward">
    <shadcn-menubar-trigger v-if="$slots.trigger || trigger" as-child>
      <slot name="trigger">
        {{ trigger }}
      </slot>
    </shadcn-menubar-trigger>
    <shadcn-menubar-content v-if="$slots.content || content">
      <slot name="content">
        {{ content }}
      </slot>
    </shadcn-menubar-content>
    <slot />
  </shadcn-menubar>
</template>