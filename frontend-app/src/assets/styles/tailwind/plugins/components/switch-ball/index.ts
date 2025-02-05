import plugin from 'tailwindcss/plugin'
import { type SwitchBallConfig, defaulConfig, key } from './switch-ball.config'

const config = {
  theme: {
    webeze: {
      [key]: defaulConfig,
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`webeze.${key}`) satisfies SwitchBallConfig

  addComponents({
    //Wrapper
    '.webeze-switch-ball': {
      '@apply flex cursor-pointer items-center': {},
      //Switch:outer
      '.webeze-switch-ball-outer': {
        [`@apply webeze-focus relative block ${config.track.rounded}`]: {},
      },
      //Switch:handle
      '.webeze-switch-ball-handle': {
        [`@apply absolute start-0.5 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center ${config.handle.rounded} shadow focus:w-6`]:
          {},
        //Size
        [`@apply h-${config.handle.size} w-${config.handle.size}`]: {},
        //Background
        [`@apply bg-${config.handle.background.light} dark:bg-${config.handle.background.dark}`]:
          {},
        //Border
        [`@apply border border-${config.handle.border.light} dark:border-${config.handle.border.dark}`]:
          {},
        //Transition
        [`@apply transition-${config.track.transition.property} duration-${config.track.transition.duration}`]:
          {},
      },
      //Switch:track
      '.webeze-switch-ball-track': {
        //Base
        [`@apply block h-6 w-11 ${config.track.rounded}`]: {},
        //Background
        [`@apply bg-${config.track.background.light} dark:bg-${config.track.background.dark}`]:
          {},
        //Transition
        [`@apply transition-${config.track.transition.property} duration-${config.track.transition.duration}`]:
          {},
      },
      //Switch:icon
      '.webeze-switch-ball-icon': {
        //Base
        '@apply pointer-events-none absolute start-2 top-1/2 z-10 translate-y-0 fill-current opacity-0':
          {},
        //Color
        [`@apply text-${config.icon.color.light} dark:text-${config.icon.color.dark}`]:
          {},
        //Size
        [`@apply h-${config.icon.size} w-${config.icon.size}`]: {},
        //Transition
        [`@apply transition-${config.track.transition.property} duration-${config.track.transition.duration}`]:
          {},
      },
      //Label:single
      '.webeze-switch-ball-single-label': {
        //Base
        '@apply relative ms-3 cursor-pointer select-none': {},
        //Font
        [`@apply font-${config.label.single.font.family} text-${config.label.single.font.size}`]:
          {},
        //Color
        [`@apply text-${config.label.single.font.color.light} dark:text-${config.label.single.font.color.dark}`]:
          {},
      },
      //Label:dual
      '.webeze-switch-ball-dual-label': {
        '@apply ms-3': {},

        '.webeze-switch-ball-label': {
          //Base
          '@apply block': {},
          //Font
          [`@apply font-${config.label.dual.label.font.family} text-${config.label.dual.label.font.size}`]:
            {},
          //Color
          [`@apply text-${config.label.dual.label.font.color.light} dark:text-${config.label.dual.label.font.color.dark}`]:
            {},
        },
        //Label:sublabel
        '.webeze-switch-ball-sublabel': {
          //Base
          '@apply block': {},
          //Font
          [`@apply font-${config.label.dual.sublabel.font.family} text-${config.label.dual.sublabel.font.size}`]:
            {},
          //Color
          [`@apply text-${config.label.dual.sublabel.font.color.light} dark:text-${config.label.dual.sublabel.font.color.dark}`]:
            {},
        },
      },
      //Switch:input
      '.webeze-switch-ball-input': {
        [`@apply absolute z-0 h-${config.input.size} w-${config.input.size} cursor-pointer opacity-0`]:
          {},
        //Input:checked:handle
        '&:checked ~ .webeze-switch-ball-handle': {
          '@apply -translate-y-1/2 translate-x-full rtl:-translate-x-full': {},
        },
        //Input:checked:icon
        '&:checked ~ .webeze-switch-ball-icon': {
          '@apply -translate-y-1/2 opacity-100': {},
        },
      },
      //color:primary
      '&.webeze-switch-ball-primary .webeze-switch-ball-input:checked ~ .webeze-switch-ball-track':
        {
          [`@apply bg-${config.color.primary.light} dark:bg-${config.color.primary.dark}`]:
            {},
        },
      //color:info
      '&.webeze-switch-ball-info .webeze-switch-ball-input:checked ~ .webeze-switch-ball-track':
        {
          [`@apply bg-${config.color.info.light} dark:bg-${config.color.info.dark}`]:
            {},
        },
      //color:success
      '&.webeze-switch-ball-success .webeze-switch-ball-input:checked ~ .webeze-switch-ball-track':
        {
          [`@apply bg-${config.color.success.light} dark:bg-${config.color.success.dark}`]:
            {},
        },
      //color:warning
      '&.webeze-switch-ball-warning .webeze-switch-ball-input:checked ~ .webeze-switch-ball-track':
        {
          [`@apply bg-${config.color.warning.light} dark:bg-${config.color.warning.dark}`]:
            {},
        },
      //color:danger
      '&.webeze-switch-ball-danger .webeze-switch-ball-input:checked ~ .webeze-switch-ball-track':
        {
          [`@apply bg-${config.color.danger.light} dark:bg-${config.color.danger.dark}`]:
            {},
        },
      //color:dark
      '&.webeze-switch-ball-dark .webeze-switch-ball-input:checked ~ .webeze-switch-ball-track':
        {
          [`@apply bg-${config.color.dark.light} dark:bg-${config.color.dark.dark}`]:
            {},
        },
      '&.webeze-switch-ball-dark .webeze-switch-ball-icon': {
        [`@apply text-muted-100 dark:text-muted-900`]: {},
      },
      //color:black
      '&.webeze-switch-ball-black .webeze-switch-ball-input:checked ~ .webeze-switch-ball-track':
        {
          [`@apply bg-${config.color.black.light} dark:bg-${config.color.black.dark}`]:
            {},
        },
      '&.webeze-switch-ball-black .webeze-switch-ball-icon': {
        [`@apply text-white dark:text-black`]: {},
      },
    },
  })
}, config)
