<script lang="ts" setup>
// Implemented this way due to the way Shadcn UI's Drawer component is implemented
import type { DrawerRootEmits, DrawerRootProps } from 'vaul-vue'
import { useForwardPropsEmits } from 'radix-vue'

defineOptions({
  name: 'MoleculeDrawer',
})

interface Props {
  activeSnapPoint?: DrawerRootProps['activeSnapPoint']
  closeThreshold?: DrawerRootProps['closeThreshold']
  shouldScaleBackground?: DrawerRootProps['shouldScaleBackground']
  scrollLockTimeout?: DrawerRootProps['scrollLockTimeout']
  fixed?: DrawerRootProps['fixed']
  dismissible?: DrawerRootProps['dismissible']
  modal?: DrawerRootProps['modal']
  open?: DrawerRootProps['open']
  defaultOpen?: DrawerRootProps['defaultOpen']
  nested?: DrawerRootProps['nested']
  direction?: DrawerRootProps['direction']
}

const props = withDefaults(defineProps<Props>(), {
  shouldScaleBackground: true,
  activeSnapPoint: undefined,
  closeThreshold: undefined,
  scrollLockTimeout: undefined,
  fixed: undefined,
  dismissible: undefined,
  modal: undefined,
  open: undefined,
  defaultOpen: undefined,
  nested: undefined,
  direction: undefined,
})

const emit = defineEmits<DrawerRootEmits>()

const forwarded = useForwardPropsEmits(props, emit)
</script>
<template>
  <shadcn-drawer v-bind="forwarded">
    <shadcn-drawer-trigger v-if="$slots.trigger" as-child>
      <slot name="trigger" />
    </shadcn-drawer-trigger>
    <shadcn-drawer-content>
      <shadcn-drawer-header v-if="$slots.header">
        <slot name="header" />
      </shadcn-drawer-header>
      <slot />
      <shadcn-drawer-footer v-if="$slots.footer">
        <slot name="footer" />
        <shadcn-drawer-close v-if="$slots.close" as-child>
          <slot name="close" />
        </shadcn-drawer-close>
        <shadcn-drawer-close v-else as-child>
          <AtomButton variant="outline">
            Close
          </AtomButton>
        </shadcn-drawer-close>
      </shadcn-drawer-footer>
    </shadcn-drawer-content>
  </shadcn-drawer>
</template>
