import type { AvatarVariant } from './avatar.types'

export const dot = {
  success: 'webeze-dot-success',
  primary: 'webeze-dot-primary',
  info: 'webeze-dot-info',
  warning: 'webeze-dot-warning',
  danger: 'webeze-dot-danger',
  pink: 'webeze-dot-pink',
  yellow: 'webeze-dot-yellow',
} as const satisfies AvatarVariant<'dot'>

export const ring = {
  success: 'webeze-ring-success',
  primary: 'webeze-ring-primary',
  info: 'webeze-ring-info',
  warning: 'webeze-ring-warning',
  danger: 'webeze-ring-danger',
  pink: 'webeze-ring-pink',
  yellow: 'webeze-ring-yellow',
} as const satisfies AvatarVariant<'ring'>

export const size = {
  xxs: 'webeze-avatar-xxs',
  xs: 'webeze-avatar-xs',
  sm: 'webeze-avatar-sm',
  md: 'webeze-avatar-md',
  lg: 'webeze-avatar-lg',
  xl: 'webeze-avatar-xl',
  '2xl': 'webeze-avatar-2xl',
  '3xl': 'webeze-avatar-3xl',
  '4xl': 'webeze-avatar-4xl',
} as const satisfies AvatarVariant<'size'>

export const rounded = {
  none: 'webeze-avatar-rounded-none',
  sm: 'webeze-avatar-rounded-sm',
  md: 'webeze-avatar-rounded-md',
  lg: 'webeze-avatar-rounded-lg',
  full: 'webeze-avatar-rounded-full',
} as const satisfies AvatarVariant<'rounded'>

export const mask = {
  hex: 'webeze-mask-hex',
  hexed: 'webeze-mask-hexed',
  deca: 'webeze-mask-deca',
  blob: 'webeze-mask-blob',
  diamond: 'webeze-mask-diamond',
} as const satisfies AvatarVariant<'mask'>

export const color = {
  white: 'bg-white dark:bg-muted-800 text-muted-600 dark:text-muted-200',
  muted: 'bg-muted-100 dark:bg-muted-800 text-muted-600 dark:text-muted-200',
  primary: 'bg-primary-500/20 text-primary-500',
  info: 'bg-info-500/20 text-info-500',
  success: 'bg-success-500/20 text-success-500',
  warning: 'bg-warning-500/20 text-warning-500',
  danger: 'bg-danger-500/20 text-danger-500',
  yellow: 'bg-yellow-500/20 text-yellow-400',
  pink: 'bg-pink-500/20 text-pink-400',
  indigo: 'bg-indigo-500/20 text-indigo-500',
  violet: 'bg-violet-500/20 text-violet-500',
} as const satisfies AvatarVariant<'color'>
