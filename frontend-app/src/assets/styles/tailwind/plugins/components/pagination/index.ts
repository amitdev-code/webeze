import plugin from 'tailwindcss/plugin'
import { type PaginationConfig, defaultConfig, key } from './pagination.config'

const config = {
  theme: {
    webeze: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`webeze.${key}`) satisfies PaginationConfig

  addComponents({
    //Wrapper
    '.webeze-pagination': {
      [`@apply inline-flex w-${config.width} flex-col md:flex-row md:justify-between`]:
        {},
      //Pagination:list
      '.webeze-pagination-list': {
        //Base
        [`@apply inline-flex flex-wrap gap-2 md:gap-1 p-${config.padding} mb-4 md:mb-0`]:
          {},
        //Background
        [`@apply bg-${config.list.background.light} dark:bg-${config.list.background.dark}`]:
          {},
        //Border
        [`@apply border border-${config.list.border.light} dark:border-${config.list.border.dark}`]:
          {},
      },
      //Pagination:buttons
      '.webeze-pagination-buttons': {
        //Base
        [`@apply flex items-center justify-end gap-1 border p-${config.buttons.padding}`]:
          {},
        //Background
        [`@apply bg-${config.buttons.background.light} dark:bg-${config.buttons.background.dark}`]:
          {},
        //Border
        [`@apply border-${config.buttons.border.light} dark:border-${config.buttons.border.dark}`]:
          {},
        //Buttons:button
        '.webeze-pagination-button': {
          //Base
          '@apply webeze-focus flex h-10 w-full items-center justify-center md:w-10':
            {},
          //Font
          [`@apply font-${config.buttons.button.font.family} text-${config.buttons.button.font.size}`]:
            {},
          //Color
          [`@apply text-${config.buttons.button.font.color.base.light} dark:text-${config.buttons.button.font.color.base.dark}`]:
            {},
          //Color:hover
          [`@apply hover:text-${config.buttons.button.font.color.hover.light} dark:hover:text-${config.buttons.button.font.color.hover.dark}`]:
            {},
          //Background
          [`@apply bg-${config.buttons.button.background.base.light} dark:bg-${config.buttons.button.background.base.dark}`]:
            {},
          //Background:hover
          [`@apply hover:bg-${config.buttons.button.background.hover.light} dark:hover:bg-${config.buttons.button.background.hover.dark}`]:
            {},
          //Border
          [`@apply border-${config.buttons.button.border.light} dark:border-${config.buttons.button.border.dark}`]:
            {},
          //Transition
          [`@apply transition-${config.buttons.button.transition.property} duration-${config.buttons.button.transition.duration}`]:
            {},
          //Button:icon
          '.webeze-pagination-button-icon': {
            [`@apply block h-${config.buttons.button.icon.size} w-${config.buttons.button.icon.size}`]:
              {},
          },
        },
      },
      //Pagination:link
      '.webeze-pagination-link': {
        //Base
        '@apply webeze-focus flex items-center justify-center mb-0 inline-flex flex-wrap gap-2 md:gap-1':
          {},
        //Size
        [`@apply h-${config.link.size} px-${config.link.padding}`]: {},
        //Font
        [`@apply font-${config.link.font.family} text-${config.link.font.size}`]:
          {},
        //Background
        [`@apply bg-${config.link.background.base.light} dark:bg-${config.link.background.base.dark}`]:
          {},
        //Border
        [`@apply border border-${config.link.border.base.light} dark:border-${config.link.border.base.dark}`]:
          {},
        //Link:not-active
        '&:not(.webeze-active)': {
          //Color:inactive:base
          [`@apply text-${config.link.font.color.inactive.base.light} dark:text-${config.link.font.color.inactive.base.dark}`]:
            {},
          //Color:inactive:hover
          [`@apply hover:text-${config.link.font.color.inactive.hover.light} dark:hover:text-${config.link.font.color.inactive.hover.dark}`]:
            {},
          //Background:inactive:base
          [`@apply bg-${config.link.background.inactive.base.light} dark:bg-${config.link.background.inactive.base.dark}`]:
            {},
          //Background:inactive:hover
          [`@apply hover:bg-${config.link.background.inactive.hover.light} dark:hover:bg-${config.link.background.inactive.hover.dark}`]:
            {},
          //Border:inactive
          [`@apply border-${config.link.border.inactive.light} dark:border-${config.link.border.inactive.dark}`]:
            {},
        },
      },
      '&.webeze-pagination-primary': {
        //Link:primary
        '.webeze-pagination-link.webeze-active': {
          //Color
          [`@apply text-${config.link.font.color.active.primary.light} dark:text-${config.link.font.color.active.primary.dark}`]:
            {},
          //Background
          [`@apply bg-${config.link.background.active.primary.light} dark:bg-${config.link.background.active.primary.dark}`]:
            {},
          //Border:active
          [`@apply border-${config.link.border.active.primary.light} dark:border-${config.link.border.active.primary.dark}`]:
            {},
          //Shadow:active
          [`@apply shadow-${config.link.shadow.active.size} shadow-${config.link.shadow.active.color.primary.light} dark:shadow-${config.link.shadow.active.color.primary.dark}`]:
            {},
        },
      },
      '&.webeze-pagination-dark': {
        //Link:dark
        '.webeze-pagination-link.webeze-active': {
          //Color
          [`@apply text-${config.link.font.color.active.dark.light} dark:text-${config.link.font.color.active.dark.dark}`]:
            {},
          //Background
          [`@apply bg-${config.link.background.active.dark.light} dark:bg-${config.link.background.active.dark.dark}`]:
            {},
          //Border:active
          [`@apply border-${config.link.border.active.dark.light} dark:border-${config.link.border.active.dark.dark}`]:
            {},
          //Shadow:active
          [`@apply shadow-${config.link.shadow.active.size} shadow-${config.link.shadow.active.color.dark.light} dark:shadow-${config.link.shadow.active.color.dark.dark}`]:
            {},
        },
      },
      '&.webeze-pagination-black': {
        //Link:black
        '.webeze-pagination-link.webeze-active': {
          //Color
          [`@apply text-${config.link.font.color.active.black.light} dark:text-${config.link.font.color.active.black.dark}`]:
            {},
          //Background
          [`@apply bg-${config.link.background.active.black.light} dark:bg-${config.link.background.active.black.dark}`]:
            {},
          //Border:active
          [`@apply border-${config.link.border.active.black.light} dark:border-${config.link.border.active.black.dark}`]:
            {},
          //Shadow:active
          [`@apply shadow-${config.link.shadow.active.size} shadow-${config.link.shadow.active.color.black.light} dark:shadow-${config.link.shadow.active.color.black.dark}`]:
            {},
        },
      },
      //Pagination:ellipsis
      '.webeze-pagination-ellipsis': {
        //Base
        [`@apply select-none flex h-${config.ellipsis.size} w-${config.ellipsis.size} items-center justify-center`]:
          {},
        //Font
        [`@apply font-${config.ellipsis.font.family} text-${config.ellipsis.font.size}`]:
          {},
        //Color
        [`@apply text-${config.ellipsis.font.color.light} dark:text-${config.ellipsis.font.color.dark}`]:
          {},
        //Background
        [`@apply bg-${config.ellipsis.background.light} dark:bg-${config.ellipsis.background.dark}`]:
          {},
        //Border
        [`@apply border-${config.ellipsis.border.light} dark:border-${config.ellipsis.border.dark}`]:
          {},
      },
      //Rounded:sm
      '&.webeze-pagination-rounded-sm .webeze-pagination-list, &.webeze-pagination-rounded-sm .webeze-pagination-buttons, &.webeze-pagination-rounded-sm .webeze-pagination-buttons .webeze-pagination-button,  &.webeze-pagination-rounded-sm .webeze-pagination-link, &.webeze-pagination-rounded-sm .webeze-pagination-ellipsis':
        {
          [`@apply ${config.rounded.sm}`]: {},
        },
      //Rounded:md
      '&.webeze-pagination-rounded-md .webeze-pagination-list, &.webeze-pagination-rounded-md .webeze-pagination-buttons, &.webeze-pagination-rounded-md .webeze-pagination-buttons .webeze-pagination-button,  &.webeze-pagination-rounded-md .webeze-pagination-link, &.webeze-pagination-rounded-md .webeze-pagination-ellipsis':
        {
          [`@apply ${config.rounded.md}`]: {},
        },
      //Rounded:lg
      '&.webeze-pagination-rounded-lg .webeze-pagination-list, &.webeze-pagination-rounded-lg .webeze-pagination-buttons, &.webeze-pagination-rounded-lg .webeze-pagination-buttons .webeze-pagination-button,  &.webeze-pagination-rounded-lg .webeze-pagination-link, &.webeze-pagination-rounded-lg .webeze-pagination-ellipsis':
        {
          [`@apply ${config.rounded.lg}`]: {},
        },
      //Rounded:full
      '&.webeze-pagination-rounded-full .webeze-pagination-list, &.webeze-pagination-rounded-full .webeze-pagination-buttons, &.webeze-pagination-rounded-full .webeze-pagination-buttons .webeze-pagination-button,  &.webeze-pagination-rounded-full .webeze-pagination-link, &.webeze-pagination-rounded-full .webeze-pagination-ellipsis':
        {
          [`@apply ${config.rounded.full}`]: {},
        },
    },
  })
}, config)
