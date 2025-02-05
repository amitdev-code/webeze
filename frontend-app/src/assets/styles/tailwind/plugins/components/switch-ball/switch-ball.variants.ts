import type { SwitchBallVariant } from './switch-ball.types'

export const color = {
  primary: 'webeze-switch-ball-primary',
  info: 'webeze-switch-ball-info',
  success: 'webeze-switch-ball-success',
  warning: 'webeze-switch-ball-warning',
  danger: 'webeze-switch-ball-danger',
  dark: 'webeze-switch-ball-dark',
  black: 'webeze-switch-ball-black',
} as const satisfies SwitchBallVariant<'color'>
