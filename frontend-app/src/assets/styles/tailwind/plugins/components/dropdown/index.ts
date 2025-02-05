import plugin from 'tailwindcss/plugin'
import { type DropdownConfig, defaultConfig, key } from './dropdown.config'

const config = {
  theme: {
    webeze: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`webeze.${key}`) satisfies DropdownConfig

  addComponents({
    //Wrapper
    '.webeze-dropdown': {
      [`@apply text-${config.align}`]: {},
      //Menu
      '.webeze-menu': {
        '@apply relative inline-block': {},
      },
      //Menu Content
      '.webeze-menu-content': {
        '@apply p-2': {},
      },
      //Button:context
      '.webeze-context-button': {
        //Base
        [`@apply inline-flex items-center justify-center rounded-${config.button.context.rounded}`]:
          {},
        //Size
        [`@apply h-${config.button.context.size} w-${config.button.context.size}`]:
          {},
        //Ring
        [`@apply ring-1 ring-transparent ring-offset-${config.button.context.ring.offset.color.light} dark:ring-offset-${config.button.context.ring.offset.color.dark}`]:
          {},
        //Transition
        [`@apply transition-${config.button.context.transition.property} duration-${config.button.context.transition.duration}`]:
          {},
        //Context:inner
        '.webeze-context-button-inner': {
          //Base
          [`@apply flex items-center justify-center rounded-${config.button.context.inner.rounded}`]:
            {},
          //Size
          [`@apply h-${config.button.context.inner.size} w-${config.button.context.inner.size}`]:
            {},
          //Background
          [`@apply bg-${config.button.context.inner.background.light} dark:bg-${config.button.context.inner.background.dark}`]:
            {},
          //Border
          [`@apply border border-${config.button.context.inner.border.light} dark:border-${config.button.context.inner.border.dark}`]:
            {},
        },
        //Context:icon
        '.webeze-context-icon': {
          //Size
          [`@apply h-${config.button.context.icon.size} w-${config.button.context.icon.size}`]:
            {},
          //Color
          [`@apply text-${config.button.context.icon.font.color.light} dark:text-${config.button.context.icon.font.color.dark}`]:
            {},
          //Transition
          [`@apply transition-${config.button.context.transition.property} duration-${config.button.context.transition.duration}`]:
            {},
        },
      },
      //Button:text
      '.webeze-text-button': {
        //Base
        '@apply flex items-center space-x-1': {},
      },
      //Button:chevron
      '.webeze-chevron': {
        [`@apply h-${config.button.chevron.size} w-${config.button.chevron.size}`]:
          {},
        //Transition
        [`@apply transition-${config.button.chevron.transition.property} duration-${config.button.chevron.transition.duration}`]:
          {},
      },
      //Orientation:start
      '&.webeze-dropdown-start': {
        '.webeze-dropdown-menu': {
          '@apply start-0 origin-top-left': {},
        },
      },
      //Orientation:end
      '&.webeze-dropdown-end': {
        '.webeze-dropdown-menu': {
          '@apply end-0 origin-top-right': {},
        },
      },
      //Context:hover
      '&:hover': {
        '.webeze-context-button': {
          [`@apply ring-offset-${config.button.context.ring.offset.size} ring-${config.button.context.ring.color.hover.light} dark:ring-${config.button.context.ring.color.hover.dark}`]:
            {},
        },
      },
    },
    //Dropdown:menu
    '.webeze-dropdown-menu': {
      //Base
      '@apply absolute z-50 mt-2 focus:outline-none': {},
      //Shadow
      [`@apply shadow-${config.menu.shadow.size} shadow-${config.menu.shadow.light} dark:shadow-${config.menu.shadow.dark}`]:
        {},
      //Menu:header
      '.webeze-menu-header': {
        '@apply px-4 pt-5': {},
      },
      //Header:inner
      '.webeze-menu-header-inner': {
        '@apply relative flex items-center justify-between': {},
      },
      //Header:title
      '.webeze-menu-header-title': {
        //Base
        [`@apply font-${config.menu.header.title.font.family} font-${config.menu.header.title.font.weight} text-${config.menu.header.title.font.size} uppercase`]:
          {},
        //Color
        [`@apply text-${config.menu.header.title.font.color.light} dark:text-${config.menu.header.title.font.color.dark}`]:
          {},
      },
      //Menu:content
      '.webeze-menu-content': {
        '@apply p-2 space-y-1': {},
      },
      //Size:md
      '&.webeze-menu-md': {
        '@apply w-56': {},
      },
      //Size:lg
      '&.webeze-menu-lg': {
        '@apply w-72': {},
      },
      //Rounded:sm
      '&.webeze-menu-rounded-sm': {
        [`@apply ${config.menu.rounded.sm}`]: {},
      },
      //Rounded:md
      '&.webeze-menu-rounded-md': {
        [`@apply ${config.menu.rounded.md}`]: {},
      },
      //Rounded:lg
      '&.webeze-menu-rounded-lg': {
        [`@apply ${config.menu.rounded.lg}`]: {},
      },
      //Color:default
      '&.webeze-menu-default': {
        //Border
        [`@apply border border-${config.menu.color.default.border.light} dark:border-${config.menu.color.default.border.dark}`]:
          {},
        //Background
        [`@apply bg-${config.menu.color.default.background.light} dark:bg-${config.menu.color.default.background.dark}`]:
          {},
      },
      //Color:default-contrast
      '&.webeze-menu-default-contrast': {
        //Border
        [`@apply border border-${config.menu.color.defaultContrast.border.light} dark:border-${config.menu.color.defaultContrast.border.dark}`]:
          {},
        //Background
        [`@apply bg-${config.menu.color.defaultContrast.background.light} dark:bg-${config.menu.color.defaultContrast.background.dark}`]:
          {},
      },
      //Color:muted
      '&.webeze-menu-muted': {
        //Border
        [`@apply border border-${config.menu.color.muted.border.light} dark:border-${config.menu.color.muted.border.dark}`]:
          {},
        //Background
        [`@apply bg-${config.menu.color.muted.background.light} dark:bg-${config.menu.color.muted.background.dark}`]:
          {},
      },
      //Color:muted-contrast
      '&.webeze-menu-muted-contrast': {
        //Border
        [`@apply border border-${config.menu.color.mutedContrast.border.light} dark:border-${config.menu.color.mutedContrast.border.dark}`]:
          {},
        //Background
        [`@apply bg-${config.menu.color.mutedContrast.background.light} dark:bg-${config.menu.color.mutedContrast.background.dark}`]:
          {},
      },
    },
  })
}, config)
