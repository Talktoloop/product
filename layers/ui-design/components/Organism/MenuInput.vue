<script setup lang="ts" generic="T">
import type { InputMenu } from '@ui/design/types'

interface Props {
  menu: InputMenu<T>
}

defineProps<Props>()
defineModel<T[]>()

</script>
<template>
  <div>
    <div>
      <slot :menu="menu" />
    </div>
  </div>
</template>
