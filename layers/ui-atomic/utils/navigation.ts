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

export function isNavigationItem(
  item: unknown | Navigation.NavigationItem
): item is Navigation.NavigationItem {
  return isTypeOf(item, 'NavigationItem')
}

export function isNavigationItemLink(
  item: unknown | Navigation.NavigationItemLink
): item is Navigation.NavigationItemLink {
  return isTypeOf(item, 'NavigationItemLink')
}

export function navigationItemLink(
  item: Omit<Navigation.NavigationItemLink, '__type' | 'id'>
): Navigation.NavigationItemLink {
  return navigationItem('NavigationItemLink', item)
}

export function isNavigationItemContent(
  item: unknown | Navigation.NavigationItemContent
): item is Navigation.NavigationItemContent {
  return isTypeOf(item, 'NavigationItemContent')
}

export function navigationItemContent(
  item: Omit<Navigation.NavigationItemContent, '__type' | 'id'>
): Navigation.NavigationItemContent {
  return navigationItem('NavigationItemContent', item)
}

export const navigationItemVariants = {
  link: isNavigationItemLink,
  content: isNavigationItemContent,
}
