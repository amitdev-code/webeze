import type { BreadcrumbVariant } from './breadcrumb.types'

export const color = {
  primary: 'webeze-breadcrumb-primary',
  dark: 'webeze-breadcrumb-dark',
  black: 'webeze-breadcrumb-black',
} as const satisfies BreadcrumbVariant<'color'>
