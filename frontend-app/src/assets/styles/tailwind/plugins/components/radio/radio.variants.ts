import type { RadioVariant } from './radio.types'

export const color = {
  default: 'webeze-radio-default',
  muted: 'webeze-radio-muted',
  light: 'webeze-radio-light',
  dark: 'webeze-radio-dark',
  black: 'webeze-radio-black',
  primary: 'webeze-radio-primary',
  info: 'webeze-radio-info',
  success: 'webeze-radio-success',
  warning: 'webeze-radio-warning',
  danger: 'webeze-radio-danger',
} as const satisfies RadioVariant<'color'>
