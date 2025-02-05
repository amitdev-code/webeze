import plugin from 'tailwindcss/plugin'
import { type ToastConfig, defaultConfig, key } from './toast.config'

const config = {
  theme: {
    webeze: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`webeze.${key}`) satisfies ToastConfig

  addComponents({
    //Wrapper
    '.webeze-toast': {
      [`@apply relative flex font-${config.font.family} overflow-hidden`]: {},
      //Toast:inner
      '.webeze-toast-inner': {
        '@apply flex items-center grow gap-2 px-4 py-3': {},
      },
      //Toast:title
      '.webeze-toast-title': {
        //Font
        [`@apply webeze-heading webeze-heading-${config.title.font.size} webeze-weight-${config.title.font.weight}`]:
          {},
        //Color
        [`@apply text-${config.title.font.color.light} dark:text-${config.title.font.color.dark}`]:
          {},
      },
      //Toast:subtitle
      '.webeze-toast-subtitle': {
        //Font
        [`@apply webeze-paragraph text-${config.subtitle.font.size}`]: {},
        //color
        [`@apply text-${config.subtitle.font.color.light} dark:text-${config.subtitle.font.color.dark}`]:
          {},
      },
      //Icon:inner
      '.webeze-toast-icon': {
        [`@apply w-${config.icon.inner.size} h-${config.icon.inner.size}`]: {},
      },
      //Icon:outer
      '.webeze-toast-icon-block': {
        [`@apply h-${config.icon.outer.size} w-${config.icon.outer.size} flex items-center justify-center`]:
          {},
      },
      //Toast:close
      '.webeze-button-close': {
        '@apply ms-auto': {},
      },
      //Type:low-contrast
      '&.webeze-toast-low-contrast': {
        //Background
        [`@apply bg-${config.contrast.lowContrast.background.light} dark:bg-${config.contrast.lowContrast.background.dark}`]:
          {},
        //Border
        [`@apply border-2 border-${config.contrast.lowContrast.border.light} dark:border-${config.contrast.lowContrast.border.dark}`]:
          {},
      },
      //Type:high-contrast
      '&.webeze-toast-high-contrast': {
        //Background
        [`@apply bg-${config.contrast.highContrast.background.light} dark:bg-${config.contrast.highContrast.background.dark}`]:
          {},
        //Border
        [`@apply border-2 border-${config.contrast.highContrast.border.light} dark:border-${config.contrast.highContrast.border.dark}`]:
          {},
      },
      //Color:default
      '&.webeze-toast-default': {
        //Icon:inner
        '.webeze-toast-icon': {
          [`@apply text-${config.color.default.icon.inner.color.light} dark:text-${config.color.default.icon.inner.color.dark}`]:
            {},
        },
        //Icon:outer
        '.webeze-toast-icon-block': {
          [`@apply bg-${config.color.default.icon.outer.background.light} dark:bg-${config.color.default.icon.outer.background.dark}`]:
            {},
        },
      },
      //Color:primary
      '&.webeze-toast-primary': {
        //Border
        [`@apply border-2 border-${config.color.primary.border.light} dark:border-${config.color.primary.border.light}`]:
          {},
        //Icon:inner
        '.webeze-toast-icon': {
          [`@apply text-${config.color.primary.icon.inner.color.light} dark:text-${config.color.primary.icon.inner.color.dark}`]:
            {},
        },
        //Icon:outer
        '.webeze-toast-icon-block': {
          [`@apply bg-${config.color.primary.icon.outer.background.light} dark:bg-${config.color.primary.icon.outer.background.dark}`]:
            {},
        },
      },
      //Color:info
      '&.webeze-toast-info': {
        //Border
        [`@apply border-2 border-${config.color.info.border.light} dark:border-${config.color.info.border.light}`]:
          {},
        //Icon:inner
        '.webeze-toast-icon': {
          [`@apply text-${config.color.info.icon.inner.color.light} dark:text-${config.color.info.icon.inner.color.dark}`]:
            {},
        },
        //Icon:outer
        '.webeze-toast-icon-block': {
          [`@apply bg-${config.color.info.icon.outer.background.light} dark:bg-${config.color.info.icon.outer.background.dark}`]:
            {},
        },
      },
      //Color:success
      '&.webeze-toast-success': {
        //Border
        [`@apply border-2 border-${config.color.success.border.light} dark:border-${config.color.success.border.light}`]:
          {},
        //Icon:inner
        '.webeze-toast-icon': {
          [`@apply text-${config.color.success.icon.inner.color.light} dark:text-${config.color.success.icon.inner.color.dark}`]:
            {},
        },
        //Icon:outer
        '.webeze-toast-icon-block': {
          [`@apply bg-${config.color.success.icon.outer.background.light} dark:bg-${config.color.success.icon.outer.background.dark}`]:
            {},
        },
      },
      //Color:warning
      '&.webeze-toast-warning': {
        //Border
        [`@apply border-2 border-${config.color.warning.border.light} dark:border-${config.color.warning.border.light}`]:
          {},
        //Icon:inner
        '.webeze-toast-icon': {
          [`@apply text-${config.color.warning.icon.inner.color.light} dark:text-${config.color.warning.icon.inner.color.dark}`]:
            {},
        },
        //Icon:outer
        '.webeze-toast-icon-block': {
          [`@apply bg-${config.color.warning.icon.outer.background.light} dark:bg-${config.color.warning.icon.outer.background.dark}`]:
            {},
        },
      },
      //Color:danger
      '&.webeze-toast-danger': {
        //Border
        [`@apply border-2 border-${config.color.danger.border.light} dark:border-${config.color.danger.border.light}`]:
          {},
        //Icon:inner
        '.webeze-toast-icon': {
          [`@apply text-${config.color.danger.icon.inner.color.light} dark:text-${config.color.danger.icon.inner.color.dark}`]:
            {},
        },
        //Icon:outer
        '.webeze-toast-icon-block': {
          [`@apply bg-${config.color.danger.icon.outer.background.light} dark:bg-${config.color.danger.icon.outer.background.dark}`]:
            {},
        },
      },
      //Color:dark
      '&.webeze-toast-dark': {
        //Border
        [`@apply border-2 border-${config.color.dark.border.light} dark:border-${config.color.dark.border.dark}`]:
          {},
        //Icon:inner
        '.webeze-toast-icon': {
          [`@apply text-${config.color.dark.icon.inner.color.light} dark:text-${config.color.dark.icon.inner.color.dark}`]:
            {},
        },
        //Icon:outer
        '.webeze-toast-icon-block': {
          [`@apply bg-${config.color.dark.icon.outer.background.light} dark:bg-${config.color.dark.icon.outer.background.dark}`]:
            {},
        },
      },
      //Color:black
      '&.webeze-toast-black': {
        //Border
        [`@apply border-2 border-${config.color.black.border.light} dark:border-${config.color.black.border.dark}`]:
          {},
        //Icon:inner
        '.webeze-toast-icon': {
          [`@apply text-${config.color.black.icon.inner.color.light} dark:text-${config.color.black.icon.inner.color.dark}`]:
            {},
        },
        //Icon:outer
        '.webeze-toast-icon-block': {
          [`@apply bg-${config.color.black.icon.outer.background.light} dark:bg-${config.color.black.icon.outer.background.dark}`]:
            {},
        },
      },
      //Rounded:sm
      '&.webeze-toast-rounded-sm': {
        [`@apply rounded-${config.rounded.sm}`]: {},
      },
      //Rounded:md
      '&.webeze-toast-rounded-md': {
        [`@apply rounded-${config.rounded.md}`]: {},
      },
      //Rounded:lg
      '&.webeze-toast-rounded-lg': {
        [`@apply rounded-${config.rounded.lg}`]: {},
      },
      //Shadow:borderless
      '&.webeze-toast-borderless': {
        [`@apply !border-0 shadow-${config.shadow.light} dark:shadow-${config.shadow.dark} shadow-${config.shadow.size}`]:
          {},
      },
    },
  })
}, config)
