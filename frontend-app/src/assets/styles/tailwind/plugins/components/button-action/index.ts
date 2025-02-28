import plugin from 'tailwindcss/plugin'
import {
  type ButtonActionConfig,
  defaultConfig,
  key,
} from './button-action.config'

const config = {
  theme: {
    webeze: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`webeze.${key}`) satisfies ButtonActionConfig

  addComponents({
    '.webeze-button-action': {
      //Wrapper
      '@apply webeze-focus relative inline-flex items-center justify-center border leading-5 no-underline h-8 px-3 py-2 space-x-1':
        {},
      //Font
      [`@apply font-${config.text.font.family} font-${config.text.font.weight} text-${config.text.font.size}`]:
        {},
      //State
      '@apply disabled:opacity-60 disabled:cursor-not-allowed hover:enabled:shadow-none':
        {},
      //Transition
      [`@apply transition-${config.transition.property} duration-${config.transition.duration}`]:
        {},
      //Rounded:sm
      '&.webeze-button-rounded-sm': {
        [`@apply rounded-${config.rounded.sm}`]: {},
      },
      //Rounded:md
      '&.webeze-button-rounded-md': {
        [`@apply rounded-${config.rounded.md}`]: {},
      },
      //Rounded:lg
      '&.webeze-button-rounded-lg': {
        [`@apply rounded-${config.rounded.lg}`]: {},
      },
      //Rounded:full
      '&.webeze-button-rounded-full': {
        [`@apply rounded-${config.rounded.full}`]: {},
      },
      //ButtonAction:loading
      '&.webeze-button-loading': {
        '@apply !text-transparent': {},
      },
      //Color:default
      '&.webeze-button-default': {
        //Font
        [`@apply text-${config.color.default.font.color.light} dark:text-${config.color.default.font.color.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.default.background.base.light} dark:bg-${config.color.default.background.base.dark}`]:
          {},
        //Hover
        [`@apply hover:enabled:bg-${config.color.default.background.hover.light} dark:hover:enabled:bg-${config.color.default.background.hover.dark}`]:
          {},
        //Active
        [`@apply active:enabled:bg-${config.color.default.background.active.light} dark:active:enabled:bg-${config.color.default.background.active.dark}`]:
          {},
        //Border
        [`@apply border-${config.color.default.border.light} dark:border-${config.color.default.border.dark}`]:
          {},
      },
      //Color:default-contrast
      '&.webeze-button-default-contrast': {
        //Font
        [`@apply text-${config.color.defaultContrast.font.color.light} dark:text-${config.color.defaultContrast.font.color.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.defaultContrast.background.base.light} dark:bg-${config.color.defaultContrast.background.base.dark}`]:
          {},
        //Hover
        [`@apply hover:enabled:bg-${config.color.defaultContrast.background.hover.light} dark:hover:enabled:bg-${config.color.defaultContrast.background.hover.dark}`]:
          {},
        //Active
        [`@apply active:enabled:bg-${config.color.defaultContrast.background.active.light} dark:active:enabled:bg-${config.color.defaultContrast.background.active.dark}`]:
          {},
        //Border
        [`@apply border-${config.color.defaultContrast.border.light} dark:border-${config.color.defaultContrast.border.dark}`]:
          {},
      },
      //Color:muted
      '&.webeze-button-muted': {
        //Font
        [`@apply text-${config.color.muted.font.color.light} dark:text-${config.color.muted.font.color.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.muted.background.base.light} dark:bg-${config.color.muted.background.base.dark}`]:
          {},
        //Hover
        [`@apply hover:enabled:bg-${config.color.muted.background.hover.light} dark:hover:enabled:bg-${config.color.muted.background.hover.dark}`]:
          {},
        //Active
        [`@apply active:enabled:bg-${config.color.muted.background.active.light} dark:active:enabled:bg-${config.color.muted.background.active.dark}`]:
          {},
        //Border
        [`@apply border-${config.color.muted.border.light} dark:border-${config.color.muted.border.dark}`]:
          {},
      },
      //Color:muted-contrast
      '&.webeze-button-muted-contrast': {
        //Font
        [`@apply text-${config.color.mutedContrast.font.color.light} dark:text-${config.color.mutedContrast.font.color.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.mutedContrast.background.base.light} dark:bg-${config.color.mutedContrast.background.base.dark}`]:
          {},
        //Hover
        [`@apply hover:enabled:bg-${config.color.mutedContrast.background.hover.light} dark:hover:enabled:bg-${config.color.mutedContrast.background.hover.dark}`]:
          {},
        //Active
        [`@apply active:enabled:bg-${config.color.mutedContrast.background.active.light} dark:active:enabled:bg-${config.color.mutedContrast.background.active.dark}`]:
          {},
        //Border
        [`@apply border-${config.color.mutedContrast.border.light} dark:border-${config.color.mutedContrast.border.dark}`]:
          {},
      },
      //Color:light
      '&.webeze-button-light': {
        //Font
        [`@apply text-${config.color.light.font.color.light} dark:text-${config.color.light.font.color.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.light.background.base.light} dark:bg-${config.color.light.background.base.dark}`]:
          {},
        //Hover
        [`@apply hover:enabled:bg-${config.color.light.background.hover.light} dark:hover:enabled:bg-${config.color.light.background.hover.dark}`]:
          {},
        //Active
        [`@apply active:enabled:bg-${config.color.light.background.active.light} dark:active:enabled:bg-${config.color.light.background.active.dark}`]:
          {},
        //Border
        [`@apply border-${config.color.light.border.light} dark:border-${config.color.light.border.dark}`]:
          {},
      },
      //Color:dark
      '&.webeze-button-dark': {
        //Font
        [`@apply text-${config.color.dark.font.color.light} dark:text-${config.color.dark.font.color.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.dark.background.base.light} dark:bg-${config.color.dark.background.base.dark}`]:
          {},
        //Hover
        [`@apply hover:enabled:bg-${config.color.dark.background.hover.light} dark:hover:enabled:bg-${config.color.dark.background.hover.dark}`]:
          {},
        //Active
        [`@apply active:enabled:bg-${config.color.dark.background.active.light} dark:active:enabled:bg-${config.color.dark.background.active.dark}`]:
          {},
        //Border
        [`@apply border-${config.color.dark.border.light} dark:border-${config.color.dark.border.dark}`]:
          {},
      },
      //Color:black
      '&.webeze-button-black': {
        //Font
        [`@apply text-${config.color.black.font.color.light} dark:text-${config.color.black.font.color.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.black.background.base.light} dark:bg-${config.color.black.background.base.dark}`]:
          {},
        //Hover
        [`@apply hover:enabled:bg-${config.color.black.background.hover.light} dark:hover:enabled:bg-${config.color.black.background.hover.dark}`]:
          {},
        //Active
        [`@apply active:enabled:bg-${config.color.black.background.active.light} dark:active:enabled:bg-${config.color.black.background.active.dark}`]:
          {},
        //Border
        [`@apply border-${config.color.black.border.light} dark:border-${config.color.black.border.dark}`]:
          {},
      },
      //Color:primary
      '&.webeze-button-primary': {
        //Font
        [`@apply text-${config.color.primary.font.color.light} dark:text-${config.color.primary.font.color.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.primary.background.base.light} dark:bg-${config.color.primary.background.base.dark}`]:
          {},
        //Hover
        [`@apply hover:enabled:bg-${config.color.primary.background.hover.light} dark:hover:enabled:bg-${config.color.primary.background.hover.dark}`]:
          {},
        //Active
        [`@apply active:enabled:bg-${config.color.primary.background.active.light} dark:active:enabled:bg-${config.color.primary.background.active.dark}`]:
          {},
        //Border
        [`@apply border-${config.color.primary.border.light} dark:border-${config.color.primary.border.dark}`]:
          {},
      },
      //Color:info
      '&.webeze-button-info': {
        //Font
        [`@apply text-${config.color.info.font.color.light} dark:text-${config.color.info.font.color.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.info.background.base.light} dark:bg-${config.color.info.background.base.dark}`]:
          {},
        //Hover
        [`@apply hover:enabled:bg-${config.color.info.background.hover.light} dark:hover:enabled:bg-${config.color.info.background.hover.dark}`]:
          {},
        //Active
        [`@apply active:enabled:bg-${config.color.info.background.active.light} dark:active:enabled:bg-${config.color.info.background.active.dark}`]:
          {},
        //Border
        [`@apply border-${config.color.info.border.light} dark:border-${config.color.info.border.dark}`]:
          {},
      },
      //Color:success
      '&.webeze-button-success': {
        //Font
        [`@apply text-${config.color.success.font.color.light} dark:text-${config.color.success.font.color.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.success.background.base.light} dark:bg-${config.color.success.background.base.dark}`]:
          {},
        //Hover
        [`@apply hover:enabled:bg-${config.color.success.background.hover.light} dark:hover:enabled:bg-${config.color.success.background.hover.dark}`]:
          {},
        //Active
        [`@apply active:enabled:bg-${config.color.success.background.active.light} dark:active:enabled:bg-${config.color.success.background.active.dark}`]:
          {},
        //Border
        [`@apply border-${config.color.success.border.light} dark:border-${config.color.success.border.dark}`]:
          {},
      },
      //Color:warning
      '&.webeze-button-warning': {
        //Font
        [`@apply text-${config.color.warning.font.color.light} dark:text-${config.color.warning.font.color.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.warning.background.base.light} dark:bg-${config.color.warning.background.base.dark}`]:
          {},
        //Hover
        [`@apply hover:enabled:bg-${config.color.warning.background.hover.light} dark:hover:enabled:bg-${config.color.warning.background.hover.dark}`]:
          {},
        //Active
        [`@apply active:enabled:bg-${config.color.warning.background.active.light} dark:active:enabled:bg-${config.color.warning.background.active.dark}`]:
          {},
        //Border
        [`@apply border-${config.color.warning.border.light} dark:border-${config.color.warning.border.dark}`]:
          {},
      },
      //Color:danger
      '&.webeze-button-danger': {
        //Font
        [`@apply text-${config.color.danger.font.color.light} dark:text-${config.color.danger.font.color.dark}`]:
          {},
        //Background
        [`@apply bg-${config.color.danger.background.base.light} dark:bg-${config.color.danger.background.base.dark}`]:
          {},
        //Hover
        [`@apply hover:enabled:bg-${config.color.danger.background.hover.light} dark:hover:enabled:bg-${config.color.danger.background.hover.dark}`]:
          {},
        //Active
        [`@apply active:enabled:bg-${config.color.danger.background.active.light} dark:active:enabled:bg-${config.color.danger.background.active.dark}`]:
          {},
        //Border
        [`@apply border-${config.color.danger.border.light} dark:border-${config.color.danger.border.dark}`]:
          {},
      },
    },
  })
}, config)
