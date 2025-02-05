import plugin from 'tailwindcss/plugin'
import { type LabelPluginConfig, defaultConfig, key } from './label.config'

const config = {
  theme: {
    webeze: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`webeze.${key}`) satisfies LabelPluginConfig

  addComponents({
    '.webeze-label': {
      [`@apply inline-block font-${config.font.family} leading-none text-${config.font.color.light} dark:text-${config.font.color.dark}`]:
        {},
    },
  })
}, config)
