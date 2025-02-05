import type { PlaceholderPageVariant } from './placeholder-page.types'

export const size = {
  xs: 'webeze-placeholder-xs',
  sm: 'webeze-placeholder-sm',
  md: 'webeze-placeholder-md',
  lg: 'webeze-placeholder-lg',
  xl: 'webeze-placeholder-xl',
} as const satisfies PlaceholderPageVariant<'imageSize'>
