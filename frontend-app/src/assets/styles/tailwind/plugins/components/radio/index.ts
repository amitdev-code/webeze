import plugin from 'tailwindcss/plugin'
import { type RadioConfig, defaultConfig, key } from './radio.config'

const config = {
  theme: {
    webeze: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`webeze.${key}`) satisfies RadioConfig

  addComponents({
    '.webeze-radio': {
      '@apply relative inline-flex items-start gap-1': {},

      '.webeze-radio-outer': {
        '@apply webeze-focus relative flex items-center justify-center shrink-0 cursor-pointer overflow-hidden rounded-full':
          {},
        //Size
        [`@apply h-${config.outer.size} w-${config.outer.size}`]: {},
      },
      //Radio:inner
      '.webeze-radio-inner': {
        //Base
        [`@apply absolute start-0 top-0 z-0 ${config.inner.rounded}`]: {},
        //Size
        [`@apply h-${config.inner.size} w-${config.inner.size}`]: {},
        //Background
        [`@apply bg-${config.inner.background.light} dark:bg-${config.inner.background.dark}`]:
          {},
        //Border
        [`@apply border-2 border-${config.inner.border.light} dark:border-${config.inner.border.dark}`]:
          {},
      },
      //Radio:dot
      '.webeze-radio-dot': {
        //Base
        [`@apply pointer-events-none z-10 block scale-0 ${config.dot.rounded}`]:
          {},
        //Size
        [`@apply h-${config.dot.size} w-${config.dot.size}`]: {},
        //Background
        [`@apply bg-${config.dot.background.light} dark:bg-${config.dot.background.dark}`]:
          {},
        //Transition
        [`@apply transition-${config.dot.transition.property} duration-${config.dot.transition.duration}`]:
          {},
      },
      //Radio:input
      '.webeze-radio-input': {
        [`@apply absolute z-20 h-${config.input.size} w-${config.input.size} cursor-pointer opacity-0`]:
          {},
        //Input:checked:inner
        '&:checked ~ .webeze-radio-inner': {
          '@apply border-current': {},
        },
        //Input:checked:dot
        '&:checked ~ .webeze-radio-dot': {
          '@apply scale-100': {},
        },
      },
      //Radio:label
      '.webeze-radio-label-wrapper': {
        '@apply inline-flex flex-col': {},
      },
      //Label:text
      '.webeze-radio-label-text': {
        '@apply ms-1 cursor-pointer select-none': {},
        //Font
        [`@apply font-${config.label.font.family} text-${config.label.font.size} text-${config.label.font.color.light} dark:text-${config.label.font.color.dark}`]:
          {},
      },
      //Radio:error
      '.webeze-radio-error': {
        '@apply ms-1 inline-block': {},
      },
      //Color:default
      '&.webeze-radio-default': {
        [`@apply text-${config.color.default.light} dark:text-${config.color.default.dark}`]:
          {},
      },
      //Color:muted
      '&.webeze-radio-muted': {
        [`@apply text-${config.color.muted.light} dark:text-${config.color.muted.dark}`]:
          {},
      },
      //Color:light
      '&.webeze-radio-light': {
        [`@apply text-${config.color.light.light} dark:text-${config.color.light.dark}`]:
          {},
      },
      //Color:dark
      '&.webeze-radio-dark': {
        [`@apply text-${config.color.dark.light} dark:text-${config.color.dark.dark}`]:
          {},
      },
      //Color:black
      '&.webeze-radio-black': {
        [`@apply text-${config.color.black.light} dark:text-${config.color.black.dark}`]:
          {},
      },
      //Color:primary
      '&.webeze-radio-primary': {
        [`@apply text-${config.color.primary.light} dark:text-${config.color.primary.dark}`]:
          {},
      },
      //Color:info
      '&.webeze-radio-info': {
        [`@apply text-${config.color.info.light} dark:text-${config.color.info.dark}`]:
          {},
      },
      //Color:success
      '&.webeze-radio-success': {
        [`@apply text-${config.color.success.light} dark:text-${config.color.default.dark}`]:
          {},
      },
      //Color:warning
      '&.webeze-radio-warning': {
        [`@apply text-${config.color.warning.light} dark:text-${config.color.warning.dark}`]:
          {},
      },
      //Color:danger
      '&.webeze-radio-danger': {
        [`@apply text-${config.color.danger.light} dark:text-${config.color.danger.dark}`]:
          {},
      },
    },
  })
}, config)
