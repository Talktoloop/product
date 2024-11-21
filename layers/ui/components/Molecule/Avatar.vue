<template>
  <shadcn-avatar v-bind="{ ...$props, ...$attrs }">
    <slot />
  </shadcn-avatar>
</template>

<script setup lang="ts">
import type { ComponentProps, ComponentSlots } from 'vue-component-type-helpers'
import { Avatar as ShadcnAvatar } from "../shadcn/ui/avatar"

type AvatarProps = ComponentProps<typeof ShadcnAvatar>
type AvatarSlots = ComponentSlots<typeof ShadcnAvatar>

interface Props {
  size?: AvatarProps['size']
  shape?: AvatarProps['shape']
  class?: AvatarProps['class']
}

defineProps<Props>()

defineSlots<AvatarSlots>()

defineComponent({
  name: "MoleculeAvatar",
})
</script>