import type { AccordionVariant } from './accordion.types'

export const color = {
  default: 'webeze-accordion-default',
  'default-contrast': 'webeze-accordion-default-contrast',
  muted: 'webeze-accordion-muted',
  'muted-contrast': 'webeze-accordion-muted-contrast',
} as const satisfies AccordionVariant<'color'>

export const dotColor = {
  default: 'webeze-dot-default',
  primary: 'webeze-dot-primary',
  info: 'webeze-dot-info',
  success: 'webeze-dot-success',
  warning: 'webeze-dot-warning',
  danger: 'webeze-dot-danger',
  dark: 'webeze-dot-dark',
  black: 'webeze-dot-black',
} as const satisfies AccordionVariant<'dotColor'>

export const rounded = {
  none: '',
  sm: 'webeze-accordion-rounded-sm',
  md: 'webeze-accordion-rounded-md',
  lg: 'webeze-accordion-rounded-lg',
} as const satisfies AccordionVariant<'rounded'>

export const action = {
  dot: 'webeze-accordion-dot',
  chevron: 'webeze-accordion-chevron',
  plus: 'webeze-accordion-plus',
} as const satisfies AccordionVariant<'action'>
