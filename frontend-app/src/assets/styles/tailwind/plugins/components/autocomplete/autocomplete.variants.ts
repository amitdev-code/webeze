import type { AutocompleteVariant } from './autocomplete.types'

export const rounded = {
  none: '',
  sm: 'webeze-autocomplete-rounded-sm',
  md: 'webeze-autocomplete-rounded-md',
  lg: 'webeze-autocomplete-rounded-lg',
  full: 'webeze-autocomplete-rounded-full',
} as const satisfies AutocompleteVariant<'rounded'>

export const size = {
  sm: 'webeze-autocomplete-sm',
  md: 'webeze-autocomplete-md',
  lg: 'webeze-autocomplete-lg',
  xl: 'webeze-autocomplete-xl',
} as const satisfies AutocompleteVariant<'size'>

export const contrast = {
  default: 'webeze-autocomplete-default',
  'default-contrast': 'webeze-autocomplete-default-contrast',
  muted: 'webeze-autocomplete-muted',
  'muted-contrast': 'webeze-autocomplete-muted-contrast',
} as const satisfies AutocompleteVariant<'contrast'>
