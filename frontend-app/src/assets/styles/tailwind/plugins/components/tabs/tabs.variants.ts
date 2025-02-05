import type { TabsVariant } from './tabs.types'

export const justify = {
  start: '',
  center: 'webeze-tabs-centered',
  end: 'webeze-tabs-end',
} as const satisfies TabsVariant<'justify'>

export const type = {
  tabs: 'webeze-tab-item',
  box: 'webeze-pill-item',
} as const satisfies TabsVariant<'type'>

export const color = {
  default: 'webeze-tabs-default',
  primary: 'webeze-tabs-primary',
  light: 'webeze-tabs-light',
  dark: 'webeze-tabs-dark',
  black: 'webeze-tabs-black',
} as const satisfies TabsVariant<'color'>
