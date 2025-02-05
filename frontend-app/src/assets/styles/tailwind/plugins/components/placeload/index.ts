import plugin from 'tailwindcss/plugin'
import { defaultConfig, key } from './placeload.config'

const config = {
  theme: {
    webeze: {
      [key]: defaultConfig,
    },
    extend: {
      keyframes: {
        'webeze-placeload': {
          '0%': { 'background-position': '-468px 0' },
          '100%': { 'background-position': '468px 0' },
        },
      },
      animation: {
        'webeze-placeload': `webeze-placeload 1s linear infinite forwards`,
      },
    },
  },
}

export default plugin(
  ({ addComponents }) =>
    addComponents({
      '.webeze-placeload': {
        position: 'relative',
        background:
          'linear-gradient( to right, rgb(0 0 0 / 7%) 8% ,rgb(0 0 0 / 15%) 18%, rgb(0 0 0 / 7%) 33%)',
        backgroundSize: '1200px 104px',
      },
      '.dark .webeze-placeload': {
        position: 'relative',
        background:
          'linear-gradient(to right, rgb(255 255 255 / 15%) 8%, rgb(255 255 255 / 24%) 18%, rgb(255 255 255 / 15%) 33%)',
        backgroundSize: '1200px 104px',
      },
    }),
  config,
)
