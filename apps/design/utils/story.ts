import type { ComponentProps } from 'vue-component-type-helpers'
import type { Meta, StoryContext } from '@storybook/vue3'
import dedent from 'dedent'
import type { DecoratorFunction } from 'storybook/internal/types'
import type { ItemOf } from '@ourloop/product-core-types'
import { fn } from '@storybook/test'

const reservedWords = [] as string[]

/**
 * Generates a string of props for a component template
 * @param props - Object containing component props
 * @param bind - Whether to bind the props using v-bind syntax
 * @param omit - Array of prop keys to exclude
 * @example
 * ```ts
 * // In a story file:
 * const args = {
 *   variant: 'default',
 *   size: 'md',
 *   class: 'custom-class'
 * }
 * propList(args) // => 'variant="default" size="md" class="custom-class"'
 * propList(args, true) // => ':variant="variant" :size="size" :class="class"'
 * ```
 */
export function propList<T extends object>(
  props: T,
  bind: boolean = false,
  omit: (keyof T)[] = []
) {
  return Object.entries(props)
    .filter(([key]) => !omit.includes(key as keyof T))
    .map(([key, value]) => {
      if (bind) {
        const keyName = reservedWords.includes(key) ? `_${key}` : key
        return `:${key}="${keyName}"`
      }
      if (typeof value === 'string') {
        return `${key}='${value}'`
      }
      return `:${key}="${JSON.stringify(value).replace(/"/g, "'")}"`
    })
    .join(' ')
}

/**
 * Separates component args into props and slots
 * @param args - Component args from story
 * @param slotNames - Array of slot names to extract
 * @example
 * ```ts
 * // In a story file:
 * const args = {
 *   title: 'Hello',
 *   default: 'Content',
 *   footer: 'Footer'
 * }
 * const { props, slots } = parseArgs(args, ['default', 'footer'])
 * // props = { title: 'Hello' }
 * // slots = { default: 'Content', footer: 'Footer' }
 * ```
 */
export function parseArgs<T extends object>(args: T, slotNames: (keyof T)[] = []) {
  const props = computed(() => {
    return Object.entries(args)
      .filter(([key]) => !slotNames.includes(key as keyof T))
      .reduce((acc, [key, value]) => {
        return { ...acc, [key]: value }
      }, {} as T)
  })
  const slots = computed(() => {
    return Object.entries(args)
      .filter(([key]) => slotNames.includes(key as keyof T))
      .reduce((acc, [key, value]) => {
        const keyName = reservedWords.includes(key) ? `_${key}` : key
        return { ...acc, [keyName]: value }
      }, {} as T)
  })
  return { props, slots }
}

type SlotSpec = `:${string}` | string
type SlotSpecArray = SlotSpec[]

/**
 * Generates a component template with slots
 * @param componentName - Name of the component
 * @param slotNames - Array of slot names to include
 * @example
 * ```ts
 * // In a story file:
 * template('MyComponent', ['default', 'footer'])
 * // => '<MyComponent v-bind="props">
 * //      <template #default><div v-html="slots.default" /></template>
 * //      <template #footer><div v-html="slots.footer" /></template>
 * //     </MyComponent>'
 * ```
 */
export function template(componentName: string, slotNames: SlotSpecArray = []) {
  const slots = slotNames
    .map((slotName) => {
      if (slotName.startsWith(':')) {
        const [, tag] = slotName.split(':')
        return /* html */ `<${tag} />`
      }
      return /* html */ `
        <template #${slotName} v-if="slots['${slotName}']">
          <div v-html="slots['${slotName}']" />
        </template>
      `
    })
    .join('')
  return dedent`
      <${componentName} v-bind="props">
        ${slots}
      </${componentName}>
    `
}

/**
 * Transforms story source code for documentation
 * @param componentName - Name of the component
 * @param slotNames - Array of slot names to include
 * @example
 * ```ts
 * // In a story file:
 * parameters: {
 *   docs: {
 *     source: {
 *       transform: source('MyComponent', ['default'])
 *     }
 *   }
 * }
 * ```
 */
export function source(componentName: string, slotNames: string[]) {
  return (_code: string, storyContext: StoryContext) => {
    const slots = slotNames
      .filter((slotName) => storyContext.args[slotName])
      .map((slotName) =>
        slotName === 'default' && slotNames.length === 1
          ? storyContext.args[slotName]
          : /* html */ `<template #${slotName}>${storyContext.args[slotName]}</template>`
      )
      .join('\n')

    const args = propList(storyContext.args, false, slotNames)
    return dedent`
      <${componentName} ${args}>
        ${slots}
      </${componentName}>
    `
  }
}

