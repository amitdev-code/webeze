import plugin from 'tailwindcss/plugin'
import { type ProgressConfig, defaultConfig, key } from './progress.config'

const config = {
  theme: {
    webeze: {
      [key]: defaultConfig,
    },
    extend: {
      keyframes: {
        'webeze-progress-indeterminate': {
          '0%': { 'margin-left': '-100%' },
          '60%': { 'margin-left': '100%' },
          '100%': { 'margin-left': '-100%' },
        },
      },
      animation: {
        'webeze-progress-indeterminate': `webeze-progress-indeterminate 3s linear infinite forwards`,
      },
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`webeze.${key}`) satisfies ProgressConfig

  addComponents({
    '.webeze-progress': {
      [`@apply relative w-${config.width} overflow-hidden`]: {},
      //Bar
      '.webeze-progress-bar': {
        [`@apply absolute start-0 top-0 h-full transition-${config.bar.transition.property} duration-${config.bar.transition.duration}`]:
          {},
      },
      //Color
      '&.webeze-progress-default': {
        [`@apply bg-${config.color.default.background.light} dark:bg-${config.color.default.background.dark}`]:
          {},
      },
      '&.webeze-progress-contrast': {
        [`@apply bg-${config.color.defaultContrast.background.light} dark:bg-${config.color.defaultContrast.background.dark}`]:
          {},
      },
      //Size
      '&.webeze-progress-xs': {
        [`@apply h-${config.size.xs}`]: {},
      },
      '&.webeze-progress-sm': {
        [`@apply h-${config.size.sm}`]: {},
      },
      '&.webeze-progress-md': {
        [`@apply h-${config.size.md}`]: {},
      },
      '&.webeze-progress-lg': {
        [`@apply h-${config.size.lg}`]: {},
      },
      '&.webeze-progress-xl': {
        [`@apply h-${config.size.xl}`]: {},
      },
      //Rounded
      '&.webeze-progress-rounded-sm, &.webeze-progress-rounded-sm .webeze-progress-bar':
        {
          [`@apply ${config.rounded.sm}`]: {},
        },
      '&.webeze-progress-rounded-md, &.webeze-progress-rounded-md .webeze-progress-bar':
        {
          [`@apply ${config.rounded.md}`]: {},
        },
      '&.webeze-progress-rounded-lg, &.webeze-progress-rounded-lg .webeze-progress-bar':
        {
          [`@apply ${config.rounded.lg}`]: {},
        },
      '&.webeze-progress-rounded-full, &.webeze-progress-rounded-full .webeze-progress-bar':
        {
          [`@apply ${config.rounded.full}`]: {},
        },
      '&.webeze-progress-indeterminate .webeze-progress-bar': {
        '@apply w-full': {},
      },
      //Bar color
      '&.webeze-progress-primary': {
        '.webeze-progress-bar': {
          [`@apply bg-${config.bar.color.primary}`]: {},
        },
      },
      '&.webeze-progress-info': {
        '.webeze-progress-bar': {
          [`@apply bg-${config.bar.color.info}`]: {},
        },
      },
      '&.webeze-progress-success': {
        '.webeze-progress-bar': {
          [`@apply bg-${config.bar.color.success}`]: {},
        },
      },
      '&.webeze-progress-warning': {
        '.webeze-progress-bar': {
          [`@apply bg-${config.bar.color.warning}`]: {},
        },
      },
      '&.webeze-progress-danger': {
        '.webeze-progress-bar': {
          [`@apply bg-${config.bar.color.danger}`]: {},
        },
      },
      '&.webeze-progress-light': {
        '.webeze-progress-bar': {
          [`@apply ${config.bar.color.light}`]: {},
        },
      },
      '&.webeze-progress-dark': {
        '.webeze-progress-bar': {
          [`@apply ${config.bar.color.dark}`]: {},
        },
      },
      '&.webeze-progress-black': {
        '.webeze-progress-bar': {
          [`@apply ${config.bar.color.black}`]: {},
        },
      },
    },
  })
}, config)
