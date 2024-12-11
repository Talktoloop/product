<script lang="ts" setup>
import type { Sheet } from '@ui/shadcn/sheet'
import type { ComponentProps } from 'vue-component-type-helpers'

type ShadcnSheetProps = ComponentProps<typeof Sheet>

interface Props extends ShadcnSheetProps {
  className?: string
  title?: string
  description?: string
}

const props = defineProps<Props>()

const forward = useForwardPropsEmits(props, undefined, [
  'className',
  'title',
  'description'
])
</script>

<template>
  <shadcn-sheet v-bind="forward">
    <shadcn-sheet-trigger v-if="$slots.trigger" as-child>
      <slot name="trigger" />
    </shadcn-sheet-trigger>
    <shadcn-sheet-content>
      <shadcn-sheet-header>
        <shadcn-sheet-title v-if="$slots.title || title">
          <slot name="title">
            {{ title }}
          </slot>
        </shadcn-sheet-title>
        <shadcn-sheet-description v-if="$slots.description || description">
          <slot name="description">
            {{ description }}
          </slot>
        </shadcn-sheet-description>
      </shadcn-sheet-header>
      <slot />
    </shadcn-sheet-content>
  </shadcn-sheet>
</template>