/**
 * Creates a story configuration with slot support
 * @param component - Component to create story for
 * @param slotNames - Array of slot names to support
 * @example
 * ```ts
 * // In a story file:
 * const meta = {
 *   title: 'Components/MyComponent',
 *   component: MyComponent,
 *   ...withSlots({ MyComponent }, 'default', 'footer')
 * } satisfies Meta<typeof MyComponent>
 * ```
 */
export function withSlots<C extends Component>(
  component: C | Record<string, C>,
  ...slotNames: string[]
) {
  let _componentName: string | undefined
  let componentClass: C

  if ('name' in component) {
    _componentName = String(component.name)
    componentClass = component as C
  } else if (Object.keys(component).length === 1) {
    const [cName, cClass] = Object.entries(component)[0]
    _componentName = cName
    componentClass = cClass as C
  }

  if (typeof _componentName !== 'string' || !_componentName) {
    console.error(component)
    if (component?.prototype?.name === 'Component') {
      throw new Error('Component must have a name, try passing as { Component }')
    }
    if (Object.keys(component).length !== 1) {
      throw new Error('Component map must have a single entry or component must have a name')
    }
    throw new Error('Error creating component slots')
  }

  const componentName = _componentName as string
  return {
    render: (_, { args }) => ({
      components: { [componentName]: componentClass },
      setup: () => parseArgs(args, slotNames),
      template: template(componentName, slotNames),
    }),
    parameters: {
      docs: {
        source: {
          transform: source(componentName, slotNames),
        },
      },
    },
  } as Meta<typeof component>
}

/**
 * Creates a decorator that wraps story content in a container
 * @param props - Props to pass to container
 * @param container - Container component or element tag
 * @example
 * ```ts
 * // In a story file:
 * const meta = {
 *   title: 'Components/MyComponent',
 *   component: MyComponent,
 *   decorators: [
 *     decorator(wrapContainer({ class: 'p-4 bg-gray-100' }, 'div'))
 *   ]
 * }
 * ```
 */
export function wrapContainer<C extends Component>(
  props: ComponentProps<C>,
  container: C | string = 'div'
): DecoratorFunction {
  const components = typeof container === 'string' ? {} : { container }
  const componentName = typeof container === 'string' ? container : 'container'
  return (story: Component) => ({
    components: { ...components, story },
    setup: () => parseArgs(props),
    template: template(componentName, [':story']),
  })
}

export function trackModel<T>(defaultValue?: T | Ref<T>): DecoratorFunction {
  return (story, storyContext) => {
    const model = isRef(defaultValue) ? defaultValue : ref<T | undefined>(defaultValue)
    const updateModel = fn((value: T) => {
      console.log('updateModel', value)
    })
    storyContext.args['model-value'] = model
    storyContext.args['onUpdate:model-value'] = updateModel
    return story(storyContext)
  }
}

export function withEmits(...emits: string[]): DecoratorFunction {
  const logEvent =
    (event: string) =>
    (...args: unknown[]) => {
      console.log('logEvent', event, ...args)
    }
  return (story, storyContext) => {
    storyContext = {
      ...storyContext,
      args: {
        ...storyContext.args,
        ...emits.reduce(
          (acc, emit) => ({
            ...acc,
            [`on${emit.charAt(0).toUpperCase()}${emit.slice(1)}`]: fn(logEvent(emit)),
          }),
          {}
        ),
      },
    }
    return story(storyContext)
  }
}
/**
 * Type-safe decorator function
 * @param decorator - Storybook decorator function
 * @example
 * ```ts
 * // In a story file:
 * const customDecorator = decorator((story) => ({
 *   components: { story },
 *   template: '<div class="wrapper"><story /></div>'
 * }))
 * ```
 */
export function decorator<C extends Component>(decorator: DecoratorFunction) {
  type StoryMeta = Meta<C>
  type Decorators = StoryMeta['decorators']
  return decorator as ItemOf<Decorators>
}

/**
 * Combines multiple decorators into a story configuration
 * @param args - Array of decorator functions
 * @example
 * ```ts
 * // In a story file:
 * const meta = {
 *   title: 'Components/MyComponent',
 *   component: MyComponent,
 *   ...withDecorators(
 *     wrapContainer({ class: 'p-4' }),
 *     customDecorator
 *   )
 * }
 * ```
 */
export function withDecorators<C extends Component>(...args: DecoratorFunction[]) {
  const decorators = args.map(decorator<C>)
  return {
    decorators,
  }
}
