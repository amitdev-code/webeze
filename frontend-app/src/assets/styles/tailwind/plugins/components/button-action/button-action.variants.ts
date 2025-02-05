import type { ButtonActionVariant } from './button-action.types'

export const rounded = {
  none: '',
  sm: 'webeze-button-rounded-sm',
  md: 'webeze-button-rounded-md',
  lg: 'webeze-button-rounded-lg',
  full: 'webeze-button-rounded-full',
} as const satisfies ButtonActionVariant<'rounded'>

export const color = {
  default: 'webeze-button-default',
  'default-contrast': 'webeze-button-default-contrast',
  muted: 'webeze-button-muted',
  'muted-contrast': 'webeze-button-muted-contrast',
  light: 'webeze-button-light',
  dark: 'webeze-button-dark',
  black: 'webeze-button-black',
  primary: 'webeze-button-primary',
  info: 'webeze-button-info',
  success: 'webeze-button-success',
  warning: 'webeze-button-warning',
  danger: 'webeze-button-danger',
  none: '',
} as const satisfies ButtonActionVariant<'color'>
