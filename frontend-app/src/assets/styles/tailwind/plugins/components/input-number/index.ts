import plugin from 'tailwindcss/plugin'
import {
  type InputNumberConfig,
  defaultConfig,
  key,
} from './input-number.config'

const config = {
  theme: {
    webeze: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`webeze.${key}`) satisfies InputNumberConfig

  addComponents({
    //Wrapper
    '.webeze-input-number-wrapper': {
      '@apply relative': {},
      //Input:label
      '.webeze-input-number-label, .webeze-label-float': {
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
      //Input:outer
      '.webeze-input-number-outer': {
        '@apply webeze-focus relative': {},
      },
      //Input:icon
      '.webeze-input-number-icon': {
        '@apply absolute start-0 top-0 z-10 flex items-center justify-center':
          {},
        //Color
        [`@apply text-${config.input.icon.color.base.light} dark:text-${config.input.icon.color.base.dark}`]:
          {},
        //Transition
        [`@apply transition-${config.input.icon.transition.property} duration-${config.input.icon.transition.duration}`]:
          {},
      },
      //Input:buttons
      '.webeze-input-number-buttons': {
        '@apply absolute top-1 end-1 flex z-10': {},
      },
      //Buttons:button
      '.webeze-input-number-buttons > button': {
        '@apply outline-none flex items-center justify-center': {},
        '@apply last:border-s-0': {},
        '@apply text-muted-400 enabled:hover:text-muted-600 dark:enabled:hover:text-muted-100':
          {},
        '@apply enabled:focus:text-muted-600 dark:enabled:focus:text-muted-100':
          {},
        '@apply transition-colors duration-300': {},
        '@apply disabled:cursor-not-allowed': {},
      },
      //Button:icon
      '.webeze-input-number-buttons svg': {
        '@apply h-4 w-4': {},
      },
      //Input
      '.webeze-input-number': {
        //Base
        [`@apply webeze-focus w-${config.input.width} font-${config.input.font.family} disabled:cursor-not-allowed disabled:opacity-75`]:
          {},
        //Transition
        [`@apply transition-${config.input.transition.property} duration-${config.input.transition.duration}`]:
          {},
        //Focus:label:float
        '&:focus-visible ~ .webeze-label-float': {
          [`@apply !text-${config.input.focus.label.float.font.color.light} dark:!text-${config.input.focus.label.float.font.color.dark}`]:
            {},
        },
        //Focus:icon
        '&:focus-visible ~ .webeze-input-number-icon': {
          [`@apply !text-${config.input.icon.color.focus.light} dark:!text-${config.input.icon.color.focus.dark}`]:
            {},
        },
        //Disabled:icon
        '&:disabled ~ .webeze-input-number-icon': {
          '@apply cursor-not-allowed opacity-75': {},
        },
      },
      //Input:placeload
      '.webeze-input-number-placeload': {
        '@apply absolute start-0 top-0 flex w-full items-center px-4': {},
        //Placeload:inner
        '.webeze-placeload': {
          '@apply h-3 w-full max-w-[50%] rounded': {},
        },
      },
      //Input:action
      '.webeze-input-number-action': {
        //Base
        '@apply absolute end-0 top-0 flex items-center justify-center': {},
        //Color
        [`@apply text-${config.input.action.color.light} dark:text-${config.input.action.color.dark}`]:
          {},
        //Transition
        [`@apply transition-${config.input.action.transition.property} duration-${config.input.action.transition.duration}`]:
          {},
      },
      //Rounded:sm
      '&.webeze-input-number-rounded-sm': {
        '.webeze-input-number, .webeze-input-number-outer': {
          [`@apply ${config.rounded.sm}`]: {},
        },
        '.webeze-input-number-buttons button': {
          [`@apply first:rounded-s-${config.buttons.rounded.sm}`]: {},
          [`@apply last:rounded-e-${config.buttons.rounded.sm}`]: {},
        },
      },
      //Rounded:md
      '&.webeze-input-number-rounded-md': {
        '.webeze-input-number, .webeze-input-number-outer': {
          [`@apply ${config.rounded.md}`]: {},
        },
        '.webeze-input-number-buttons button': {
          [`@apply first:rounded-s-${config.buttons.rounded.md}`]: {},
          [`@apply last:rounded-e-${config.buttons.rounded.md}`]: {},
        },
      },
      //Rounded:lg
      '&.webeze-input-number-rounded-lg': {
        '.webeze-input-number, .webeze-input-number-outer': {
          [`@apply ${config.rounded.lg}`]: {},
        },
        '.webeze-input-number-buttons button': {
          [`@apply first:rounded-s-${config.buttons.rounded.lg}`]: {},
          [`@apply last:rounded-e-${config.buttons.rounded.lg}`]: {},
        },
      },
      //Rounded:full
      '&.webeze-input-number-rounded-full': {
        '.webeze-input-number, .webeze-input-number-outer': {
          [`@apply ${config.rounded.full}`]: {},
        },
        '.webeze-input-number-buttons button': {
          [`@apply first:rounded-s-${config.buttons.rounded.full}`]: {},
          [`@apply last:rounded-e-${config.buttons.rounded.full}`]: {},
        },
      },
      //Size:sm
      '&.webeze-input-number-sm': {
        //Input:label
        '.webeze-input-number-label': {
          [`@apply pb-1 text-${config.size.sm.label.font.size}`]: {},
        },
        //Label:float
        '.webeze-label-float': {
          '@apply top-1.5': {},
        },
        //Input:icon && Input:action
        '.webeze-input-number-icon, .webeze-input-number-action': {
          [`@apply h-${config.size.sm.icon.outer.size} w-${config.size.sm.icon.outer.size}`]:
            {},

          '.webeze-input-number-icon-inner, .webeze-input-number-action-inner': {
            [`@apply h-${config.size.sm.icon.inner.size} w-${config.size.sm.icon.inner.size}`]:
              {},
          },
        },
        //Input:placeload
        '.webeze-input-number-placeload': {
          [`@apply h-${config.size.sm.placeload.size}`]: {},
        },
        //Input:buttons
        '.webeze-input-number-buttons button': {
          '@apply h-6 w-6': {},
        },
      },
      //Size:md
      '&.webeze-input-number-md': {
        //Input:label
        '.webeze-input-number-label': {
          [`@apply pb-1 text-${config.size.md.label.font.size}`]: {},
        },
        //Label:float
        '.webeze-label-float': {
          '@apply top-2.5': {},
        },
        //Input:icon && Input:action
        '.webeze-input-number-icon, .webeze-input-number-action': {
          [`@apply h-${config.size.md.icon.outer.size} w-${config.size.md.icon.outer.size}`]:
            {},

          '.webeze-input-number-icon-inner, .webeze-input-number-action-inner': {
            [`@apply h-${config.size.md.icon.inner.size} w-${config.size.md.icon.inner.size}`]:
              {},
          },
        },
        //Input:placeload
        '.webeze-input-number-placeload': {
          [`@apply h-${config.size.md.placeload.size}`]: {},
        },
        //Input:buttons
        '.webeze-input-number-buttons button': {
          '@apply  h-8 w-8': {},
        },
      },
      //Size:lg
      '&.webeze-input-number-lg': {
        //Input:label
        '.webeze-input-number-label': {
          [`@apply pb-1 text-${config.size.lg.label.font.size}`]: {},
        },
        //Label:float
        '.webeze-label-float': {
          '@apply top-3.5': {},
        },
        //Input:icon && Input:action
        '.webeze-input-number-icon, .webeze-input-number-action': {
          [`@apply h-${config.size.lg.icon.outer.size} w-${config.size.lg.icon.outer.size}`]:
            {},

          '.webeze-input-number-icon-inner, .webeze-input-number-action-inner': {
            [`@apply h-${config.size.lg.icon.inner.size} w-${config.size.lg.icon.inner.size}`]:
              {},
          },
        },
        //Input:placeload
        '.webeze-input-number-placeload': {
          [`@apply h-${config.size.lg.placeload.size}`]: {},
        },
        //Input:buttons
        '.webeze-input-number-buttons button': {
          '@apply h-10 w-10': {},
        },
      },
      //Size:xl
      '&.webeze-input-number-xl': {
        //Input:label
        '.webeze-input-number-label': {
          [`@apply pb-1 text-${config.size.xl.label.font.size}`]: {},
        },
        //Label:float
        '.webeze-label-float': {
          '@apply top-[1.1rem]': {},
        },
        //Input:icon && Input:action
        '.webeze-input-number-icon, .webeze-input-number-action': {
          [`@apply h-${config.size.xl.icon.outer.size} w-${config.size.xl.icon.outer.size}`]:
            {},

          '.webeze-input-number-icon-inner, .webeze-input-number-action-inner': {
            [`@apply h-${config.size.xl.icon.inner.size} w-${config.size.xl.icon.inner.size}`]:
              {},
          },
        },
        //Input:placeload
        '.webeze-input-number-placeload': {
          [`@apply h-${config.size.xl.placeload.size}`]: {},
        },
        //Input:buttons
        '.webeze-input-number-buttons button': {
          '@apply h-12 w-12': {},
        },
      },
      //Color:default
      '&.webeze-input-number-default': {
        '.webeze-input-number': {
          //Font
          [`@apply text-${config.color.default.color.light} dark:text-${config.color.default.color.dark}`]:
            {},
          //Placeholder
          [`@apply placeholder:text-${config.color.default.placeholder.light} dark:placeholder:text-${config.color.default.placeholder.dark}`]:
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
        //Input:buttons
        '.webeze-input-number-buttons button': {
          '@apply bg-white dark:bg-muted-800 enabled:hover:bg-muted-100 dark:enabled:hover:bg-muted-700':
            {},
          '@apply border border-muted-200 dark:border-muted-700 enabled:focus:bg-muted-100 dark:enabled:focus:bg-muted-800':
            {},
        },
      },
      //Color:defaultContrast
      '&.webeze-input-number-default-contrast': {
        '.webeze-input-number': {
          //Font
          [`@apply text-${config.color.defaultContrast.color.light} dark:text-${config.color.defaultContrast.color.dark}`]:
            {},
          //Placeholder
          [`@apply placeholder:text-${config.color.defaultContrast.placeholder.light} dark:placeholder:text-${config.color.defaultContrast.placeholder.dark}`]:
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
        //Input:buttons
        '.webeze-input-number-buttons button': {
          '@apply bg-white dark:bg-muted-800 enabled:hover:bg-white dark:enabled:hover:bg-muted-900':
            {},
          '@apply border border-muted-200 dark:border-muted-700 enabled:focus:bg-white dark:enabled:focus:bg-muted-900':
            {},
        },
      },
      //Color:muted
      '&.webeze-input-number-muted': {
        '.webeze-input-number': {
          //Font
          [`@apply text-${config.color.muted.color.light} dark:text-${config.color.muted.color.dark}`]:
            {},
          //Placeholder
          [`@apply placeholder:text-${config.color.muted.placeholder.light} dark:placeholder:text-${config.color.muted.placeholder.dark}`]:
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
        //Input:buttons
        '.webeze-input-number-buttons button': {
          '@apply bg-white dark:bg-muted-800 enabled:hover:bg-white dark:enabled:hover:bg-muted-800':
            {},
          '@apply border border-muted-200 dark:border-muted-700 enabled:focus:bg-white dark:enabled:focus:bg-muted-800':
            {},
        },
      },
      //Color:mutedContrast
      '&.webeze-input-number-muted-contrast': {
        '.webeze-input-number': {
          //Font
          [`@apply text-${config.color.mutedContrast.color.light} dark:text-${config.color.mutedContrast.color.dark}`]:
            {},
          //Placeholder
          [`@apply placeholder:text-${config.color.mutedContrast.placeholder.light} dark:placeholder:text-${config.color.mutedContrast.placeholder.dark}`]:
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
      '&.webeze-input-number-focus': {
        '.webeze-input-number': {
          //Focus
          [`@apply focus:!border-${config.input.focus.border.color.light} dark:focus:!border-${config.input.focus.border.color.dark}`]:
            {},
          //Force focus
          [`@apply focus:hover:!border-${config.input.focus.border.color.light} dark:focus:hover:!border-${config.input.focus.border.color.dark}`]:
            {},
        },
      },
      //Input:buttons
      '.webeze-input-number-buttons button': {
        '@apply bg-white dark:bg-muted-800 enabled:hover:bg-white dark:enabled:hover:bg-muted-900':
          {},
        '@apply border border-muted-200 dark:border-muted-700 enabled:focus:bg-white dark:enabled:focus:bg-muted-900':
          {},
      },

      //Input:not loading
      '&:not(.webeze-input-number-loading)': {
        '.webeze-input-number:placeholder-shown ~ .webeze-label-float': {
          [`@apply text-${config.loaded.font.color.light} dark:text-${config.loaded.font.color.dark}`]:
            {},
        },
      },
      //Input:loading
      '&.webeze-input-number-loading': {
        '.webeze-input-number': {
          '@apply !text-transparent placeholder:!text-transparent dark:placeholder:!text-transparent':
            {},
        },
        '.webeze-input-number:placeholder-shown ~ .webeze-label-float': {
          '@apply text-transparent': {},
        },
        '.webeze-input-number-icon': {
          '@apply opacity-0': {},
        },
      },
      //Input:label:float
      '&.webeze-input-number-label-float': {
        '.webeze-input-number': {
          '@apply placeholder:text-transparent dark:placeholder:text-transparent':
            {},
        },
      },
      //Input:error
      '&.webeze-input-number-error': {
        //Border
        '.webeze-input-number': {
          [`@apply !border-${config.error.input.border.light} dark:!border-${config.error.input.border.dark}`]:
            {},
        },
        //Icon
        '.webeze-input-number-icon': {
          [`@apply !text-${config.error.icon.color.light} dark:!text-${config.error.icon.color.dark}`]:
            {},
        },
      },
      //Without icon && Size:sm
      '&:not(.webeze-has-icon).webeze-input-number-sm': {
        '.webeze-input-number': {
          [`@apply h-8 py-1 text-${config.icon.disabled.input.sm.font.size} leading-4 ps-2 pe-[3.75rem]`]:
            {},
        },
      },
      //With icon && Size:sm
      '&.webeze-has-icon.webeze-input-number-sm': {
        '.webeze-input-number': {
          [`@apply h-8 py-1 text-${config.icon.enabled.input.sm.font.size} leading-4 ps-8 pe-[3.75rem]`]:
            {},
        },
      },
      //Without icon && Size:md
      '&:not(.webeze-has-icon).webeze-input-number-md': {
        '.webeze-input-number': {
          [`@apply h-10 py-2 text-${config.icon.disabled.input.md.font.size} leading-5 ps-3 pe-[4.75rem]`]:
            {},
        },
      },
      //With icon && Size:md
      '&.webeze-has-icon.webeze-input-number-md': {
        '.webeze-input-number': {
          [`@apply h-10 py-2 text-${config.icon.enabled.input.md.font.size} leading-5 ps-10 pe-[4.75rem]`]:
            {},
        },
      },
      //Without icon && Size:lg
      '&:not(.webeze-has-icon).webeze-input-number-lg': {
        '.webeze-input-number': {
          [`@apply h-12 py-2 text-${config.icon.disabled.input.lg.font.size} leading-5 ps-4 pe-24`]:
            {},
        },
      },
      //With icon && Size:lg
      '&.webeze-has-icon.webeze-input-number-lg': {
        '.webeze-input-number': {
          [`@apply h-12 py-2 text-${config.icon.enabled.input.lg.font.size} leading-5 ps-11 pe-24`]:
            {},
        },
      },
      //Without icon && Size:xl
      '&:not(.webeze-has-icon).webeze-input-number-xl': {
        '.webeze-input-number': {
          [`@apply h-14 py-2 text-${config.icon.disabled.input.xl.font.size} leading-5 ps-4 pe-24`]:
            {},
        },
      },
      //With icon && Size:xl
      '&.webeze-has-icon.webeze-input-number-xl': {
        '.webeze-input-number': {
          [`@apply h-14 py-2 text-${config.icon.enabled.input.xl.font.size} leading-5 ps-[3.25rem] pe-24`]:
            {},
        },
      },
      //With action && Size:sm
      '&.webeze-has-action.webeze-input-number-sm': {
        '.webeze-input-number': {
          [`@apply pe-${config.input.action.padding.sm}`]: {},
        },
      },
      //With action && Size:md
      '&.webeze-has-action.webeze-input-number-md': {
        '.webeze-input-number': {
          [`@apply pe-${config.input.action.padding.md}`]: {},
        },
      },
      //With action && Size:lg
      '&.webeze-has-action.webeze-input-number-lg': {
        '.webeze-input-number': {
          [`@apply pe-${config.input.action.padding.lg}`]: {},
        },
      },
      //Without icon && Size:sm && Label:float
      '&.webeze-input-number-label-float:not(.webeze-has-icon).webeze-input-number-sm': {
        '.webeze-label-float': {
          [`@apply start-3 -ms-3 -mt-7 text-${config.icon.disabled.label.float.sm.font.size}`]:
            {},
        },
        '.webeze-input-number:focus-visible ~ .webeze-label-float': {
          '@apply !-ms-3 !-mt-7': {},
        },

        '.webeze-input-number:placeholder-shown ~ .webeze-label-float': {
          '@apply ms-0 mt-0': {},
        },
      },
      //With icon && Size:sm && Label:float
      '&.webeze-input-number-label-float.webeze-has-icon.webeze-input-number-sm': {
        '.webeze-label-float': {
          [`@apply start-8 -ms-8 -mt-7 text-${config.icon.enabled.label.float.sm.font.size}`]:
            {},
        },
        '.webeze-input-number:focus-visible ~ .webeze-label-float': {
          '@apply !-ms-8 !-mt-7': {},
        },
        '.webeze-input-number:placeholder-shown ~ .webeze-label-float': {
          '@apply ms-0 mt-0': {},
        },
      },
      //Without icon && Size:md && Label:float
      '&.webeze-input-number-label-float:not(.webeze-has-icon).webeze-input-number-md': {
        '.webeze-label-float': {
          [`@apply start-3 -ms-3 -mt-8 text-${config.icon.disabled.label.float.md.font.size.base}`]:
            {},
        },
        '.webeze-input-number:focus-visible ~ .webeze-label-float': {
          [`@apply !-ms-3 !-mt-8 !text-${config.icon.disabled.label.float.md.font.size.focus}`]:
            {},
        },
        '.webeze-input-number:placeholder-shown ~ .webeze-label-float': {
          [`@apply ms-0 mt-0 text-${config.icon.disabled.label.float.md.font.size.unfocus}`]:
            {},
        },
      },
      //With icon && Size:md && Label:float
      '&.webeze-input-number-label-float.webeze-has-icon.webeze-input-number-md': {
        '.webeze-label-float': {
          [`@apply start-10 -ms-10 -mt-8 text-${config.icon.enabled.label.float.md.font.size.base}`]:
            {},
        },
        '.webeze-input-number:focus-visible ~ .webeze-label-float': {
          [`@apply !-ms-10 !-mt-8 !text-${config.icon.enabled.label.float.md.font.size.focus}`]:
            {},
        },
        '.webeze-input-number:placeholder-shown ~ .webeze-label-float': {
          [`@apply ms-0 mt-0 text-${config.icon.enabled.label.float.md.font.size.unfocus}`]:
            {},
        },
      },
      //Without icon && Size:lg && Label:float
      '&.webeze-input-number-label-float:not(.webeze-has-icon).webeze-input-number-lg': {
        '.webeze-label-float': {
          [`@apply start-3 -ms-3 -mt-9 text-${config.icon.disabled.label.float.lg.font.size.base}`]:
            {},
        },
        '.webeze-input-number:focus-visible ~ .webeze-label-float': {
          [`@apply !-ms-3 !-mt-9 !text-${config.icon.disabled.label.float.lg.font.size.focus}`]:
            {},
        },
        '.webeze-input-number:placeholder-shown ~ .webeze-label-float': {
          [`@apply ms-0 mt-0 text-${config.icon.disabled.label.float.lg.font.size.unfocus}`]:
            {},
        },
      },
      //With icon && Size:lg && Label:float
      '&.webeze-input-number-label-float.webeze-has-icon.webeze-input-number-lg': {
        '.webeze-label-float': {
          [`@apply start-11 -ms-10 -mt-9 text-${config.icon.enabled.label.float.lg.font.size.base}`]:
            {},
        },
        '.webeze-input-number:focus-visible ~ .webeze-label-float': {
          [`@apply !-ms-10 !-mt-9 !text-${config.icon.enabled.label.float.lg.font.size.focus}`]:
            {},
        },
        '.webeze-input-number:placeholder-shown ~ .webeze-label-float': {
          [`@apply ms-0 mt-0 text-${config.icon.enabled.label.float.lg.font.size.unfocus}`]:
            {},
        },
      },
      //Without icon && Size:xl && Label:float
      '&.webeze-input-number-label-float:not(.webeze-has-icon).webeze-input-number-xl': {
        '.webeze-label-float': {
          [`@apply start-3 -ms-3 -mt-10 text-${config.icon.disabled.label.float.xl.font.size.base}`]:
            {},
        },
        '.webeze-input-number:focus-visible ~ .webeze-label-float': {
          [`@apply !-ms-3 !-mt-10 !text-${config.icon.disabled.label.float.xl.font.size.focus}`]:
            {},
        },
        '.webeze-input-number:placeholder-shown ~ .webeze-label-float': {
          [`@apply ms-0 mt-0 text-${config.icon.disabled.label.float.xl.font.size.unfocus}`]:
            {},
        },
      },
      //With icon && Size:xl && Label:float
      '&.webeze-input-number-label-float.webeze-has-icon.webeze-input-number-xl': {
        '.webeze-label-float': {
          [`@apply start-[3.25rem] -ms-[3.25rem] -mt-10 text-${config.icon.enabled.label.float.xl.font.size.base}`]:
            {},
        },
        '.webeze-input-number:focus-visible ~ .webeze-label-float': {
          [`@apply !-ms-[3.25rem] !-mt-10 !text-${config.icon.enabled.label.float.xl.font.size.focus}`]:
            {},
        },
        '.webeze-input-number:placeholder-shown ~ .webeze-label-float': {
          [`@apply ms-0 mt-0 text-${config.icon.enabled.label.float.xl.font.size.unfocus}`]:
            {},
        },
      },
    },
  })
}, config)
