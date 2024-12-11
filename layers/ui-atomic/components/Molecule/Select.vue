<script lang="ts" setup>
import type { Select as ShadcnSelect } from '@ui/shadcn/select'
import type { SelectRootEmits } from 'radix-vue';

defineOptions({
  name: 'MoleculeSelect',
})

interface Item {
  label: string
  value: string
  disabled?: boolean
}

interface Groups {
  label: string
  items: Item[]
}

interface Props extends SelectRootEmits {
  placeholder?: string
  items?: Item[]
  groups?: Groups[]
}

const props = defineProps<Props>()
const model = defineModel<string>()
const emit = defineEmits<SelectRootEmits>()

const forward = useForwardPropsEmits<Props, 'update:open'>(props, emit, ['placeholder', 'items', 'groups'])
</script>

<template>
  <shadcn-select v-bind="forward" v-model="model">
    <shadcn-select-trigger>
      <shadcn-select-value :placeholder="placeholder" />
    </shadcn-select-trigger>
    <shadcn-select-content>
      <template v-if="items">
        <shadcn-select-item v-for="item in items" :key="item.value" :value="item.value" :disabled="item.disabled">
          {{ item.label }}
        </shadcn-select-item>
      </template>
      <template v-if="groups">
        <shadcn-select-group v-for="group in groups" :key="group.label">
          <shadcn-select-label>
            {{ group.label }}
          </shadcn-select-label>
          <shadcn-select-item
v-for="item in group.items" :key="item.value" :value="item.value"
            :disabled="item.disabled">
            {{ item.label }}
          </shadcn-select-item>
        </shadcn-select-group>
      </template>
      <slot />
    </shadcn-select-content>
  </shadcn-select>
</template>