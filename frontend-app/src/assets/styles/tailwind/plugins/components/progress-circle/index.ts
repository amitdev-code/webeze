import plugin from 'tailwindcss/plugin'
import {
  type ProgressCircleConfig,
  defaultConfig,
  key,
} from './progress-circle.config'

const config = {
  theme: {
    webeze: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`webeze.${key}`) satisfies ProgressCircleConfig

  addComponents({
    '.webeze-progress-circle': {
      '@apply relative inline-flex items-center justify-center': {},
      //Circle:progress
      'circle:nth-child(2)': {
        [`@apply stroke-current transition-${config.transition.property} duration-${config.transition.duration}`]:
          {},
      },
      //Color:default
      '&.webeze-progress-default circle:first-child': {
        [`@apply text-${config.color.default.color.light} dark:text-${config.color.default.color.dark} stroke-${config.color.default.color.stroke}`]:
          {},
      },
      //Color:contrast
      '&.webeze-progress-contrast circle:first-child': {
        [`@apply text-${config.color.contrast.color.light} dark:text-${config.color.contrast.color.light} stroke-${config.color.contrast.color.stroke}`]:
          {},
      },
    },
  })
}, config)
