import plugin from 'tailwindcss/plugin'
import { type TextareaConfig, defaultConfig, key } from './textarea.config'

const config = {
  theme: {
    webeze: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`webeze.${key}`) satisfies TextareaConfig

  addComponents({
    //Wrapper
    '.webeze-textarea-wrapper': {
      '@apply relative': {},
      //Textarea:label
      '.webeze-textarea-label, .webeze-label-float': {
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
      //Textarea:outer
      '.webeze-textarea-outer': {
        '@apply relative flex flex-col': {},
      },
      //Textarea
      '.webeze-textarea': {
        [`@apply webeze-focus w-${config.textarea.width} enabled:cursor-text cursor-not-allowed`]:
          {},
        //Focus:label:float
        '&:focus-visible ~ .webeze-label-float': {
          [`@apply !text-${config.label.float.font.color} dark:!text-${config.label.float.font.color}`]:
            {},
        },
        //Textarea:focus
        '&.webeze-textarea-focus': {
          //Focus:color
          [`@apply focus:!border-${config.textarea.focus.border.color.light} dark:focus:!border-${config.textarea.focus.border.color.dark}`]:
            {},
          //Transition
          [`@apply transition-${config.textarea.transition.property} duration-${config.textarea.transition.duration}`]:
            {},
        },
      },
      //Textrea:placeload
      '.webeze-textarea-placeload': {
        [`@apply absolute start-0 top-4 flex h-${config.textarea.placeload.size} w-${config.textarea.placeload.size} flex-col space-y-${config.textarea.placeload.space} px-3`]:
          {},

        '.webeze-placeload': {
          '@apply h-3 w-full rounded': {},

          '&:first-child': {
            '@apply max-w-[85%]': {},
          },
          '&:nth-child(2)': {
            '@apply max-w-[65%]': {},
          },
          '&:nth-child(3)': {
            '@apply max-w-[35%]': {},
          },
        },
      },
      //Rounded:sm
      '&.webeze-textarea-rounded-sm': {
        '.webeze-textarea': {
          [`@apply rounded-${config.rounded.sm}`]: {},
        },
        '.webeze-textarea-addon': {
          [`@apply rounded-b-${config.rounded.sm}`]: {},
        },
      },
      //Rounded:md
      '&.webeze-textarea-rounded-md': {
        '.webeze-textarea': {
          [`@apply rounded-${config.rounded.md}`]: {},
        },
        '.webeze-textarea-addon': {
          [`@apply rounded-b-${config.rounded.md}`]: {},
        },
      },
      //Rounded:lg
      '&.webeze-textarea-rounded-lg': {
        '.webeze-textarea': {
          [`@apply rounded-${config.rounded.lg}`]: {},
        },
        '.webeze-textarea-addon': {
          [`@apply rounded-b-${config.rounded.lg}`]: {},
        },
      },
      //Color:default
      '&.webeze-textarea-default': {
        '.webeze-textarea': {
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
      },
      //Color:defaut-contrast
      '&.webeze-textarea-default-contrast': {
        '.webeze-textarea': {
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
      },
      //Color:muted
      '&.webeze-textarea-muted': {
        '.webeze-textarea': {
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
      },
      //Color:muted-contrast
      '&.webeze-textarea-muted-contrast': {
        '.webeze-textarea': {
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
      //Textarea:loaded
      '&:not(.webeze-textarea-loading)': {
        '.webeze-textarea:placeholder-shown ~ .webeze-label-float': {
          [`@apply text-${config.loaded.font.color.light} dark:text-${config.loaded.font.color.dark}`]:
            {},
        },
      },
      //Textarea:loading
      '&.webeze-textarea-loading': {
        '.webeze-textarea': {
          '@apply !text-transparent placeholder:!text-transparent dark:placeholder:!text-transparent':
            {},
        },
        '.webeze-textarea:placeholder-shown ~ .webeze-label-float': {
          '@apply text-transparent': {},
        },
      },
      //Label:float
      '&.webeze-textarea-label-float': {
        '.webeze-textarea': {
          '@apply placeholder:text-transparent dark:placeholder:text-transparent':
            {},
        },
      },
      //Textarea:error
      '&.webeze-textarea-error': {
        '.webeze-textarea': {
          [`@apply !border-${config.error.textarea.border.light} dark:!border-${config.error.textarea.border.dark}`]:
            {},
        },
      },
      //Resize:none
      '&.webeze-textarea-no-resize': {
        '.webeze-textarea': {
          '@apply resize-none': {},
        },
      },
      //Size:sm
      '&.webeze-textarea-sm': {
        [`@apply min-h-${config.size.sm.height} text-${config.size.sm.font.size}`]:
          {},

        '.webeze-textarea-label': {
          [`@apply pb-1 text-${config.size.sm.label.size}`]: {},
        },
      },
      //Size:md
      '&.webeze-textarea-md': {
        [`@apply min-h-${config.size.md.height} text-${config.size.md.font.size}`]:
          {},

        '.webeze-textarea-label': {
          [`@apply pb-1 text-${config.size.md.label.size}`]: {},
        },
      },
      //Size:lg
      '&.webeze-textarea-lg': {
        [`@apply min-h-${config.size.lg.height} text-${config.size.lg.font.size}`]:
          {},

        '.webeze-textarea-label': {
          [`@apply pb-1 text-${config.size.lg.label.size}`]: {},
        },
      },
      //Addon:false
      '&:not(.webeze-has-addon)': {
        '.webeze-textarea': {
          '@apply p-2': {},
        },
      },
      //Addon:true
      '&.webeze-has-addon': {
        '.webeze-textarea': {
          '@apply px-2 pb-14 pt-2': {},
        },
        '.webeze-textarea-addon': {
          //Base
          '@apply absolute bottom-0 start-0 flex items-center justify-between':
            {},
          //size
          [`@apply w-full h-${config.textarea.addon.size} p-${config.textarea.addon.padding}`]:
            {},
          //Background
          [`@apply bg-${config.textarea.addon.background.light} dark:bg-${config.textarea.addon.background.dark}`]:
            {},
          //Border
          [`@apply border border-${config.textarea.addon.border.light} dark:border-${config.textarea.addon.border.dark}`]:
            {},
        },
        '.webeze-textarea-addon-start': {
          '@apply flex items-center gap-2': {},
        },
        '.webeze-textarea-addon-end': {
          '@apply flex items-center justify-end gap-2': {},
        },
      },
      //Label:float && Size:sm
      '&.webeze-textarea-label-float.webeze-textarea-sm': {
        '.webeze-label-float': {
          [`@apply start-3 -ms-3 -mt-7 text-${config.size.sm.label.float.size}`]:
            {},
        },
        '.webeze-textarea:focus-visible ~ .webeze-label-float': {
          '@apply !-ms-3 !-mt-6': {},
        },
        '.webeze-textarea:placeholder-shown ~ .webeze-label-float': {
          '@apply ms-0 mt-[0.35rem]': {},
        },
      },
      //Label:float && Size:md
      '&.webeze-textarea-label-float.webeze-textarea-md': {
        '.webeze-label-float': {
          [`@apply start-3 -ms-3 -mt-8 text-${config.size.md.label.float.size.base}`]:
            {},
        },
        '.webeze-textarea:focus-visible ~ .webeze-label-float': {
          [`@apply !-ms-3 !-mt-7 !text-${config.size.md.label.float.size.focus}`]:
            {},
        },
        '.webeze-textarea:placeholder-shown ~ .webeze-label-float': {
          [`@apply ms-0 mt-2.5 text-${config.size.md.label.float.size.unfocus}`]:
            {},
        },
      },
      //Label:float && Size:lg
      '&.webeze-textarea-label-float.webeze-textarea-lg': {
        '.webeze-label-float': {
          [`@apply start-3 -ms-3 -mt-8 text-${config.size.lg.label.float.size.base}`]:
            {},
        },
        '.webeze-textarea:focus-visible ~ .webeze-label-float': {
          [`@apply !-ms-3 !-mt-7 !text-${config.size.lg.label.float.size.focus}`]:
            {},
        },
        '.webeze-textarea:placeholder-shown ~ .webeze-label-float': {
          [`@apply ms-0 mt-3 text-${config.size.lg.label.float.size.unfocus}`]:
            {},
        },
      },
    },
  })
}, config)
