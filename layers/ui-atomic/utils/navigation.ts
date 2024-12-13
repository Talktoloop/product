import type * as Navigation from '../types/navigation'

function navigationItem<T extends Navigation.NavigationItem<string>>(
  type: T['__type'],
  item: Omit<T, 'id' | '__type'>
): T {
  return {
    id: randomId('navigation-item'),
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

export function isNavigationItemMenu<T extends string>(
  item: unknown | Navigation.NavigationItemMenu<T>
): item is Navigation.NavigationItemMenu<T> {
  return isTypeOf(item, 'NavigationItemMenu')
}

export function navigationItemMenu<T extends string = never>(
  item: Omit<Navigation.NavigationItemMenu<T>, '__type' | 'slot' | 'id'>,
  slot?: T
): Navigation.NavigationItemMenu<T> {
  const menuItem = navigationItem<Navigation.NavigationItemMenu<T>>('NavigationItemMenu', item)
  if (typeof slot === 'string') {
    menuItem.slot = { name: slot, id: randomId('navigation-item-slot') }
  }
  return menuItem
}

export const navigationItemVariants = {
  link: isNavigationItemLink,
  content: isNavigationItemMenu,
}
