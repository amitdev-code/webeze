import type { ListboxVariant } from './listbox.types'

export const rounded = {
  none: '',
  sm: 'webeze-listbox-rounded-sm',
  md: 'webeze-listbox-rounded-md',
  lg: 'webeze-listbox-rounded-lg',
  full: 'webeze-listbox-rounded-full',
} as const satisfies ListboxVariant<'rounded'>

export const size = {
  sm: 'webeze-listbox-sm',
  md: 'webeze-listbox-md',
  lg: 'webeze-listbox-lg',
  xl: 'webeze-listbox-xl',
} as const satisfies ListboxVariant<'size'>

export const contrast = {
  default: 'webeze-listbox-default',
  'default-contrast': 'webeze-listbox-default-contrast',
  muted: 'webeze-listbox-muted',
  'muted-contrast': 'webeze-listbox-muted-contrast',
} as const satisfies ListboxVariant<'contrast'>
