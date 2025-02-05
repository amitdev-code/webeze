import type { FullscreenDropfileVariant } from './fullscreen-dropfile.types'

export const color = {
  primary: 'webeze-dropfile-primary',
  dark: 'webeze-dropfile-dark',
  black: 'webeze-dropfile-black',
} as const satisfies FullscreenDropfileVariant<'color'>
