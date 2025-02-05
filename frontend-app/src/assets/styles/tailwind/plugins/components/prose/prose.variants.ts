import type { ProseVariant } from './prose.types'

export const rounded = {
  none: 'webeze-prose-rounded-none',
  sm: 'webeze-prose-rounded-sm',
  md: 'webeze-prose-rounded-md',
  lg: 'webeze-prose-rounded-lg',
} as const satisfies ProseVariant<'rounded'>
