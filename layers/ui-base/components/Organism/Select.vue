<script lang="ts" setup>
import type { Select } from '@ui/shadcn/select'
import type { ComponentProps } from 'vue-component-type-helpers'

type ShadcnSelectProps = ComponentProps<typeof Select>

interface SelectItem {
  value: string
  label: string
  description?: string
  icon?: string
  name?: string
}

interface Props extends ShadcnSelectProps {
  items: SelectItem[]
  placeholder?: string
}

const props = defineProps<Props>()

const forward = useForwardPropsEmits(props, undefined, ['items', 'placeholder'])
</script>

<template>
  <shadcn-select v-bind="forward">
    <shadcn-select-trigger>
      <shadcn-select-value :placeholder="placeholder" />
    </shadcn-select-trigger>
    <shadcn-select-content>
      <shadcn-select-group>
        <shadcn-select-item
          v-for="item in items"
          :key="item.value"
          :value="item.value"
        >
          <slot v-if="item.name" :name="item.name">
            <span v-if="item.icon" class="mr-2">{{ item.icon }}</span>
            {{ item.label }}
            <span
              v-if="item.description"
              class="ml-auto text-xs text-muted-foreground"
            >
              {{ item.description }}
            </span>
          </slot>
          <template v-else>
            <span v-if="item.icon" class="mr-2">{{ item.icon }}</span>
            {{ item.label }}
            <span
              v-if="item.description"
              class="ml-auto text-xs text-muted-foreground"
            >
              {{ item.description }}
            </span>
          </template>
        </shadcn-select-item>
      </shadcn-select-group>
    </shadcn-select-content>
  </shadcn-select>
</template> 