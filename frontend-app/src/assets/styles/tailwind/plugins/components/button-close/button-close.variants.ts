import type { ButtonCloseVariant } from './button-close.types'

export const rounded = {
  none: '',
  sm: 'webeze-button-rounded-sm',
  md: 'webeze-button-rounded-md',
  lg: 'webeze-button-rounded-lg',
  full: 'webeze-button-rounded-full',
} as const satisfies ButtonCloseVariant<'rounded'>

export const size = {
  xs: 'webeze-button-xs',
  sm: 'webeze-button-sm',
  md: 'webeze-button-md',
  lg: 'webeze-button-lg',
  xl: 'webeze-button-xl',
} as const satisfies ButtonCloseVariant<'size'>

export const color = {
  default: 'webeze-button-default',
  'default-contrast': 'webeze-button-default-contrast',
  muted: 'webeze-button-muted',
  'muted-contrast': 'webeze-button-muted-contrast',
  primary: 'webeze-button-primary',
  info: 'webeze-button-info',
  success: 'webeze-button-success',
  warning: 'webeze-button-warning',
  danger: 'webeze-button-danger',
  none: '',
} as const satisfies ButtonCloseVariant<'color'>
