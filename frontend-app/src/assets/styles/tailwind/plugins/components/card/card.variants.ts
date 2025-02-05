import type { CardVariant } from './card.types'

export const rounded = {
  none: '',
  sm: 'webeze-card-rounded-sm',
  md: 'webeze-card-rounded-md',
  lg: 'webeze-card-rounded-lg',
} as const satisfies CardVariant<'rounded'>

export const color = {
  default: 'webeze-card-default',
  'default-contrast': 'webeze-card-default-contrast',
  muted: 'webeze-card-muted',
  'muted-contrast': 'webeze-card-muted-contrast',
  dark: 'webeze-card-dark',
  black: 'webeze-card-black',
  primary: 'webeze-card-primary',
  info: 'webeze-card-info',
  success: 'webeze-card-success',
  warning: 'webeze-card-warning',
  danger: 'webeze-card-danger',
  none: '',
} as const satisfies CardVariant<'color'>
