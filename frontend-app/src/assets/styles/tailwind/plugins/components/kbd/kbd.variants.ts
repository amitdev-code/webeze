import type { KbdVariant } from './kbd.types'

export const rounded = {
  none: '',
  sm: 'webeze-kbd-rounded-sm',
  md: 'webeze-kbd-rounded-md',
  lg: 'webeze-kbd-rounded-lg',
  full: 'webeze-kbd-rounded-full',
} as const satisfies KbdVariant<'rounded'>

export const size = {
  xs: 'webeze-kbd-xs',
  sm: 'webeze-kbd-sm',
  md: 'webeze-kbd-md',
  lg: 'webeze-kbd-lg',
} as const satisfies KbdVariant<'size'>

export const color = {
  default: 'webeze-kbd-default',
  'default-contrast': 'webeze-kbd-default-contrast',
  muted: 'webeze-kbd-muted',
  'muted-contrast': 'webeze-kbd-muted-contrast',
} as const satisfies KbdVariant<'color'>
