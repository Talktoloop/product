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
  variant?: 'primary' | 'secondary'
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
    return tw`bg-muted-100 text-muted-400`
  }
  if (props.variant === 'primary') {
    switch (props.shade) {
      case 'dark':
        return tw`bg-primary-600 text-white`
      case 'light':
        return tw`bg-white text-primary-foreground`
      default: // medium
        return tw`bg-primary-200 text-primary-foreground`
    }
  } else {
    switch (props.shade) {
      case 'dark':
        return tw`bg-secondary-600 text-white`
      case 'light':
        return tw`bg-white text-secondary-foreground`
      default: // medium
        return tw`bg-secondary-200 text-secondary-foreground`
    }
  }
})
</script>