import plugin from 'tailwindcss/plugin'
import { type ModalConfig, defaultConfig, key } from './modal.config'

const config = {
  theme: {
    webeze: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`webeze.${key}`) satisfies ModalConfig

  addComponents({
    //Wrapper
    '.webeze-modal': {
      '@apply fixed inset-0 z-[9999] flex items-center justify-center': {},
      //Modal:inner
      '.webeze-modal-inner': {
        '@apply relative z-[9999]': {},
      },
      //Modal:backdrop
      '.webeze-modal-backdrop': {
        [`@apply bg-${config.backdrop.background.light} dark:bg-${config.backdrop.background.dark} fixed inset-0`]:
          {},
      },
      //Modal:content
      '.webeze-modal-content': {
        '@apply fixed inset-0': {},
      },
      //Content:inner
      '.webeze-modal-content-inner': {
        [`@apply flex w-full min-h-full items-center justify-center p-${config.inner.padding} text-center`]:
          {},
      },
      //Content:panel
      '.webeze-modal-content-panel': {
        [`@apply w-${config.panel.size} text-${config.panel.align} align-middle transition-all`]:
          {},
      },
      //Size:sm
      '&.webeze-modal-sm': {
        '.webeze-modal-content-panel': {
          [`@apply max-w-${config.size.sm}`]: {},
        },
      },
      //Size:md
      '&.webeze-modal-md': {
        '.webeze-modal-content-panel': {
          [`@apply max-w-${config.size.md}`]: {},
        },
      },
      //Size:lg
      '&.webeze-modal-lg': {
        '.webeze-modal-content-panel': {
          [`@apply max-w-${config.size.lg}`]: {},
        },
      },
      //Size:xl
      '&.webeze-modal-xl': {
        '.webeze-modal-content-panel': {
          [`@apply max-w-${config.size.xl}`]: {},
        },
      },
      //Size:2xl
      '&.webeze-modal-2xl': {
        '.webeze-modal-content-panel': {
          [`@apply max-w-${config.size.xxl}`]: {},
        },
      },
      //Size:3xl
      '&.webeze-modal-3xl': {
        '.webeze-modal-content-panel': {
          [`@apply max-w-${config.size.xxxl}`]: {},
        },
      },
    },
  })
}, config)
