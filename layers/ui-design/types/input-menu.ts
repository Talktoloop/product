export interface BaseInputMenu {
  __type: string
  label: string
  icon?: Component | string
}

export interface InputMenuItem<T> extends BaseInputMenu {
  __type: 'InputMenuItem'
  action?: InputMenuAction<T>
}

export interface InputMenuInputChoice<T> extends BaseInputMenu {
  __type: 'InputMenuInputChoice'
  value: T
  selected: boolean
}

export interface InputMenuGroup<T> extends BaseInputMenu {
  __type: 'InputMenuGroup'
  items: InputMenuItem<T>[]
}

export interface InputMenuChoice<T> extends BaseInputMenu {
  __type: 'InputMenuChoice'
  multiple: boolean
  items: InputMenuInputChoice<T>[]
}

export interface InputMenuAction<T> extends BaseInputMenu {
  __type: 'InputMenuAction'
  action: (value: T) => void
}

export type InputMenu<T> = InputMenuGroup<T> | InputMenuChoice<T> | InputMenuAction<T>
