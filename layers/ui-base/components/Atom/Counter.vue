<template>
  <div class="inline-flex items-center justify-center min-w-[1.25rem] h-5 px-1 rounded-full text-xs font-medium"
    :class="shadeClasses">
    <slot>
      <span v-if="!checked">{{ count }}</span>
      <CheckIcon v-else class="h-3 w-3" />
    </slot>
  </div>
</template>

<script setup lang="ts">
import { CheckIcon } from 'lucide-vue-next'

defineOptions({
  name: 'AtomCounter',
})

interface Props {
  /**
   * The numeric value to display in the counter
   */
  count?: number
  /**
   * Whether to show a check icon instead of a number
   */
  checked?: boolean
  /**
   * The visual style variant of the counter
   * @default 'primary'
   */
  variant?: 'primary' | 'default'
  /**
   * The intensity of the background color
   * - dark: 700 shade
   * - medium: DEFAULT shade
   * - light: 300 shade
   * @default 'medium'
   */
  shade?: 'dark' | 'medium' | 'light'
  /**
   * Whether the counter is in a disabled state
   * @default false
   */
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  shade: 'medium',
  disabled: false,
  checked: undefined,
  count: undefined,
})

const shadeClasses = computed(() => {
  if (props.disabled) {
    return tw`bg-button-ghost-disabled text-button-ghost-foreground dark:bg-dark-button-ghost-disabled dark:text-dark-button-ghost-foreground`
  }
  if (props.variant === 'primary') {
    switch (props.shade) {
      case 'dark':
        return tw`bg-button-primary-active text-button-primary-foreground dark:bg-dark-button-primary-active dark:text-dark-button-primary-foreground`
      case 'light':
        return tw`bg-button-primary-disabled text-button-primary-foreground dark:bg-dark-button-primary-disabled dark:text-dark-button-primary-foreground`
      default: // medium
        return tw`bg-button-primary text-button-primary-foreground dark:bg-dark-button-primary dark:text-dark-button-primary-foreground`
    }
  } else {
    switch (props.shade) {
      case 'dark':
        return tw`bg-button-secondary-active text-button-secondary-foreground dark:bg-dark-button-secondary-active dark:text-dark-button-secondary-foreground`
      case 'light':
        return tw`bg-button-secondary-disabled text-button-secondary-foreground dark:bg-dark-button-secondary-disabled dark:text-dark-button-secondary-foreground`
      default: // medium
        return tw`bg-button-secondary text-button-secondary-foreground dark:bg-dark-button-secondary dark:text-dark-button-secondary-foreground`
    }
  }
})
</script>