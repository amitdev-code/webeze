import plugin from 'tailwindcss/plugin'
import { type SlimscrollConfig, defaultConfig, key } from './slimscroll.config'

const config = {
  theme: {
    webeze: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`webeze.${key}`) satisfies SlimscrollConfig

  addComponents({
    '.webeze-slimscroll::-webkit-scrollbar, .webeze-slimscroll-opaque::-webkit-scrollbar':
      {
        scrollBehavior: 'smooth',
        scrollbarGutter: 'stable',
        [`@apply w-${config.width} h-${config.height}`]: {},
      },
    '.webeze-slimscroll::-webkit-scrollbar-thumb': {
      [`@apply rounded-lg bg-${config.background.base.light} dark:bg-${config.background.base.dark} duration-300 transition-all`]:
        {},
    },
    '.webeze-slimscroll-opaque::-webkit-scrollbar-thumb': {
      '@apply rounded-lg bg-transparent duration-300 transition-all': {},
    },
    '.webeze-slimscroll:hover::-webkit-scrollbar-thumb, .webeze-slimscroll-opaque:hover::-webkit-scrollbar-thumb':
      {
        [`@apply bg-${config.background.hover.light} dark:bg-${config.background.hover.dark}`]:
          {},
      },
  })
}, config)
