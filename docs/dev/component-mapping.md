# Component Mapping Guide

This document describes how shadcn components are mapped to atomic components in our design system.

## Overview

Our component library follows the Atomic Design methodology, mapping shadcn components to atomic-level components (Atoms, Molecules, Organisms, etc.) with consistent patterns and conventions.

## Component Structure

### Basic Pattern

Each atomic component follows this basic structure:

```vue
<template>
  <shadcn-component v-bind="{ ...$props, ...$attrs }">
    <slot />
  </shadcn-component>
</template>

<script setup lang="ts">
import type { ComponentProps } from 'vue-component-type-helpers'
import type { ShadcnComponent } from '../shadcn/ui/component'

type ComponentProps = ComponentProps<typeof ShadcnComponent>

interface Props {
  // Typed props from shadcn component
}

defineProps<Props>()

defineComponent({
  name: 'AtomComponent',
})
</script>
```

### Naming Convention

- Atomic components are prefixed with their level:
  - `Atom` - Basic building blocks (e.g., Button, Input)
  - `Molecule` - Combinations of atoms (e.g., Alert, Accordion)
  - `Organism` - Groups of molecules (e.g., Navigation, Footer)
  - `Template` - Page-level templates (e.g., Blog, Product)
  - `Page` - Complete pages (e.g., Home, About)

### Component Types

#### Atoms

Basic UI elements that map directly to shadcn components:

- Button -> shadcn/ui/button
- Input -> shadcn/ui/input
- Label -> shadcn/ui/label
- Checkbox -> shadcn/ui/checkbox
- Switch -> shadcn/ui/switch
- etc.

#### Molecules

More complex components composed of multiple elements:

- Accordion -> shadcn/ui/accordion
- Alert -> shadcn/ui/alert
- Dialog -> shadcn/ui/dialog
- etc.

#### Organisms

Groups of molecules that form a more complex UI component:

- Navigation -> shadcn/ui/navigation
- Footer -> shadcn/ui/footer
- etc.

## Implementation Details

### Props Forwarding

Components forward both props and attributes to the underlying shadcn component:

```vue
<shadcn-component v-bind="{ ...$props, ...$attrs }"></shadcn-component>
```

### Type Safety

Components use TypeScript for prop typing:

```typescript
type ComponentProps = ComponentProps<typeof ShadcnComponent>

interface Props {
  variant?: ComponentProps['variant']
  size?: ComponentProps['size']
  class?: ComponentProps['class']
}
```

### Slots

Components handle slots in two ways:

1. Basic slot forwarding:

```vue
<template>
  <shadcn-component>
    <slot />
  </shadcn-component>
</template>
```

2. Named slots (for more complex components):

```vue
<template>
  <shadcn-component>
    <template #default>
      <slot />
    </template>
    <template #title>
      <slot name="title" />
    </template>
  </shadcn-component>
</template>
```

## Best Practices

1. Always maintain type safety by properly typing props and events
2. Use consistent naming conventions
3. Forward all relevant props and attributes
4. Document component interfaces and usage
5. Keep components focused and single-purpose
6. Maintain consistent slot handling patterns

## Component Registration

Components are auto-imported and don't require explicit registration:
