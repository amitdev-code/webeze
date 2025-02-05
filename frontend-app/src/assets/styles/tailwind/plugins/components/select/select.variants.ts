import type { SelectVariant } from './select.types'

export const rounded = {
  none: '',
  sm: 'webeze-select-rounded-sm',
  md: 'webeze-select-rounded-md',
  lg: 'webeze-select-rounded-lg',
  full: 'webeze-select-rounded-full',
} as const satisfies SelectVariant<'rounded'>

export const size = {
  sm: 'webeze-select-sm',
  md: 'webeze-select-md',
  lg: 'webeze-select-lg',
  xl: 'webeze-select-xl',
} as const satisfies SelectVariant<'size'>

export const contrast = {
  default: 'webeze-select-default',
  'default-contrast': 'webeze-select-default-contrast',
  muted: 'webeze-select-muted',
  'muted-contrast': 'webeze-select-muted-contrast',
} as const satisfies SelectVariant<'contrast'>
