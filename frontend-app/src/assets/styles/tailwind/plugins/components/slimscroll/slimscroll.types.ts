import type { PropertyVariant } from '../../../types'

export interface SlimscrollProps extends Record<string, unknown> {}

export interface SlimscrollEvents {}

export interface SlimscrollSlots {}

export type SlimscrollAttrs = SlimscrollProps &
  SlimscrollEvents &
  SlimscrollSlots
export type SlimscrollVariant<T> = PropertyVariant<T, SlimscrollProps>
