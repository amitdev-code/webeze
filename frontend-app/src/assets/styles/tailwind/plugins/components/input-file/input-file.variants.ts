import type { InputFileVariant } from './input-file.types'

export const rounded = {
  none: '',
  sm: 'webeze-input-file-rounded-sm',
  md: 'webeze-input-file-rounded-md',
  lg: 'webeze-input-file-rounded-lg',
  full: 'webeze-input-file-rounded-full',
} as const satisfies InputFileVariant<'rounded'>

export const color = {
  primary: 'webeze-input-file-primary',
  dark: 'webeze-input-file-dark',
  black: 'webeze-input-file-black',
} as const satisfies InputFileVariant<'color'>
