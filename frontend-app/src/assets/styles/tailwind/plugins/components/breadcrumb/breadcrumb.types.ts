import type { PropertyVariant } from '../../../types'

export interface BreadcrumbProps extends Record<string, unknown> {
  separator?: 'slash' | 'chevron' | 'dot' | 'arrow'
  color?: 'primary' | 'dark' | 'black'
  items?: {
    label?: string
    hideLabel?: boolean
    icon?: any
    href?: string
  }[]
  classes?: {
    wrapper?: string | string[]
    list?: string | string[]
    dropdown?: string | string[]
    item?: string | string[]
  }
}

export interface BreadcrumbEvents {}

export interface BreadcrumbSlots {}

export type BreadcrumbAttrs = BreadcrumbProps &
  BreadcrumbEvents &
  BreadcrumbSlots
export type BreadcrumbVariant<T> = PropertyVariant<T, BreadcrumbProps>
