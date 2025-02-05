import type { CheckboxVariant } from './checkbox.types'

export const rounded = {
  none: '',
  sm: 'webeze-checkbox-rounded-sm',
  md: 'webeze-checkbox-rounded-md',
  lg: 'webeze-checkbox-rounded-lg',
  full: 'webeze-checkbox-rounded-full',
} as const satisfies CheckboxVariant<'rounded'>

export const color = {
  default: 'webeze-checkbox-default',
  muted: 'webeze-checkbox-muted',
  light: 'webeze-checkbox-light',
  dark: 'webeze-checkbox-dark',
  black: 'webeze-checkbox-black',
  primary: 'webeze-checkbox-primary',
  info: 'webeze-checkbox-info',
  success: 'webeze-checkbox-success',
  warning: 'webeze-checkbox-warning',
  danger: 'webeze-checkbox-danger',
} as const satisfies CheckboxVariant<'color'>
