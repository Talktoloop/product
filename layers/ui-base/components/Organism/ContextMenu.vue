<script lang="ts" setup>
import type { ContextMenu } from '@ui/shadcn/context-menu'
import type { ComponentProps } from 'vue-component-type-helpers'

type ShadcnContextMenuProps = ComponentProps<typeof ContextMenu>

interface MenuItem {
  value: string
  label: string
  shortcut?: string
  icon?: string
  children?: MenuItem[]
  name?: string
}

interface Props extends ShadcnContextMenuProps {
  items: MenuItem[]
}

const props = defineProps<Props>()

const forward = useForwardPropsEmits(props, undefined, ['items'])
</script>

<template>
  <shadcn-context-menu v-bind="forward">
    <slot name="trigger">
      <shadcn-context-menu-trigger />
    </slot>
    <shadcn-context-menu-content>
      <template v-for="item in items" :key="item.value">
        <template v-if="item.children?.length">
          <shadcn-context-menu-sub>
            <shadcn-context-menu-sub-trigger>
              <slot v-if="item.name" :name="`${item.name}-trigger`">
                <span v-if="item.icon" class="mr-2">{{ item.icon }}</span>
                {{ item.label }}
              </slot>
              <template v-else>
                <span v-if="item.icon" class="mr-2">{{ item.icon }}</span>
                {{ item.label }}
              </template>
            </shadcn-context-menu-sub-trigger>
            <shadcn-context-menu-sub-content>
              <template v-for="child in item.children" :key="child.value">
                <template v-if="child.children?.length">
                  <!-- Recursive rendering for nested children -->
                  <shadcn-context-menu-sub>
                    <shadcn-context-menu-sub-trigger>
                      <slot v-if="child.name" :name="`${child.name}-trigger`">
                        <span v-if="child.icon" class="mr-2">{{ child.icon }}</span>
                        {{ child.label }}
                      </slot>
                      <template v-else>
                        <span v-if="child.icon" class="mr-2">{{ child.icon }}</span>
                        {{ child.label }}
                      </template>
                    </shadcn-context-menu-sub-trigger>
                    <shadcn-context-menu-sub-content>
                      <!-- Further nested children can be rendered here -->
                    </shadcn-context-menu-sub-content>
                  </shadcn-context-menu-sub>
                </template>
                <template v-else>
                  <shadcn-context-menu-item :value="child.value">
                    <slot v-if="child.name" :name="child.name">
                      <span v-if="child.icon" class="mr-2">{{ child.icon }}</span>
                      {{ child.label }}
                      <span v-if="child.shortcut" class="ml-auto text-xs">
                        {{ child.shortcut }}
                      </span>
                    </slot>
                    <template v-else>
                      <span v-if="child.icon" class="mr-2">{{ child.icon }}</span>
                      {{ child.label }}
                      <span v-if="child.shortcut" class="ml-auto text-xs">
                        {{ child.shortcut }}
                      </span>
                    </template>
                  </shadcn-context-menu-item>
                </template>
              </template>
            </shadcn-context-menu-sub-content>
          </shadcn-context-menu-sub>
        </template>
        <template v-else>
          <shadcn-context-menu-item :value="item.value">
            <slot v-if="item.name" :name="item.name">
              <span v-if="item.icon" class="mr-2">{{ item.icon }}</span>
              {{ item.label }}
              <span v-if="item.shortcut" class="ml-auto text-xs">
                {{ item.shortcut }}
              </span>
            </slot>
            <template v-else>
              <span v-if="item.icon" class="mr-2">{{ item.icon }}</span>
              {{ item.label }}
              <span v-if="item.shortcut" class="ml-auto text-xs">
                {{ item.shortcut }}
              </span>
            </template>
          </shadcn-context-menu-item>
        </template>
      </template>
    </shadcn-context-menu-content>
  </shadcn-context-menu>
</template>