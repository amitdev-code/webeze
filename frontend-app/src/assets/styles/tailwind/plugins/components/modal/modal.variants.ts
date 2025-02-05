import type { ModalVariant } from './modal.types'

export const size = {
  sm: 'webeze-modal-sm',
  md: 'webeze-modal-md',
  lg: 'webeze-modal-lg',
  xl: 'webeze-modal-xl',
} as const satisfies ModalVariant<'size'>
