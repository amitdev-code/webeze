import plugin from 'tailwindcss/plugin'
import {
  type DropdownItemConfig,
  defaultConfig,
  key,
} from './dropdown-item.config'

const config = {
  theme: {
    webeze: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`webeze.${key}`) satisfies DropdownItemConfig

  addComponents({
    //Wrapper
    '.webeze-dropdown-item': {
      '@apply webeze-focus flex w-full items-center justify-start gap-2 px-3 py-2 cursor-pointer':
        {},
      //Font
      [`@apply text-${config.align} font-${config.font.family} text-${config.font.size}`]:
        {},
      //Transition
      [`@apply transition-${config.transition.property} duration-${config.transition.duration}`]:
        {},
      //Item:content
      '.webeze-item-content': {
        '@apply grow': {},
      },
      //Item:text
      '&:not(.webeze-active)': {
        [`@apply text-${config.font.color.inactive.light} dark:text-${config.font.color.inactive.dark}`]:
          {},
      },
      //Item:disabled
      '&.webeze-item-disabled': {
        [`@apply opacity-50 pointer-events-none`]: {},
      },
      //Contrast:default
      '&.webeze-item-default': {
        //Background:hover
        [`@apply hover:bg-${config.contrast.default.background.light} dark:hover:bg-${config.contrast.default.background.dark}`]:
          {},
        '&.webeze-active': {
          //Background:hover
          [`@apply bg-${config.contrast.default.background.light} dark:bg-${config.contrast.default.background.dark}`]:
            {},
        },
      },
      //Contrast:contrast
      '&.webeze-item-contrast': {
        //Background:hover
        [`@apply hover:bg-${config.contrast.contrast.background.light} dark:hover:bg-${config.contrast.contrast.background.dark}`]:
          {},
        '&.webeze-active': {
          //Background:hover
          [`@apply bg-${config.contrast.contrast.background.light} dark:bg-${config.contrast.contrast.background.dark}`]:
            {},
        },
      },
      //Color:primary
      '&.webeze-item-primary': {
        //Font:hover
        [`@apply hover:text-${config.color.primary.font.color.light} dark:hover:text-${config.color.primary.font.color.dark}`]:
          {},
      },
      //Color:info
      '&.webeze-item-info': {
        //Font:hover
        [`@apply hover:text-${config.color.info.font.color.light} dark:hover:text-${config.color.info.font.color.dark}`]:
          {},
      },
      //Color:success
      '&.webeze-item-success': {
        //Font:hover
        [`@apply hover:text-${config.color.success.font.color.light} dark:hover:text-${config.color.success.font.color.dark}`]:
          {},
      },
      //Color:warning
      '&.webeze-item-warning': {
        //Font:hover
        [`@apply hover:text-${config.color.warning.font.color.light} dark:hover:text-${config.color.warning.font.color.dark}`]:
          {},
      },
      //Color:danger
      '&.webeze-item-danger': {
        //Font:hover
        [`@apply hover:text-${config.color.danger.font.color.light} dark:hover:text-${config.color.danger.font.color.dark}`]:
          {},
      },
      //Color:dark
      '&.webeze-item-dark': {
        //Font:hover
        [`@apply hover:text-${config.color.dark.font.color.light} dark:hover:text-${config.color.dark.font.color.dark}`]:
          {},
      },
      //Color:black
      '&.webeze-item-black': {
        //Font:hover
        [`@apply hover:text-${config.color.black.font.color.light} dark:hover:text-${config.color.black.font.color.dark}`]:
          {},
      },
      //Rounded:sm
      '&.webeze-item-rounded-sm': {
        [`@apply rounded-${config.rounded.sm}`]: {},
      },
      //Rounded:md
      '&.webeze-item-rounded-md': {
        [`@apply rounded-${config.rounded.md}`]: {},
      },
      //Rounded:lg
      '&.webeze-item-rounded-lg': {
        [`@apply rounded-${config.rounded.lg}`]: {},
      },
    },
  })
}, config)
