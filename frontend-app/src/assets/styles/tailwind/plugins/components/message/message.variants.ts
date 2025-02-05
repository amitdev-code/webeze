import type { MessageVariant } from './message.types'

export const rounded = {
  none: '',
  sm: 'webeze-message-rounded-sm',
  md: 'webeze-message-rounded-md',
  lg: 'webeze-message-rounded-lg',
  full: 'webeze-message-rounded-full',
} as const satisfies MessageVariant<'rounded'>

export const color = {
  default: 'webeze-message-default',
  'default-contrast': 'webeze-message-default-contrast',
  muted: 'webeze-message-muted',
  'muted-contrast': 'webeze-message-muted-contrast',
  primary: 'webeze-message-primary',
  info: 'webeze-message-info',
  success: 'webeze-message-success',
  warning: 'webeze-message-warning',
  danger: 'webeze-message-danger',
} as const satisfies MessageVariant<'color'>
