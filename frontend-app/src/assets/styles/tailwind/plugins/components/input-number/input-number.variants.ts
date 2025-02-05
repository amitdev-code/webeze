import type { InputVariant } from './input-number.types'

export const rounded = {
  none: '',
  sm: 'webeze-input-number-rounded-sm',
  md: 'webeze-input-number-rounded-md',
  lg: 'webeze-input-number-rounded-lg',
  full: 'webeze-input-number-rounded-full',
} as const satisfies InputVariant<'rounded'>

export const size = {
  sm: 'webeze-input-number-sm',
  md: 'webeze-input-number-md',
  lg: 'webeze-input-number-lg',
  xl: 'webeze-input-number-xl',
} as const satisfies InputVariant<'size'>

export const contrast = {
  default: 'webeze-input-number-default',
  'default-contrast': 'webeze-input-number-default-contrast',
  muted: 'webeze-input-number-muted',
  'muted-contrast': 'webeze-input-number-muted-contrast',
} as const satisfies InputVariant<'contrast'>
