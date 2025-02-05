import type { TagVariant } from './tag.types'

export const variant = {
  solid: 'webeze-tag-solid',
  pastel: 'webeze-tag-pastel',
  outline: 'webeze-tag-outline',
} as const satisfies TagVariant<'variant'>

export const rounded = {
  none: '',
  sm: 'webeze-tag-rounded-sm',
  md: 'webeze-tag-rounded-md',
  lg: 'webeze-tag-rounded-lg',
  full: 'webeze-tag-rounded-full',
} as const satisfies TagVariant<'rounded'>

export const color = {
  default: 'webeze-tag-default',
  'default-contrast': 'webeze-tag-default-contrast',
  muted: 'webeze-tag-muted',
  'muted-contrast': 'webeze-tag-muted-contrast',
  light: 'webeze-tag-light',
  dark: 'webeze-tag-dark',
  black: 'webeze-tag-black',
  primary: 'webeze-tag-primary',
  info: 'webeze-tag-info',
  success: 'webeze-tag-success',
  warning: 'webeze-tag-warning',
  danger: 'webeze-tag-danger',
} as const satisfies TagVariant<'color'>

export const shadow = {
  flat: 'webeze-tag-shadow',
  hover: 'webeze-tag-shadow-hover',
} as const satisfies TagVariant<'shadow'>

export const size = {
  sm: 'webeze-tag-sm',
  md: 'webeze-tag-md',
} as const satisfies TagVariant<'size'>
