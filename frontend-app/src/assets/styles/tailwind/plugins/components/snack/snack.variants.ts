import type { SnackVariant } from './snack.types'

export const size = {
  xs: 'webeze-snack-xs',
  sm: 'webeze-snack-sm',
  md: 'webeze-snack-md',
} as const satisfies SnackVariant<'size'>

export const color = {
  default: 'webeze-snack-default',
  'default-contrast': 'webeze-snack-default-contrast',
  muted: 'webeze-snack-muted',
  'muted-contrast': 'webeze-snack-muted-contrast',
} as const satisfies SnackVariant<'color'>
