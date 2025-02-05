import type { DropdownVariant } from './dropdown.types'

export const orientation = {
  start: 'webeze-dropdown-start',
  end: 'webeze-dropdown-end',
} as const satisfies DropdownVariant<'orientation'>

export const size = {
  md: 'webeze-menu-md',
  lg: 'webeze-menu-lg',
} as const satisfies DropdownVariant<'size'>

export const rounded = {
  none: '',
  sm: 'webeze-menu-rounded-sm',
  md: 'webeze-menu-rounded-md',
  lg: 'webeze-menu-rounded-lg',
  full: 'webeze-menu-rounded-lg',
} as const satisfies DropdownVariant<'rounded'>

export const color = {
  default: 'webeze-menu-default',
  'default-contrast': 'webeze-menu-default-contrast',
  muted: 'webeze-menu-muted',
  'muted-contrast': 'webeze-menu-muted-contrast',
  primary: 'webeze-menu-primary',
  info: 'webeze-menu-info',
  success: 'webeze-menu-success',
  warning: 'webeze-menu-warning',
  danger: 'webeze-menu-danger',
  none: '',
} as const satisfies DropdownVariant<'color'>

export const textColor = {
  default: 'text-inherit',
  'default-contrast': 'text-inherit',
  muted: 'text-muted-500',
  'muted-contrast': 'text-muted-500',
  primary: 'text-primary-500',
  info: 'text-info-500',
  success: 'text-success-500',
  warning: 'text-warning-500',
  danger: 'text-danger-500',
  light: 'text-muted-100',
  dark: 'text-muted-900 dark:text-muted-100',
  black: 'text-black dark:text-white',
  none: '',
} as const satisfies DropdownVariant<'buttonColor'>
