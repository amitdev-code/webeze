import type { HeadingVariant } from './heading.types'

export const size = {
  xs: 'webeze-heading-xs',
  sm: 'webeze-heading-sm',
  md: 'webeze-heading-md',
  lg: 'webeze-heading-lg',
  xl: 'webeze-heading-xl',
  '2xl': 'webeze-heading-2xl',
  '3xl': 'webeze-heading-3xl',
  '4xl': 'webeze-heading-4xl',
  '5xl': 'webeze-heading-5xl',
  '6xl': 'webeze-heading-6xl',
  '7xl': 'webeze-heading-7xl',
  '8xl': 'webeze-heading-8xl',
  '9xl': 'webeze-heading-9xl',
} as const satisfies HeadingVariant<'size'>

export const weight = {
  light: 'webeze-weight-light',
  normal: 'webeze-weight-normal',
  medium: 'webeze-weight-medium',
  semibold: 'webeze-weight-semibold',
  bold: 'webeze-weight-bold',
  extrabold: 'webeze-weight-extrabold',
} as const satisfies HeadingVariant<'weight'>

export const lead = {
  none: 'webeze-lead-none',
  tight: 'webeze-lead-tight',
  snug: 'webeze-lead-snug',
  normal: 'webeze-lead-normal',
  relaxed: 'webeze-lead-relaxed',
  loose: 'webeze-lead-loose',
} as const satisfies HeadingVariant<'lead'>
