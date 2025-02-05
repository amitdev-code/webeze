import type { AvatarGroupVariant } from './avatar-group.types'

export const size = {
  xxs: 'webeze-avatar-group-xxs',
  xs: 'webeze-avatar-group-xs',
  sm: 'webeze-avatar-group-sm',
  md: 'webeze-avatar-group-md',
  lg: 'webeze-avatar-group-lg',
} as const satisfies AvatarGroupVariant<'size'>
