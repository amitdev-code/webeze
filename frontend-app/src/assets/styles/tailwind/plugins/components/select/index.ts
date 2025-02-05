import plugin from 'tailwindcss/plugin'
import { type SelectConfig, defaultConfig, key } from './select.config'

const config = {
  theme: {
    webeze: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`webeze.${key}`) satisfies SelectConfig

  addComponents({
    //Wrapper
    '.webeze-select-wrapper': {
      '@apply relative': {},
      //Select:label
      '.webeze-select-label, .webeze-label-float': {
        '@apply webeze-label': {},
      },
      //Label:float
      '.webeze-label-float': {
        [`@apply h-${config.label.float.height} absolute inline-flex items-center select-none pointer-events-none`]:
          {},
        //Font
        [`@apply font-${config.label.float.font.family} text-${config.label.float.font.color} leading-${config.label.float.font.lead}`]:
          {},
        //Transition
        [`@apply transition-${config.label.float.transition.property} duration-${config.label.float.transition.duration}`]:
          {},
      },
      //Select:outer
      '.webeze-select-outer': {
        '@apply relative': {},
      },
      //Select:icon
      '.webeze-select-icon': {
        '@apply absolute start-0 top-0 z-10 flex items-center justify-center':
          {},
        //Color
        [`@apply text-${config.select.icon.color.base.light} dark:text-${config.select.icon.color.base.dark}`]:
          {},
        //Transition
        [`@apply transition-${config.select.icon.transition.property} duration-${config.select.icon.transition.duration}`]:
          {},
      },
      //Select
      '.webeze-select': {
        //Base
        [`@apply webeze-focus appearance-none w-${config.select.width} font-${config.select.font.family} disabled:cursor-not-allowed disabled:opacity-75`]:
          {},
        //Transition
        [`@apply transition-${config.select.transition.property} duration-${config.select.transition.duration}`]:
          {},
        //Focus:label:float
        '&:focus-visible ~ .webeze-label-float': {
          [`@apply !text-${config.select.focus.label.float.font.color.light} dark:!text-${config.select.focus.label.float.font.color.dark}`]:
            {},
        },
        //Focus:icon
        '&:focus-visible ~ .webeze-select-icon': {
          [`@apply !text-${config.select.icon.color.focus.light} dark:!text-${config.select.icon.color.focus.dark}`]:
            {},
        },
        //Focus:chevron
        '&:focus-visible ~ .webeze-select-chevron': {
          '@apply rotate-180': {},
        },
        //Disabled:icon
        '&:disabled ~ .webeze-select-icon': {
          '@apply cursor-not-allowed opacity-75': {},
        },
      },
      //Select:placeload
      '.webeze-select-placeload': {
        '@apply absolute start-0 top-0 flex w-full items-center px-4': {},

        '.webeze-placeload': {
          '@apply h-3 w-full max-w-[75%] rounded': {},
        },
      },
      //Select:chevron
      '.webeze-select-chevron.webeze-chevron': {
        '@apply pointer-events-none': {},
        '@apply absolute end-0 top-0 z-10 flex items-center justify-center': {},
        //Color
        [`@apply text-${config.select.chevron.color.light} dark:text-${config.select.chevron.color.dark}`]:
          {},
        //Transition
        [`@apply transition-${config.select.chevron.transition.property} duration-${config.select.chevron.transition.duration}`]:
          {},
      },
      //Select:multiple
      '&.webeze-select-multiple': {
        '.webeze-select': {
          [`@apply p-${config.select.multiple.padding} h-${config.select.multiple.size}`]:
            {},
        },
      },
      //Rounded:sm
      '&.webeze-select-rounded-sm': {
        '.webeze-select': {
          [`@apply ${config.rounded.sm}`]: {},
        },
      },
      //Rounded:md
      '&.webeze-select-rounded-md': {
        '.webeze-select': {
          [`@apply ${config.rounded.md}`]: {},
        },
      },
      //Rounded:lg
      '&.webeze-select-rounded-lg': {
        '.webeze-select': {
          [`@apply ${config.rounded.lg}`]: {},
        },
      },
      //Rounded:full
      '&.webeze-select-rounded-full': {
        '.webeze-select': {
          [`@apply ${config.rounded.full}`]: {},
        },
      },
      //Size:sm
      '&.webeze-select-sm': {
        //Select
        '.webeze-select': {
          [`@apply pe-${config.size.sm.padding}`]: {},
        },
        //Select:label
        '.webeze-select-label': {
          [`@apply pb-1 text-${config.size.sm.label.font.size}`]: {},
        },
        //Label:float
        '.webeze-label-float': {
          '@apply top-1.5': {},
        },
        //Select:icon
        '.webeze-select-icon, .webeze-select-chevron': {
          [`@apply h-${config.size.sm.icon.outer.size} w-${config.size.sm.icon.outer.size}`]:
            {},

          '.webeze-select-icon-inner, .webeze-select-chevron-inner': {
            [`@apply h-${config.size.sm.icon.inner.size} w-${config.size.sm.icon.inner.size}`]:
              {},
          },
        },
        //Select:placeload
        '.webeze-select-placeload': {
          [`@apply h-${config.size.sm.placeload.size}`]: {},
        },
      },
      //Size:md
      '&.webeze-select-md': {
        //Select
        '.webeze-select': {
          [`@apply pe-${config.size.md.padding}`]: {},
        },
        //Select:label
        '.webeze-select-label': {
          [`@apply pb-1 text-${config.size.md.label.font.size}`]: {},
        },
        //Label:float
        '.webeze-label-float': {
          '@apply top-2.5': {},
        },
        //Select:icon
        '.webeze-select-icon, .webeze-select-chevron': {
          [`@apply h-${config.size.md.icon.outer.size} w-${config.size.md.icon.outer.size}`]:
            {},

          '.webeze-select-icon-inner, .webeze-select-chevron-inner': {
            [`@apply h-${config.size.md.icon.inner.size} w-${config.size.md.icon.inner.size}`]:
              {},
          },
        },
        //Select:placeload
        '.webeze-select-placeload': {
          [`@apply h-${config.size.md.placeload.size}`]: {},
        },
      },
      //Size:lg
      '&.webeze-select-lg': {
        //Select
        '.webeze-select': {
          [`@apply pe-${config.size.lg.padding}`]: {},
        },
        //Select:label
        '.webeze-select-label': {
          [`@apply pb-1 text-${config.size.lg.label.font.size}`]: {},
        },
        //Label:float
        '.webeze-label-float': {
          '@apply top-3.5': {},
        },
        //Select:icon
        '.webeze-select-icon, .webeze-select-chevron': {
          [`@apply h-${config.size.lg.icon.outer.size} w-${config.size.lg.icon.outer.size}`]:
            {},

          '.webeze-select-icon-inner, .webeze-select-chevron-inner': {
            [`@apply h-${config.size.lg.icon.inner.size} w-${config.size.lg.icon.inner.size}`]:
              {},
          },
        },
        //Select:placeload
        '.webeze-select-placeload': {
          [`@apply h-${config.size.lg.placeload.size}`]: {},
        },
      },
      //Size:xl
      '&.webeze-select-xl': {
        //Select
        '.webeze-select': {
          [`@apply pe-${config.size.xl.padding}`]: {},
        },
        //Select:label
        '.webeze-select-label': {
          [`@apply pb-1 text-${config.size.xl.label.font.size}`]: {},
        },
        //Label:float
        '.webeze-label-float': {
          '@apply top-[1.1rem]': {},
        },
        //Select:icon
        '.webeze-select-icon, .webeze-select-chevron': {
          [`@apply h-${config.size.xl.icon.outer.size} w-${config.size.xl.icon.outer.size}`]:
            {},

          '.webeze-select-icon-inner, .webeze-select-chevron-inner': {
            [`@apply h-${config.size.xl.icon.inner.size} w-${config.size.xl.icon.inner.size}`]:
              {},
          },
        },
        //Select:placeload
        '.webeze-select-placeload': {
          [`@apply h-${config.size.xl.placeload.size}`]: {},
        },
      },
      //Color:default
      '&.webeze-select-default': {
        '.webeze-select': {
          //Font
          [`@apply text-${config.color.default.color.light} dark:text-${config.color.default.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.color.default.background.light} dark:bg-${config.color.default.background.dark}`]:
            {},
          //Border
          [`@apply border border-${config.color.default.border.base.light} dark:border-${config.color.default.border.base.dark}`]:
            {},
          //Border:hover
          [`@apply hover:border-${config.color.default.border.hover.light} dark:hover:border-${config.color.default.border.hover.dark}`]:
            {},
        },
      },
      //Color:default-contrast
      '&.webeze-select-default-contrast': {
        '.webeze-select': {
          //Font
          [`@apply text-${config.color.defaultContrast.color.light} dark:text-${config.color.defaultContrast.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.color.defaultContrast.background.light} dark:bg-${config.color.defaultContrast.background.dark}`]:
            {},
          //Border
          [`@apply border border-${config.color.defaultContrast.border.base.light} dark:border-${config.color.defaultContrast.border.base.dark}`]:
            {},
          //Border:hover
          [`@apply hover:border-${config.color.defaultContrast.border.hover.light} dark:hover:border-${config.color.defaultContrast.border.hover.dark}`]:
            {},
        },
      },
      //Color:muted
      '&.webeze-select-muted': {
        '.webeze-select': {
          //Font
          [`@apply text-${config.color.muted.color.light} dark:text-${config.color.muted.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.color.muted.background.light} dark:bg-${config.color.muted.background.dark}`]:
            {},
          //Border
          [`@apply border border-${config.color.muted.border.base.light} dark:border-${config.color.muted.border.base.dark}`]:
            {},
          //Border:hover
          [`@apply hover:border-${config.color.muted.border.hover.light} dark:hover:border-${config.color.muted.border.hover.dark}`]:
            {},
        },
      },
      //Color:muted-contrast
      '&.webeze-select-muted-contrast': {
        '.webeze-select': {
          //Font
          [`@apply text-${config.color.mutedContrast.color.light} dark:text-${config.color.mutedContrast.color.dark}`]:
            {},
          //Background
          [`@apply bg-${config.color.mutedContrast.background.light} dark:bg-${config.color.mutedContrast.background.dark}`]:
            {},
          //Border
          [`@apply border border-${config.color.mutedContrast.border.base.light} dark:border-${config.color.mutedContrast.border.base.dark}`]:
            {},
          //Border:hover
          [`@apply hover:border-${config.color.mutedContrast.border.hover.light} dark:hover:border-${config.color.mutedContrast.border.hover.dark}`]:
            {},
        },
      },
      //Focus:color
      '&.webeze-select-focus': {
        '.webeze-select': {
          //Focus
          [`@apply focus:!border-${config.select.focus.border.color.light} dark:focus:!border-${config.select.focus.border.color.dark}`]:
            {},
          //Force focus
          [`@apply focus:hover:!border-${config.select.focus.border.color.light} dark:focus:hover:!border-${config.select.focus.border.color.dark}`]:
            {},
        },
      },
      //Loaded
      '&:not(.webeze-select-loading)': {
        '.webeze-select ~ .webeze-label-float': {
          '@apply text-transparent': {},
        },
      },
      //Loading
      '&.webeze-select-loading': {
        '.webeze-select': {
          '@apply !text-transparent placeholder:!text-transparent dark:placeholder:!text-transparent':
            {},
        },
        '.webeze-select ~ .webeze-label-float': {
          '@apply text-transparent': {},
        },

        '.webeze-select-icon': {
          '@apply opacity-0': {},
        },
      },
      //Label:float
      '&.webeze-select-label-float': {
        '.webeze-select': {
          '@apply placeholder:text-transparent dark:placeholder:text-transparent':
            {},
        },
      },
      //Select:error
      '&.webeze-select-error': {
        '.webeze-select': {
          [`@apply !border-${config.error.select.border.light} dark:!border-${config.error.select.border.dark}`]:
            {},
        },
        //Select:icon
        '.webeze-select-icon': {
          [`@apply !text-${config.error.icon.color.light} dark:!text-${config.error.icon.color.dark}`]:
            {},
        },
      },
      //Without:icon && Size:sm
      '&:not(.webeze-has-icon).webeze-select-sm': {
        '.webeze-select': {
          [`@apply h-8 py-1 text-${config.icon.disabled.select.sm.font.size} leading-4 ps-2 pe-7`]:
            {},
        },
      },
      //With:icon && Size:sm
      '&.webeze-has-icon.webeze-select-sm': {
        '.webeze-select': {
          [`@apply h-8 py-1 text-${config.icon.enabled.select.sm.font.size} leading-4 pe-7 ps-8`]:
            {},
        },
      },
      //Without:icon && Size:md
      '&:not(.webeze-has-icon).webeze-select-md': {
        '.webeze-select': {
          [`@apply h-10 py-2 text-${config.icon.disabled.select.md.font.size} leading-5 ps-3 pe-8`]:
            {},
        },
      },
      //With:icon && Size:md
      '&.webeze-has-icon.webeze-select-md': {
        '.webeze-select': {
          [`@apply h-10 py-2 text-${config.icon.enabled.select.md.font.size} leading-5 pe-8 ps-10`]:
            {},
        },
      },
      //Without:icon && Size:lg
      '&:not(.webeze-has-icon).webeze-select-lg': {
        '.webeze-select': {
          [`@apply h-12 py-2 text-${config.icon.disabled.select.lg.font.size} leading-5 ps-4 pe-9`]:
            {},
        },
      },
      //With:icon && Size:lg
      '&.webeze-has-icon.webeze-select-lg': {
        '.webeze-select': {
          [`@apply h-12 py-2 text-${config.icon.enabled.select.lg.font.size} leading-5 pe-9 ps-11`]:
            {},
        },
      },
      //Without:icon && Size:xl
      '&:not(.webeze-has-icon).webeze-select-xl': {
        '.webeze-select': {
          [`@apply h-14 py-2 text-${config.icon.disabled.select.xl.font.size} leading-5 ps-4 pe-9`]:
            {},
        },
      },
      //With:icon && Size:xl
      '&.webeze-has-icon.webeze-select-xl': {
        '.webeze-select': {
          [`@apply h-14 py-2 text-${config.icon.enabled.select.xl.font.size} leading-5 pe-9 ps-12`]:
            {},
        },
      },
      //Without:icon && Size:sm && Label:float
      '&.webeze-select-label-float:not(.webeze-has-icon).webeze-select-sm': {
        '.webeze-label-float': {
          [`@apply start-3 -ms-3 -mt-7 text-${config.icon.disabled.label.float.sm.font.size}`]:
            {},
        },

        '.webeze-select:focus-visible ~ .webeze-label-float': {
          '@apply !-ms-3 !-mt-7': {},
        },

        '.webeze-select ~ .webeze-label-float': {
          '@apply ms-0 mt-0': {},
        },
      },
      //With:icon && Size:sm && Label:float
      '&.webeze-select-label-float.webeze-has-icon.webeze-select-sm': {
        '.webeze-label-float': {
          [`@apply start-8 -ms-8 -mt-7 text-${config.icon.enabled.label.float.sm.font.size}`]:
            {},
        },

        '.webeze-select:focus-visible ~ .webeze-label-float': {
          '@apply !-ms-8 !-mt-7': {},
        },

        '.webeze-select ~ .webeze-label-float': {
          '@apply ms-0 mt-0': {},
        },
      },
      //Without:icon && Size:md && Label:float
      '&.webeze-select-label-float:not(.webeze-has-icon).webeze-select-md': {
        '.webeze-label-float': {
          [`@apply start-3 -ms-3 -mt-8 text-${config.icon.disabled.label.float.md.font.size.base}`]:
            {},
        },
        '.webeze-select:focus-visible ~ .webeze-label-float': {
          [`@apply !-ms-3 !-mt-8 !text-${config.icon.disabled.label.float.md.font.size.focus}`]:
            {},
        },
        '.webeze-select ~ .webeze-label-float': {
          [`@apply ms-0 mt-0 text-${config.icon.disabled.label.float.md.font.size.unfocus}`]:
            {},
        },
      },
      //With:icon && Size:md && Label:float
      '&.webeze-select-label-float.webeze-has-icon.webeze-select-md': {
        '.webeze-label-float': {
          [`@apply start-10 -ms-10 -mt-8 text-${config.icon.enabled.label.float.md.font.size.base}`]:
            {},
        },
        '.webeze-select:focus-visible ~ .webeze-label-float': {
          [`@apply !-ms-10 !-mt-8 !text-${config.icon.enabled.label.float.md.font.size.focus}`]:
            {},
        },
        '.webeze-select ~ .webeze-label-float': {
          [`@apply ms-0 mt-0 text-${config.icon.enabled.label.float.md.font.size.unfocus}`]:
            {},
        },
      },
      //Without:icon && Size:lg && Label:float
      '&.webeze-select-label-float:not(.webeze-has-icon).webeze-select-lg': {
        '.webeze-label-float': {
          [`@apply start-3 -ms-3 -mt-9 text-${config.icon.disabled.label.float.lg.font.size.base}`]:
            {},
        },
        '.webeze-select:focus-visible ~ .webeze-label-float': {
          [`@apply !-ms-3 !-mt-9 !text-${config.icon.disabled.label.float.lg.font.size.focus}`]:
            {},
        },
        '.webeze-select ~ .webeze-label-float': {
          [`@apply ms-0 mt-0 text-${config.icon.disabled.label.float.lg.font.size.unfocus}`]:
            {},
        },
      },
      //With:icon && Size:lg && Label:float
      '&.webeze-select-label-float.webeze-has-icon.webeze-select-lg': {
        '.webeze-label-float': {
          [`@apply start-11 -ms-10 -mt-9 text-${config.icon.enabled.label.float.lg.font.size.base}`]:
            {},
        },
        '.webeze-select:focus-visible ~ .webeze-label-float': {
          [`@apply !-ms-10 !-mt-9 !text-${config.icon.enabled.label.float.lg.font.size.focus}`]:
            {},
        },
        '.webeze-select ~ .webeze-label-float': {
          [`@apply ms-0 mt-0 text-${config.icon.enabled.label.float.lg.font.size.unfocus}`]:
            {},
        },
      },
      //Without:icon && Size:xl && Label:float
      '&.webeze-select-label-float:not(.webeze-has-icon).webeze-select-xl': {
        '.webeze-label-float': {
          [`@apply start-3 -ms-3 -mt-10 text-${config.icon.disabled.label.float.xl.font.size.base}`]:
            {},
        },
        '.webeze-select:focus-visible ~ .webeze-label-float': {
          [`@apply !-ms-3 !-mt-10 !text-${config.icon.disabled.label.float.xl.font.size.focus}`]:
            {},
        },
        '.webeze-select ~ .webeze-label-float': {
          [`@apply ms-0 mt-0 text-${config.icon.disabled.label.float.xl.font.size.unfocus}`]:
            {},
        },
      },
      //With:icon && Size:xl && Label:float
      '&.webeze-select-label-float.webeze-has-icon.webeze-select-xl': {
        '.webeze-label-float': {
          [`@apply start-[3.25rem] -ms-[3.25rem] -mt-10 text-${config.icon.enabled.label.float.xl.font.size.base}`]:
            {},
        },
        '.webeze-select:focus-visible ~ .webeze-label-float': {
          [`@apply !-ms-[3.25rem] !-mt-10 !text-${config.icon.enabled.label.float.xl.font.size.focus}`]:
            {},
        },
        '.webeze-select ~ .webeze-label-float': {
          [`@apply ms-0 mt-0 text-${config.icon.enabled.label.float.xl.font.size.unfocus}`]:
            {},
        },
      },
    },
  })
}, config)
