import type {
  BooleanControlSpec,
  ControlMap,
  ControlSpec,
  SelectControlSpec,
} from '../../types/controls'

import type { InputType } from 'storybook/internal/types'

export function controlSpec<T extends object>(spec: ControlMap<T>): ControlMap<T> {
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

export function buildControl<T>(spec: ControlSpec<T>): InputType {
  const builder = builders[spec.type] as (spec: ControlSpec<T>) => InputType
  return builder(spec)
}
