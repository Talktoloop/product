<script setup lang="ts" generic="T">
interface Props {
  id: string
  value: T
}

const props = defineProps<Props>()

defineSlots<{
  default: (props: { value: T }) => VNode
}>()

const { ready, reset } = useSync<T>(props.id, 'target')
const id = computed(() => `variant-content-${CSS.escape(props.id)}`)

onMounted(() => {
  ready(props.value)
})

onUnmounted(() => {
  reset()
})
</script>

<template>
  <div :id="id">
    <slot :value="value" />
  </div>
</template>
