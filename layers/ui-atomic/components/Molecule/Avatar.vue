<script lang="ts" setup>
import type { AvatarRootProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'

defineOptions({
  name: 'MoleculeAvatar',
})

type ShadcnAvatarProps = AvatarRootProps & {
  class?: HTMLAttributes['class']
}

interface Props extends ShadcnAvatarProps {
  src: string
  alt?: string
  fallback?: string
}

const props = defineProps<Props>()

const forward = useForwardPropsEmits(props, undefined, [
  'src',
  'alt',
  'fallback'
])
</script>

<template>
  <shadcn-avatar v-bind="forward">
    <shadcn-avatar-image :src="src" :alt="alt" />
    <shadcn-avatar-fallback v-if="$slots.fallback || fallback">
      <slot name="fallback">
        {{ fallback }}
      </slot>
    </shadcn-avatar-fallback>
  </shadcn-avatar>
</template>