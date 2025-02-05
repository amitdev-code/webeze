import type { ToastVariant } from './toast.types'

export const rounded = {
  none: '',
  sm: 'webeze-toast-rounded-sm',
  md: 'webeze-toast-rounded-md',
  lg: 'webeze-toast-rounded-lg',
} as const satisfies ToastVariant<'rounded'>

export const color = {
  default: 'webeze-toast-default',
  primary: 'webeze-toast-primary',
  info: 'webeze-toast-info',
  success: 'webeze-toast-success',
  warning: 'webeze-toast-warning',
  danger: 'webeze-toast-danger',
  dark: 'webeze-toast-dark',
  black: 'webeze-toast-black',
  none: '',
} as const satisfies ToastVariant<'color'>

export const contrast = {
  'low-contrast': 'webeze-toast-low-contrast',
  'high-contrast': 'webeze-toast-high-contrast',
} as const satisfies ToastVariant<'contrast'>
