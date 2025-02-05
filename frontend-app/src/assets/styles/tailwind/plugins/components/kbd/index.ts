import plugin from 'tailwindcss/plugin'
import { type KbdConfig, defaultConfig, key } from './kbd.config'

const config = {
  theme: {
    webeze: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`webeze.${key}`) satisfies KbdConfig

  addComponents({
    '.webeze-kbd': {
      '@apply inline-flex items-center justify-center': {},
      //Font
      [`@apply font-${config.font.family} leading-none text-${config.font.color.light} dark:text-${config.font.color.dark}`]:
        {},
      //Icon:outer
      '.webeze-kbd-icon-outer': {
        '@apply inline-flex items-center justify-center': {},
      },
      //Icon:inner
      '.webeze-kbd-icon': {
        '@apply shrink-0': {},
      },
      //Rounded:sm
      '&.webeze-kbd-rounded-sm': {
        [`@apply ${config.rounded.sm}`]: {},
      },
      //Rounded:md
      '&.webeze-kbd-rounded-md': {
        [`@apply ${config.rounded.md}`]: {},
      },
      //Rounded:lg
      '&.webeze-kbd-rounded-lg': {
        [`@apply ${config.rounded.lg}`]: {},
      },
      //Rounded:full
      '&.webeze-kbd-rounded-full': {
        [`@apply ${config.rounded.full}`]: {},
      },
      //Size:xs
      '&.webeze-kbd-xs': {
        '@apply font-medium': {},
        //Size
        [`@apply min-h-[${config.size.xs.size}] min-w-[${config.size.xs.size}]`]:
          {},
        //Padding
        [`@apply px-${config.size.xs.padding.x} py-${config.size.xs.padding.y}`]:
          {},
        //Font
        [`@apply leading-${config.size.xs.font.lead} text-${config.size.xs.font.size}`]:
          {},
        //Icon:outer
        '.webeze-kbd-icon-outer': {
          [`@apply w-${config.size.xs.icon.outer.size} h-${config.size.xs.icon.outer.size}`]:
            {},
        },
        //Icon:inner
        '.webeze-kbd-icon-inner': {
          [`@apply w-${config.size.xs.icon.inner.size} h-${config.size.xs.icon.inner.size}`]:
            {},
        },
      },
      //Size:sm
      '&.webeze-kbd-sm': {
        //Size
        [`@apply min-h-[${config.size.sm.size}] min-w-[${config.size.sm.size}]`]:
          {},
        //Padding
        [`@apply px-${config.size.sm.padding.x} py-${config.size.sm.padding.y}`]:
          {},
        //Font
        [`@apply leading-${config.size.sm.font.lead} text-${config.size.sm.font.size}`]:
          {},
        //Icon:outer
        '.webeze-kbd-icon-outer': {
          [`@apply w-${config.size.sm.icon.outer.size} h-${config.size.sm.icon.outer.size}`]:
            {},
        },
        //Icon:inner
        '.webeze-kbd-icon-inner': {
          [`@apply w-${config.size.sm.icon.inner.size} h-${config.size.sm.icon.inner.size}`]:
            {},
        },
      },
      //Size:md
      '&.webeze-kbd-md': {
        //Size
        [`@apply min-h-[${config.size.md.size}] min-w-[${config.size.md.size}]`]:
          {},
        //Padding
        [`@apply px-${config.size.md.padding.x} py-${config.size.md.padding.y}`]:
          {},
        //Font
        [`@apply leading-${config.size.md.font.lead} text-${config.size.md.font.size}`]:
          {},
        //Icon:outer
        '.webeze-kbd-icon-outer': {
          [`@apply w-${config.size.md.icon.outer.size} h-${config.size.md.icon.outer.size}`]:
            {},
        },
        //Icon:inner
        '.webeze-kbd-icon-inner': {
          [`@apply w-${config.size.md.icon.inner.size} h-${config.size.md.icon.inner.size}`]:
            {},
        },
      },
      //Size:lg
      '&.webeze-kbd-lg': {
        //Size
        [`@apply min-h-[${config.size.lg.size}] min-w-[${config.size.lg.size}]`]:
          {},
        //Padding
        [`@apply px-${config.size.lg.padding.x} py-${config.size.lg.padding.y}`]:
          {},
        //Font
        [`@apply leading-${config.size.lg.font.lead} text-${config.size.lg.font.size}`]:
          {},
        //Icon:outer
        '.webeze-kbd-icon-outer': {
          [`@apply w-${config.size.lg.icon.outer.size} h-${config.size.lg.icon.outer.size}`]:
            {},
        },
        //Icon:inner
        '.webeze-kbd-icon-inner': {
          [`@apply w-${config.size.lg.icon.inner.size} h-${config.size.lg.icon.inner.size}`]:
            {},
        },
      },
      //Color:default
      '&.webeze-kbd-default': {
        //Background
        [`@apply bg-${config.color.default.background.light} dark:bg-${config.color.default.background.dark} border border-b-2`]:
          {},
        //Border
        [`@apply border-${config.color.default.border.light} dark:border-${config.color.default.border.dark}`]:
          {},
      },
      //Color:default-contrast
      '&.webeze-kbd-default-contrast': {
        //Background
        [`@apply bg-${config.color.defaultContrast.background.light} dark:bg-${config.color.defaultContrast.background.dark} border border-b-2`]:
          {},
        //Border
        [`@apply border-${config.color.defaultContrast.border.light} dark:border-${config.color.defaultContrast.border.dark}`]:
          {},
      },
      //Color:muted
      '&.webeze-kbd-muted': {
        //Background
        [`@apply bg-${config.color.muted.background.light} dark:bg-${config.color.muted.background.dark} border border-b-2`]:
          {},
        //Border
        [`@apply border-${config.color.muted.border.light} dark:border-${config.color.muted.border.dark}`]:
          {},
      },
      //Color:muted-contrast
      '&.webeze-kbd-muted-contrast': {
        //Background
        [`@apply bg-${config.color.mutedContrast.background.light} dark:bg-${config.color.mutedContrast.background.dark} border border-b-2`]:
          {},
        //Border
        [`@apply border-${config.color.mutedContrast.border.light} dark:border-${config.color.mutedContrast.border.dark}`]:
          {},
      },
    },
  })
}, config)
