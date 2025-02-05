import plugin from 'tailwindcss/plugin'
import {
  type InputFileRegularConfig,
  defaultConfig,
  key,
} from './input-file-regular.config'

const config = {
  theme: {
    webeze: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`webeze.${key}`) satisfies InputFileRegularConfig

  addComponents({
    //Wrapper
    '.webeze-input-file-regular': {
      '@apply relative w-full': {},
      //Input:label
      '.webeze-input-file-label': {
        '@apply webeze-label w-full': {},
      },
      //Input:outer
      '.webeze-input-file-outer': {
        '@apply relative': {},
      },
      //Input:inner
      '.webeze-input-file-inner': {
        [`@apply relative webeze-focus w-${config.inner.width} flex cursor-pointer items-center overflow-hidden disabled:cursor-not-allowed disabled:opacity-75`]:
          {},
        //Font
        [`@apply font-${config.inner.font.family}`]: {},
        //Transition
        [`@apply transition-${config.inner.transition.property} duration-${config.inner.transition.duration}`]:
          {},
      },
      //Input:addon
      '.webeze-input-file-addon': {
        '@apply pointer-events-none flex shrink-0 items-center justify-center gap-1 transition-colors duration-100':
          {},
      },
      //Input:placeholder
      '.webeze-input-file-placeholder': {
        //Base
        [`@apply font-${config.placeholder.font.family} text-${config.placeholder.font.size}`]:
          {},
        //Color
        [`@apply text-${config.placeholder.font.color.light} dark:text-${config.placeholder.font.color.dark}`]:
          {},
      },
      //Input:text
      '.webeze-input-file-text': {
        [`@apply ms-2 inline-flex truncate text-${config.font.color.light} dark:text-${config.font.color.dark}`]:
          {},
      },
      //Input:placeload
      '.webeze-input-file-placeload': {
        '@apply absolute -end-8 flex w-[70%] items-center': {},

        '.webeze-placeload': {
          '@apply h-3 w-full max-w-[75%] rounded': {},
        },
      },
      //Color:default
      '&.webeze-input-default': {
        //Input:inner
        '.webeze-input-file-inner': {
          //Base
          [`@apply text-${config.color.default.inner.font.color.light} dark:text-${config.color.default.inner.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.color.default.inner.background.light} dark:bg-${config.color.default.inner.background.dark}`]:
            {},
          //Border
          [`@apply border border-${config.color.default.inner.border.light} dark:border-${config.color.default.inner.border.dark}`]:
            {},
          //Placeholder
          [`@apply placeholder:text-${config.color.default.inner.placeholder.light} dark:placeholder:text-${config.color.default.inner.placeholder.dark}`]:
            {},
        },
        //Input:addon
        '.webeze-input-file-addon': {
          //Background
          [`@apply bg-${config.color.default.addon.background.light} dark:bg-${config.color.default.addon.background.dark}`]:
            {},
          //Color
          [`@apply text-${config.color.default.addon.font.color.light} dark:text-${config.color.default.addon.font.color.dark}`]:
            {},
          //Border
          [`@apply border-e border-${config.color.default.addon.border.light} dark:border-${config.color.default.addon.border.dark}`]:
            {},
        },
      },
      '&.webeze-input-default-contrast': {
        //Input:inner
        '.webeze-input-file-inner': {
          //Base
          [`@apply text-${config.color.defaultContrast.inner.font.color.light} dark:text-${config.color.defaultContrast.inner.font.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.color.defaultContrast.inner.background.light} dark:bg-${config.color.defaultContrast.inner.background.dark}`]:
            {},
          //Border
          [`@apply border border-${config.color.defaultContrast.inner.border.light} dark:border-${config.color.defaultContrast.inner.border.dark}`]:
            {},
          //Placeholder
          [`@apply placeholder:text-${config.color.defaultContrast.inner.placeholder.light} dark:placeholder:text-${config.color.defaultContrast.inner.placeholder.dark}`]:
            {},
        },
        //Input:addon
        '.webeze-input-file-addon': {
          //Background
          [`@apply bg-${config.color.defaultContrast.addon.background.light} dark:bg-${config.color.defaultContrast.addon.background.dark}`]:
            {},
          //Color
          [`@apply text-${config.color.defaultContrast.addon.font.color.light} dark:text-${config.color.defaultContrast.addon.font.color.dark}`]:
            {},
          //Border
          [`@apply border-e border border-${config.color.defaultContrast.addon.border.light} dark:border-${config.color.defaultContrast.addon.border.dark}`]:
            {},
        },
      },
      //Input:focus
      '&.webeze-input-file-color-focus': {
        '.webeze-input-file-inner:focus': {
          [`@apply !border-${config.focus.border.light} dark:!border-${config.focus.border.dark}`]:
            {},
        },
      },
      //Input:loading
      '&.webeze-input-file-loading': {
        '.webeze-input-file-inner': {
          '@apply text-transparent placeholder:text-transparent': {},
        },
      },
      //Error:input
      '&.webeze-input-file-error': {
        '.webeze-input-file-inner': {
          [`@apply border-${config.error.border.light} dark:border-${config.error.border.dark}`]:
            {},
        },
      },
      //Rounded:sm
      '&.webeze-input-rounded-sm': {
        '.webeze-input-file-inner': {
          [`@apply ${config.rounded.sm}`]: {},
        },
      },
      //Rounded:md
      '&.webeze-input-rounded-md': {
        '.webeze-input-file-inner': {
          [`@apply ${config.rounded.md}`]: {},
        },
      },
      //Rounded:lg
      '&.webeze-input-rounded-lg': {
        '.webeze-input-file-inner': {
          [`@apply ${config.rounded.lg}`]: {},
        },
      },
      //Rounded:full
      '&.webeze-input-rounded-full': {
        '.webeze-input-file-inner': {
          [`@apply ${config.rounded.full}`]: {},
        },
      },
      //Without icon && Size:sm
      '&.webeze-input-sm:not(.webeze-has-icon)': {
        [`@apply text-${config.icon.disabled.sm.font.size} leading-4`]: {},
        '.webeze-input-file-inner': {
          '@apply h-8 py-2 gap-1': {},
        },
        '.webeze-input-file-addon': {
          '@apply h-8 px-2': {},
        },
        '.webeze-input-file-placeload': {
          '@apply top-2.5': {},
        },
      },
      //With icon && Size:sm
      '&.webeze-input-sm.webeze-has-icon': {
        [`@apply text-${config.icon.enabled.sm.font.size} leading-4`]: {},
        '.webeze-input-file-inner': {
          '@apply h-8 py-2 pe-3': {},
        },
        '.webeze-input-file-addon': {
          '@apply h-8 px-2': {},
        },
        '.webeze-input-file-icon': {
          [`@apply w-${config.icon.enabled.sm.icon.size} h-${config.icon.enabled.sm.icon.size}`]:
            {},
        },
        '.webeze-input-file-placeload': {
          '@apply top-2.5': {},
        },
      },
      //Without icon && Size:md
      '&.webeze-input-md:not(.webeze-has-icon)': {
        [`@apply text-${config.icon.disabled.md.font.size} leading-5`]: {},
        '.webeze-input-file-inner': {
          '@apply h-10 gap-2': {},
        },
        '.webeze-input-file-addon': {
          '@apply h-10 px-3': {},
        },
        '.webeze-input-file-placeload': {
          '@apply top-3.5': {},
        },
      },
      //With icon && Size:md
      '&.webeze-input-md.webeze-has-icon': {
        [`@apply text-${config.icon.enabled.md.font.size} leading-5`]: {},
        '.webeze-input-file-inner': {
          '@apply h-10 pe-4': {},
        },
        '.webeze-input-file-addon': {
          '@apply h-10 px-3': {},
        },
        '.webeze-input-file-icon': {
          [`@apply w-${config.icon.enabled.md.icon.size} h-${config.icon.enabled.md.icon.size}`]:
            {},
        },
        '.webeze-input-file-placeload': {
          '@apply top-3.5': {},
        },
      },
      //Without icon && Size:lg
      '&.webeze-input-lg:not(.webeze-has-icon)': {
        [`@apply text-${config.icon.disabled.lg.font.size} leading-5`]: {},
        '.webeze-input-file-inner': {
          '@apply h-12 gap-2': {},
        },
        '.webeze-input-file-addon': {
          '@apply h-12 px-4': {},
        },
        '.webeze-input-file-placeload': {
          '@apply top-[1.2rem]': {},
        },
      },
      //With icon && Size:lg
      '&.webeze-input-lg.webeze-has-icon': {
        [`@apply text-${config.icon.enabled.lg.font.size} leading-5`]: {},
        '.webeze-input-file-inner': {
          '@apply h-12 pe-4': {},
        },
        '.webeze-input-file-addon': {
          '@apply h-12 px-4': {},
        },
        '.webeze-input-file-icon': {
          [`@apply w-${config.icon.enabled.lg.icon.size} h-${config.icon.enabled.lg.icon.size}`]:
            {},
        },
        '.webeze-input-file-placeload': {
          '@apply top-[1.2rem]': {},
        },
      },
      //Without icon && Size:xl
      '&.webeze-input-xl:not(.webeze-has-icon)': {
        [`@apply text-${config.icon.disabled.xl.font.size} leading-5`]: {},
        '.webeze-input-file-inner': {
          '@apply h-14 gap-2': {},
        },
        '.webeze-input-file-addon': {
          '@apply h-14 px-5': {},
        },
        '.webeze-input-file-placeload': {
          '@apply top-[1.4rem]': {},
        },
      },
      //With icon && Size:xl
      '&.webeze-input-xl.webeze-has-icon': {
        [`@apply text-${config.icon.enabled.xl.font.size} leading-5`]: {},
        '.webeze-input-file-inner': {
          '@apply h-14 pe-4': {},
        },
        '.webeze-input-file-addon': {
          '@apply h-14 px-5': {},
        },
        '.webeze-input-file-icon': {
          [`@apply w-${config.icon.enabled.xl.icon.size} h-${config.icon.enabled.xl.icon.size}`]:
            {},
        },
        '.webeze-input-file-placeload': {
          '@apply top-[1.4rem]': {},
        },
      },
      //Input:hover
      '&:hover': {
        '.webeze-input-file-addon': {
          [`@apply text-${config.hover.font.color.light} dark:text-${config.hover.font.color.dark}`]:
            {},
        },
      },
      //Input:disabled
      '&:disabled': {
        '.webeze-input-file-addon': {
          '@apply cursor-not-allowed opacity-75': {},
        },
      },
      //Input:focus
      '&:focus-within': {
        '.webeze-input-file-addon': {
          [`@apply text-${config.focus.font.color.light} dark:text-${config.focus.font.color.dark}`]:
            {},
        },
      },
    },
  })
}, config)
