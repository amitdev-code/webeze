import type { ButtonIconVariant } from './button-icon.types'

export const rounded = {
  none: '',
  sm: 'webeze-button-rounded-sm',
  md: 'webeze-button-rounded-md',
  lg: 'webeze-button-rounded-lg',
  full: 'webeze-button-rounded-full',
} as const satisfies ButtonIconVariant<'rounded'>

export const size = {
  sm: 'webeze-button-sm',
  md: 'webeze-button-md',
  lg: 'webeze-button-lg',
  xl: 'webeze-button-xl',
} as const satisfies ButtonIconVariant<'size'>

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
} as const satisfies ButtonIconVariant<'color'>
