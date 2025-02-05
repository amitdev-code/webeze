import type { IconBoxVariant } from './icon-box.types'

export const rounded = {
  none: '',
  sm: 'webeze-box-rounded-sm',
  md: 'webeze-box-rounded-md',
  lg: 'webeze-box-rounded-lg',
  full: 'webeze-box-rounded-full',
} as const satisfies IconBoxVariant<'rounded'>

export const size = {
  xs: 'webeze-box-xs',
  sm: 'webeze-box-sm',
  md: 'webeze-box-md',
  lg: 'webeze-box-lg',
  xl: 'webeze-box-xl',
  '2xl': 'webeze-box-2xl',
} as const satisfies IconBoxVariant<'size'>

export const variant = {
  solid: 'webeze-box-solid',
  pastel: 'webeze-box-pastel',
  outline: 'webeze-box-outline',
} as const satisfies IconBoxVariant<'variant'>

export const color = {
  default: 'webeze-box-default',
  'default-contrast': 'webeze-box-default-contrast',
  muted: 'webeze-box-muted',
  'muted-contrast': 'webeze-box-muted-contrast',
  light: 'webeze-box-light',
  dark: 'webeze-box-dark',
  black: 'webeze-box-black',
  primary: 'webeze-box-primary',
  info: 'webeze-box-info',
  success: 'webeze-box-success',
  warning: 'webeze-box-warning',
  danger: 'webeze-box-danger',
} as const satisfies IconBoxVariant<'color'>

export const mask = {
  hex: 'webeze-mask webeze-mask-hex',
  hexed: 'webeze-mask webeze-mask-hexed',
  deca: 'webeze-mask webeze-mask-deca',
  blob: 'webeze-mask webeze-mask-blob',
  diamond: 'webeze-mask webeze-mask-diamond',
} as const satisfies IconBoxVariant<'mask'>
