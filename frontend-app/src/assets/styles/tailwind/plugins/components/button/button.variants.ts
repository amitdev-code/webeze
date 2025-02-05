import type { ButtonVariant } from './button.types'

export const size = {
  sm: 'webeze-button-sm',
  md: 'webeze-button-md',
  lg: 'webeze-button-lg',
  xl: 'webeze-button-xl',
} as const satisfies ButtonVariant<'size'>

export const rounded = {
  none: '',
  sm: 'webeze-button-rounded-sm',
  md: 'webeze-button-rounded-md',
  lg: 'webeze-button-rounded-lg',
  full: 'webeze-button-rounded-full',
} as const satisfies ButtonVariant<'rounded'>

export const variant = {
  solid: 'webeze-button-solid',
  pastel: 'webeze-button-pastel',
  outline: 'webeze-button-outline',
} as const satisfies ButtonVariant<'variant'>

export const color = {
  none: '',
  default: 'webeze-button-default',
  'default-contrast': 'webeze-button-default-contrast',
  primary: 'webeze-button-primary',
  info: 'webeze-button-info',
  success: 'webeze-button-success',
  warning: 'webeze-button-warning',
  danger: 'webeze-button-danger',
  muted: 'webeze-button-muted',
  'muted-contrast': 'webeze-button-muted-contrast',
  light: 'webeze-button-light',
  dark: 'webeze-button-dark',
  black: 'webeze-button-black',
} as const satisfies ButtonVariant<'color'>

export const shadow = {
  flat: 'webeze-button-shadow',
  hover: 'webeze-button-shadow-hover',
} as const satisfies ButtonVariant<'shadow'>
