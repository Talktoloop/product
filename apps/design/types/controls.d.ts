import type { InputType } from 'storybook/internal/types'

export type ControlMappings<T> = {
  [key: string]: T
}

export interface BaseControlSpec<T> {
  description?: string
  defaultValue?: T
  options?: Partial<InputType>
}

export interface SelectControlSpec<T> extends BaseControlSpec<T> {
  type: 'select'
  mappings: ControlMappings<T>
}

export interface BooleanControlSpec extends BaseControlSpec<boolean> {
  type: 'boolean'
}

export type ControlSpec<T, D = T> = D extends boolean ? BooleanControlSpec : SelectControlSpec<T>

export type ControlMap<T extends object> = {
  [key in keyof T]: ControlSpec<T[key]>
}
