import type { ProgressVariant } from './progress.types'

export const color = {
  primary: 'webeze-progress-primary',
  info: 'webeze-progress-info',
  success: 'webeze-progress-success',
  warning: 'webeze-progress-warning',
  danger: 'webeze-progress-danger',
  light: 'webeze-progress-light',
  dark: 'webeze-progress-dark',
  black: 'webeze-progress-black',
} as const satisfies ProgressVariant<'color'>

export const contrast = {
  default: 'webeze-progress-default',
  contrast: 'webeze-progress-contrast',
} as const satisfies ProgressVariant<'contrast'>

export const rounded = {
  none: '',
  sm: 'webeze-progress-rounded-sm',
  md: 'webeze-progress-rounded-md',
  lg: 'webeze-progress-rounded-lg',
  full: 'webeze-progress-rounded-full',
} as const satisfies ProgressVariant<'rounded'>

export const size = {
  xs: 'webeze-progress-xs',
  sm: 'webeze-progress-sm',
  md: 'webeze-progress-md',
  lg: 'webeze-progress-lg',
  xl: 'webeze-progress-xl',
} as const satisfies ProgressVariant<'size'>
