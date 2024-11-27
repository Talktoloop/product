import type { InputType } from 'storybook/internal/types'
import type { ButtonVariants } from '@ourloop/product-layer-ui/components/Atom/Button.js'

type ControlMappings<T> = {
  [key: string]: T
}

interface BaseControlSpec<T> {
  description?: string
  defaultValue?: T
  options?: Partial<InputType>
}

interface SelectControlSpec<T> extends BaseControlSpec<T> {
  type: 'select'
  mappings: ControlMappings<T>
}

interface BooleanControlSpec extends BaseControlSpec<boolean> {
  type: 'boolean'
}

type ControlSpec<T, D = T> = D extends boolean ? BooleanControlSpec : SelectControlSpec<T>

type ControlMap<T extends object> = {
  [key in keyof T]: ControlSpec<T[key]>
}

function controlSpec<T extends object>(spec: ControlMap<T>): ControlMap<T> {
  return spec
}

export function selectControl<T>(spec: SelectControlSpec<T>): InputType {
  return {
    ...spec.options,
    control: {
      type: 'select',
    },
    mappings: spec.mappings,
    options: Object.keys(spec.mappings),
    description: spec.description,
    table: {
      defaultValue: { summary: String(spec.defaultValue) },
    },
  }
}

const booleanControl = (spec: BooleanControlSpec): InputType => {
  return {
    ...spec.options,
    control: { type: 'boolean' },
    description: spec.description,
    table: {
      defaultValue: {
        summary: spec.defaultValue ? 'true' : typeof spec.defaultValue === 'boolean' ? 'false' : '',
      },
    },
  }
}

const builders = {
  select: selectControl,
  boolean: booleanControl,
}

function buildControl<T>(spec: ControlSpec<T>): InputType {
  const builder = builders[spec.type] as (spec: ControlSpec<T>) => InputType
  return builder(spec)
}

type ButtonSize = ButtonVariants['size']
type ButtonVariant = ButtonVariants['variant']

const controls = controlSpec({
  buttonSize: {
    type: 'select',
    mappings: {
      default: 'default',
      sm: 'sm',
      lg: 'lg',
      icon: 'icon',
    } satisfies Record<string, ButtonSize>,
    description: 'The size of the component',
    defaultValue: 'default' as ButtonSize,
  },
  buttonVariant: {
    type: 'select',
    mappings: {
      destructive: 'destructive',
      default: 'default',
      outline: 'outline',
      secondary: 'secondary',
      ghost: 'ghost',
      link: 'link',
    } satisfies Record<string, ButtonVariant>,
    description: 'The variant of the component',
    defaultValue: 'default' as ButtonVariant,
  },
  trueFalse: {
    type: 'boolean',
    description: 'A boolean value',
    defaultValue: true,
  },
  falseTrue: {
    type: 'boolean',
    description: 'A boolean value',
    defaultValue: false,
  },
})

type Controls = typeof controls

type Control = {
  [key in keyof Controls]: InputType
}

type DefaultValue = {
  [key in keyof Controls]?: Controls[key]['defaultValue']
}

export const control = Object.fromEntries(
  Object.entries(controls).map(([key, control]) => [
    key,
    buildControl(control as ControlSpec<unknown>),
  ])
) as Control

export const defaultValue = Object.fromEntries(
  Object.entries(controls).map(([key, control]) => [key, control.defaultValue])
) as DefaultValue

export function omit<C extends Control[keyof Control], K extends keyof C['mappings']>(
  obj: C,
  keys: K[]
): InputType & { mappings: ControlMappings<Omit<C['mappings'], K>> } {
  const mappings = Object.fromEntries(
    Object.entries(obj).filter(([key]) => !keys.includes(key as K))
  ) as ControlMappings<Omit<C['mappings'], K>>
  return {
    ...obj,
    mappings,
  }
}

export function exclude<T, K extends T>(val: T, keys: K[]): Exclude<T, K> {
  if (keys.includes(val as K)) {
    throw new Error(`Value ${val} is not allowed`)
  }
  return val as Exclude<T, K>
}
