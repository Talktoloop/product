<script lang="ts" setup>
import type { Command } from '@ui/shadcn/command'
import type { ComponentProps } from 'vue-component-type-helpers'

type ShadcnCommandProps = ComponentProps<typeof Command>

interface CommandItem {
  value: string
  label: string
  shortcut?: string[]
  icon?: string
  name?: string
}

interface Props extends ShadcnCommandProps {
  items: CommandItem[]
}

const props = defineProps<Props>()

const forward = useForwardPropsEmits(props, undefined, ['items'])
</script>

<template>
  <shadcn-command v-bind="forward">
    <shadcn-command-input placeholder="Type a command or search..." />
    <shadcn-command-list>
      <shadcn-command-empty>No results found.</shadcn-command-empty>
      <shadcn-command-group>
        <shadcn-command-item
          v-for="item in items"
          :key="item.value"
          :value="item.value"
        >
          <slot v-if="item.name" :name="item.name">
            <span v-if="item.icon" class="mr-2">{{ item.icon }}</span>
            {{ item.label }}
            <span
              v-if="item.shortcut"
              class="ml-auto flex gap-1"
            >
              <kbd
                v-for="(key, i) in item.shortcut"
                :key="i"
                class="px-1.5 text-xs uppercase"
              >
                {{ key }}
              </kbd>
            </span>
          </slot>
          <template v-else>
            <span v-if="item.icon" class="mr-2">{{ item.icon }}</span>
            {{ item.label }}
            <span
              v-if="item.shortcut"
              class="ml-auto flex gap-1"
            >
              <kbd
                v-for="(key, i) in item.shortcut"
                :key="i"
                class="px-1.5 text-xs uppercase"
              >
                {{ key }}
              </kbd>
            </span>
          </template>
        </shadcn-command-item>
      </shadcn-command-group>
    </shadcn-command-list>
  </shadcn-command>
</template> 