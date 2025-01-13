<script setup lang="ts" generic="T">
defineOptions({
  name: 'VariantContentSource'
})

interface Props {
  id: string
}

const props = defineProps<Props>()

defineSlots<{
  default: (props: { value: T }) => VNode
}>()

const { value } = useSync<T>(props.id, 'source')
const to = computed(() => `#variant-content-${CSS.escape(props.id)}`)
</script>

<template>
  <Teleport v-if="value" :to="to">
    <slot :value="value" />
  </Teleport>
</template>
