import type { TextareaVariant } from './textarea.types'

export const rounded = {
  none: '',
  sm: 'webeze-textarea-rounded-sm',
  md: 'webeze-textarea-rounded-md',
  lg: 'webeze-textarea-rounded-lg',
  full: 'webeze-textarea-rounded-lg',
} as const satisfies TextareaVariant<'rounded'>

export const size = {
  sm: 'webeze-textarea-sm',
  md: 'webeze-textarea-md',
  lg: 'webeze-textarea-lg',
} as const satisfies TextareaVariant<'size'>

export const contrast = {
  default: 'webeze-textarea-default',
  'default-contrast': 'webeze-textarea-default-contrast',
  muted: 'webeze-textarea-muted',
  'muted-contrast': 'webeze-textarea-muted-contrast',
} as const satisfies TextareaVariant<'contrast'>
