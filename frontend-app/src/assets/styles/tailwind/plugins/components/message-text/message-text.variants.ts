import type { MessageTextVariant } from './message-text.types'

export const rounded = {
  none: '',
  sm: 'webeze-message-rounded-sm',
  md: 'webeze-message-rounded-md',
  lg: 'webeze-message-rounded-lg',
} as const satisfies MessageTextVariant<'rounded'>

export const color = {
  default: 'webeze-message-default',
  primary: 'webeze-message-primary',
  info: 'webeze-message-info',
  success: 'webeze-message-success',
  warning: 'webeze-message-warning',
  danger: 'webeze-message-danger',
  dark: 'webeze-message-dark',
  black: 'webeze-message-black',
  none: '',
} as const satisfies MessageTextVariant<'color'>

export const contrast = {
  'low-contrast': 'webeze-message-low-contrast',
  'high-contrast': 'webeze-message-high-contrast',
} as const satisfies MessageTextVariant<'contrast'>
