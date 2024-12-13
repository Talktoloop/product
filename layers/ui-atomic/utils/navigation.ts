import type * as Navigation from '../types/navigation'

function navigationItem<T extends Navigation.NavigationItem>(
  type: T['__type'],
  item: Omit<T, 'id' | '__type'>
): T {
  return {
    id: nanoid(),
    __type: type,
    ...item,
  } as T
}

export function isNavigationItem<T extends string>(
  item: unknown | Navigation.NavigationItem<T>
): item is Navigation.NavigationItem<T> {
  return isTypeOf(item, 'NavigationItem')
}

export function isNavigationItemLink<T extends string>(
  item: unknown | Navigation.NavigationItemLink<T>
): item is Navigation.NavigationItemLink<T> {
  return isTypeOf(item, 'NavigationItemLink')
}

export function navigationItemLink<T extends string>(
  item: Omit<Navigation.NavigationItemLink<T>, '__type' | 'id'>
): Navigation.NavigationItemLink<T> {
  return navigationItem('NavigationItemLink', item)
}

export function isNavigationItemContent<T extends string>(
  item: unknown | Navigation.NavigationItemContent<T>
): item is Navigation.NavigationItemContent<T> {
  return isTypeOf(item, 'NavigationItemContent')
}

export function navigationItemContent<T extends string>(
  name: T,
  item: Omit<Navigation.NavigationItemContent<T>, '__type' | 'slot' | 'id'>
): Navigation.NavigationItemContent<T> {
  return {
    id: CSS.escape(`${name}-${nanoid()}`),
    __type: 'NavigationItemContent',
    slot: name,
    ...item,
  }
}

export const navigationItemVariants = {
  link: isNavigationItemLink,
  content: isNavigationItemContent,
}
