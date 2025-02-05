import plugin from 'tailwindcss/plugin'
import { type MarkConfig, defaultConfig, key } from './mark.config'

const config = {
  theme: {
    webeze: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`webeze.${key}`) satisfies MarkConfig

  addComponents({
    '.webeze-mark': {
      [`@apply bg-${config.background.light} dark:bg-${config.background.dark}`]:
        {},
      [`@apply text-${config.color.light} dark:text-${config.color.dark}`]: {},
    },
  })
}, config)
