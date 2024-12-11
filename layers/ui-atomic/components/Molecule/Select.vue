<script lang="ts" setup>
import type { Select as ShadcnSelect } from '@ui/shadcn/select'
import type { SelectRootEmits } from 'radix-vue';

interface Props extends SelectRootEmits {
  modelValue?: string
  placeholder?: string
  options?: Array<{
    label: string
    value: string
    disabled?: boolean
  }>
}

const props = defineProps<Props>()
const model = defineModel<string>()

const forward = useForwardPropsEmits(props)
</script>

<template>
  <shadcn-select v-bind="forward" v-model="model">
    <shadcn-select-trigger>
      <shadcn-select-value :placeholder="placeholder" />
    </shadcn-select-trigger>
    <shadcn-select-content>
      <template v-if="options">
        <shadcn-select-item
v-for="option in options" :key="option.value" :value="option.value"
          :disabled="option.disabled">
          {{ option.label }}
        </shadcn-select-item>
      </template>
      <slot />
    </shadcn-select-content>
  </shadcn-select>
</template>