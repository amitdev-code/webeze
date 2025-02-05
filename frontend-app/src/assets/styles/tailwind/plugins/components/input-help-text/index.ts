import plugin from 'tailwindcss/plugin'
import {
  type InputHelpTextConfig,
  defaultConfig,
  key,
} from './input-help-text.config'

const config = {
  theme: {
    webeze: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`webeze.${key}`) satisfies InputHelpTextConfig

  addComponents({
    '.webeze-input-help-text': {
      //Base
      '@apply mt-1 block': {},
      //Font
      [`@apply font-${config.font.family} text-${config.font.size} font-${config.font.weight} leading-none`]:
        {},
    },
  })
}, config)
