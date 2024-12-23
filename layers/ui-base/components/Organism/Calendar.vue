<script lang="ts" setup>
import type { DatePickerModel } from 'v-calendar/dist/types/src/use/datePicker.js';

defineOptions({
  name: 'OrganismCalendar',
})

interface Props {
  modelModifiers?: object
  columns?: number
  type?: 'single' | 'range'
}
const props = withDefaults(defineProps<Props>(), {
  columns: 1,
  type: 'single',
  modelModifiers: undefined,
})
const model = defineModel<string | number | Date | DatePickerModel>()
const forward = useForwardPropsEmits(props)

</script>

<template>
  <shadcn-calendar v-bind="forward" v-model="model" />
</template>
