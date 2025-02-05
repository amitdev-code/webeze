import plugin from 'tailwindcss/plugin'
import {
  type PlaceholderPageConfig,
  defaultConfig,
  key,
} from './placeholder-page.config'

const config = {
  theme: {
    webeze: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`webeze.${key}`) satisfies PlaceholderPageConfig

  addComponents({
    '.webeze-placeholder-page': {
      [`@apply flex min-h-${config.height.min} items-center justify-center`]:
        {},

      '.webeze-placeholder-page-inner': {
        [`@apply mx-auto w-${config.inner.width} text-center`]: {},
      },
      '.webeze-placeholder-page-img': {
        '@apply mx-auto block': {},
      },
      '.webeze-placeholder-page-content': {
        [`@apply mx-auto max-w-${config.content.width.max}`]: {},
      },
      '.webeze-placeholder-page-actions': {
        '@apply mt-4 flex justify-center gap-2': {},
      },
      '.webeze-placeholder-page-title': {
        [`@apply text-${config.title.font.color.light} dark:text-${config.title.font.color.dark} mb-1 mt-4`]:
          {},
      },
      '.webeze-placeholder-page-subtitle': {
        [`@apply text-${config.subtitle.font.color.light} dark:text-${config.subtitle.font.color.dark}`]:
          {},
      },
      '&.webeze-placeholder-xs .webeze-placeholder-page-img': {
        [`@apply max-w-${config.size.image.xs}`]: {},
      },
      '&.webeze-placeholder-sm .webeze-placeholder-page-img': {
        [`@apply max-w-${config.size.image.sm}`]: {},
      },
      '&.webeze-placeholder-md .webeze-placeholder-page-img': {
        [`@apply max-w-${config.size.image.md}`]: {},
      },
      '&.webeze-placeholder-lg .webeze-placeholder-page-img': {
        [`@apply max-w-${config.size.image.lg}`]: {},
      },
      '&.webeze-placeholder-xl .webeze-placeholder-page-img': {
        [`@apply max-w-${config.size.image.xl}`]: {},
      },
    },
  })
}, config)
