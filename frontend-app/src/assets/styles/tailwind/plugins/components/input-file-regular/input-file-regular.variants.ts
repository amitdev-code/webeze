import type { InputFileRegularVariant } from './input-file-regular.types'

export const rounded = {
  none: '',
  sm: 'webeze-input-rounded-sm',
  md: 'webeze-input-rounded-md',
  lg: 'webeze-input-rounded-lg',
  full: 'webeze-input-rounded-full',
} as const satisfies InputFileRegularVariant<'rounded'>

export const size = {
  sm: 'webeze-input-sm',
  md: 'webeze-input-md',
  lg: 'webeze-input-lg',
  xl: 'webeze-input-xl',
} as const satisfies InputFileRegularVariant<'size'>

export const contrast = {
  default: 'webeze-input-default',
  'default-contrast': 'webeze-input-default-contrast',
} as const satisfies InputFileRegularVariant<'contrast'>
