import type { DropdownItemVariant } from './dropdown-item.types'

export const rounded = {
  none: '',
  sm: 'webeze-item-rounded-sm',
  md: 'webeze-item-rounded-md',
  lg: 'webeze-item-rounded-lg',
} as const satisfies DropdownItemVariant<'rounded'>

export const contrast = {
  default: 'webeze-item-default',
  contrast: 'webeze-item-contrast',
} as const satisfies DropdownItemVariant<'contrast'>

export const color = {
  primary: 'webeze-item-primary',
  info: 'webeze-item-info',
  success: 'webeze-item-success',
  warning: 'webeze-item-warning',
  danger: 'webeze-item-danger',
  dark: 'webeze-item-dark',
  black: 'webeze-item-black',
} as const satisfies DropdownItemVariant<'color'>
