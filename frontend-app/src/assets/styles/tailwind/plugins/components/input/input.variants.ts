import type { InputVariant } from './input.types'

export const rounded = {
  none: '',
  sm: 'webeze-input-rounded-sm',
  md: 'webeze-input-rounded-md',
  lg: 'webeze-input-rounded-lg',
  full: 'webeze-input-rounded-full',
} as const satisfies InputVariant<'rounded'>

export const size = {
  sm: 'webeze-input-sm',
  md: 'webeze-input-md',
  lg: 'webeze-input-lg',
  xl: 'webeze-input-xl',
} as const satisfies InputVariant<'size'>

export const contrast = {
  default: 'webeze-input-default',
  'default-contrast': 'webeze-input-default-contrast',
  muted: 'webeze-input-muted',
  'muted-contrast': 'webeze-input-muted-contrast',
} as const satisfies InputVariant<'contrast'>
