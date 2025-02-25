import type { PropertyVariant } from '../../../types'

export interface DropdownDividerProps extends Record<string, unknown> {
  classes?: {
    wrapper?: string | string[]
  }
}

export interface DropdownDividerEvents {}

export interface DropdownDividerSlots {}

export type DropdownDividerAttrs = DropdownDividerProps &
  DropdownDividerEvents &
  DropdownDividerSlots
export type DropdownDividerVariant<T> = PropertyVariant<T, DropdownDividerProps>
