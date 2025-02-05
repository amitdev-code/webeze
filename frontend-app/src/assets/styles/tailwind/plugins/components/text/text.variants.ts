import type { TextVariant } from './text.types'

export const size = {
  xs: 'webeze-content-xs',
  sm: 'webeze-content-sm',
  md: 'webeze-content-md',
  lg: 'webeze-content-lg',
  xl: 'webeze-content-xl',
  '2xl': 'webeze-content-2xl',
  '3xl': 'webeze-content-3xl',
  '4xl': 'webeze-content-4xl',
  '5xl': 'webeze-content-5xl',
  '6xl': 'webeze-content-6xl',
  '7xl': 'webeze-content-7xl',
  '8xl': 'webeze-content-8xl',
  '9xl': 'webeze-content-9xl',
} as const satisfies TextVariant<'size'>

export const weight = {
  light: 'webeze-weight-light',
  normal: 'webeze-weight-normal',
  medium: 'webeze-weight-medium',
  semibold: 'webeze-weight-semibold',
  bold: 'webeze-weight-bold',
  extrabold: 'webeze-weight-extrabold',
} as const satisfies TextVariant<'weight'>

export const lead = {
  none: 'webeze-lead-none',
  tight: 'webeze-lead-tight',
  snug: 'webeze-lead-snug',
  normal: 'webeze-lead-normal',
  relaxed: 'webeze-lead-relaxed',
  loose: 'webeze-lead-loose',
} as const satisfies TextVariant<'lead'>
