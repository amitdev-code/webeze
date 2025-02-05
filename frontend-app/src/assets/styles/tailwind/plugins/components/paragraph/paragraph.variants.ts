import type { ParagraphVariant } from './paragraph.types'

export const size = {
  xs: 'webeze-paragraph-xs',
  sm: 'webeze-paragraph-sm',
  md: 'webeze-paragraph-md',
  lg: 'webeze-paragraph-lg',
  xl: 'webeze-paragraph-xl',
  '2xl': 'webeze-paragraph-2xl',
  '3xl': 'webeze-paragraph-3xl',
  '4xl': 'webeze-paragraph-4xl',
  '5xl': 'webeze-paragraph-5xl',
  '6xl': 'webeze-paragraph-6xl',
  '7xl': 'webeze-paragraph-7xl',
  '8xl': 'webeze-paragraph-8xl',
  '9xl': 'webeze-paragraph-9xl',
} as const satisfies ParagraphVariant<'size'>

export const weight = {
  light: 'webeze-weight-light',
  normal: 'webeze-weight-normal',
  medium: 'webeze-weight-medium',
  semibold: 'webeze-weight-semibold',
  bold: 'webeze-weight-bold',
  extrabold: 'webeze-weight-extrabold',
} as const satisfies ParagraphVariant<'weight'>

export const lead = {
  none: 'webeze-lead-none',
  tight: 'webeze-lead-tight',
  snug: 'webeze-lead-snug',
  normal: 'webeze-lead-normal',
  relaxed: 'webeze-lead-relaxed',
  loose: 'webeze-lead-loose',
} as const satisfies ParagraphVariant<'lead'>
