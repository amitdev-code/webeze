import type { PaginationVariant } from './pagination.types'

export const rounded = {
  none: '',
  sm: 'webeze-pagination-rounded-sm',
  md: 'webeze-pagination-rounded-md',
  lg: 'webeze-pagination-rounded-lg',
  full: 'webeze-pagination-rounded-full',
} as const satisfies PaginationVariant<'rounded'>

export const color = {
  primary: 'webeze-pagination-primary',
  dark: 'webeze-pagination-dark',
  black: 'webeze-pagination-black',
} as const satisfies PaginationVariant<'color'>
