import { buildControl, controlSpec } from './control/utils'
import type { ButtonVariants } from '@ui/shadcn/button'
import type { ControlMappings, ControlSpec } from '@/types/controls'
import type { InputType } from 'storybook/internal/types'

type ButtonSize = ButtonVariants['size']
type ButtonVariant = ButtonVariants['variant']

type AvatarSize = 'sm' | 'base' | 'lg'
type DrawerDirection = 'left' | 'right' | 'top' | 'bottom'
type AlertVariant = 'default' | 'destructive'

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
  avatarSize: {
    type: 'select',
    mappings: {
      sm: 'sm',
      base: 'base',
      lg: 'lg',
    } satisfies Record<string, AvatarSize>,
    description: 'The size of the avatar',
    defaultValue: 'base' as AvatarSize,
  },
  drawerDirection: {
    type: 'select',
    mappings: {
      left: 'left',
      right: 'right',
      top: 'top',
      bottom: 'bottom',
    } satisfies Record<string, DrawerDirection>,
    description: 'The direction the drawer opens from',
    defaultValue: 'right' as DrawerDirection,
  },
  alertVariant: {
    type: 'select',
    mappings: {
      default: 'default',
      destructive: 'destructive',
    } satisfies Record<string, AlertVariant>,
    description: 'The variant of the alert',
    defaultValue: 'default' as AlertVariant,
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
  labeledData: {
    type: 'select',
    mappings: {
      valuePerDate: [
        { index: '2024-01', value: 100 },
        { index: '2024-02', value: 150 },
        { index: '2024-03', value: 120 },
      ],
      labeledValues: [
        { index: 'Visits', value: 100 },
        { index: 'Page Views', value: 150 },
        { index: 'Users', value: 120 },
      ],
    },
    description: 'The data to be displayed in the chart',
    defaultValue: [
      { index: '2024-01', value: 100 },
      { index: '2024-02', value: 150 },
      { index: '2024-03', value: 120 },
    ],
  },
  xyData: {
    type: 'select',
    mappings: {
      straightLine: [
        { x: 1, y: 1 },
        { x: 2, y: 2 },
        { x: 3, y: 3 },
        { x: 4, y: 4 },
        { x: 5, y: 5 },
      ],
      parabolicCurve: [
        { x: 1, y: 1 },
        { x: 2, y: 4 },
        { x: 3, y: 9 },
        { x: 4, y: 16 },
        { x: 5, y: 25 },
      ],
    },
    description: 'The data to be displayed in the chart',
    defaultValue: [
      { x: 1, y: 1 },
      { x: 2, y: 2 },
      { x: 3, y: 3 },
      { x: 4, y: 4 },
      { x: 5, y: 5 },
    ],
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
