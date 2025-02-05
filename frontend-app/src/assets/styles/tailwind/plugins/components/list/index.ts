import plugin from 'tailwindcss/plugin'
import { type ListPluginConfig, defaultConfig, key } from './list.config'

const config = {
  theme: {
    webeze: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`webeze.${key}`) satisfies ListPluginConfig

  addComponents({
    '.webeze-list': {
      '&.webeze-list-ul': {
        [`@apply list-${config.ul}`]: {},
      },
      '&.webeze-list-ol': {
        [`@apply list-${config.ol}`]: {},
      },
      '&.webeze-list-base': {
        //Base
        [`@apply space-y-1 font-${config.base.font.family}`]: {},
        //Text
        [`@apply text-${config.base.font.color.text.light} dark:text-${config.base.font.color.text.dark}`]:
          {},
        //Marker
        [`@apply marker:text-${config.base.font.color.marker.light} dark:marker:text-${config.base.font.color.marker.dark}`]:
          {},
      },
      '&.webeze-list-media': {
        [`@apply space-y-4 marker:text-${config.media.marker.color.light} dark:marker:text-${config.media.marker.color.dark}`]:
          {},
        '.webeze-list-item': {
          '@apply flex gap-2': {},
        },
      },
    },
  })
}, config)
