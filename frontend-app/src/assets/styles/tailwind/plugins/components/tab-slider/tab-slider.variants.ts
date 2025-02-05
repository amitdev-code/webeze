import type { TabSliderVariant } from './tab-slider.types'

export const justify = {
  start: '',
  center: 'webeze-tabs-centered',
  end: 'webeze-tabs-end',
} as const satisfies TabSliderVariant<'justify'>

export const size = {
  sm: 'webeze-tabs-sm',
  md: 'webeze-tabs-md',
} as const satisfies TabSliderVariant<'size'>

export const rounded = {
  none: '',
  sm: 'webeze-tabs-rounded-sm',
  md: 'webeze-tabs-rounded-md',
  lg: 'webeze-tabs-rounded-lg',
  full: 'webeze-tabs-rounded-full',
} as const satisfies TabSliderVariant<'rounded'>

export const color = {
  default: 'webeze-tabs-default',
  'default-contrast': 'webeze-tabs-default-contrast',
  primary: 'webeze-tabs-primary',
  light: 'webeze-tabs-light',
  dark: 'webeze-tabs-dark',
  black: 'webeze-tabs-black',
} as const satisfies TabSliderVariant<'color'>
