<script lang="ts" setup>
import type { NavigationMenu as ShadcnNavigationMenu } from '@ui/shadcn/navigation-menu'
import type { NavigationMenuRootProps } from 'radix-vue';

interface Props extends NavigationMenuRootProps {
  orientation?: 'horizontal' | 'vertical'
  trigger?: string
  content?: string
  list?: string
}

const props = defineProps<Props>()
const forward = useForwardPropsEmits(props, undefined, ['orientation', 'trigger', 'content', 'list'])
</script>

<template>
  <shadcn-navigation-menu v-bind="forward">
    <shadcn-navigation-menu-trigger v-if="$slots.trigger || trigger" as-child>
      <slot name="trigger">
        {{ trigger }}
      </slot>
    </shadcn-navigation-menu-trigger>
    <shadcn-navigation-menu-list v-if="$slots.list || list">
      <slot name="list">
        {{ list }}
      </slot>
    </shadcn-navigation-menu-list>
    <shadcn-navigation-menu-content v-if="$slots.content || content">
      <slot name="content">
        {{ content }}
      </slot>
    </shadcn-navigation-menu-content>
    <slot />
  </shadcn-navigation-menu>
</template>