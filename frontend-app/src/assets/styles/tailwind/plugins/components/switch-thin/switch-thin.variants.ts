import type { SwitchThinVariant } from './switch-thin.types'

export const color = {
  primary: 'webeze-switch-thin-primary',
  info: 'webeze-switch-thin-info',
  success: 'webeze-switch-thin-success',
  warning: 'webeze-switch-thin-warning',
  danger: 'webeze-switch-thin-danger',
  dark: 'webeze-switch-thin-dark',
  black: 'webeze-switch-thin-black',
} as const satisfies SwitchThinVariant<'color'>
