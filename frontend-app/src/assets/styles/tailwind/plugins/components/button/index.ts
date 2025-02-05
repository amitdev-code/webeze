import plugin from 'tailwindcss/plugin'
import { type ButtonConfig, defaultConfig, key } from './button.config'

const config = {
  theme: {
    webeze: {
      button: defaultConfig,
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`webeze.${key}`) satisfies ButtonConfig

  addComponents({
    '.webeze-button': {
      // #region Base
      '@apply relative inline-flex justify-center items-center space-x-1': {},
      //Text styles
      [`@apply font-${config.font.family} font-${config.font.weight} leading-5 no-underline`]:
        {},
      //State styles
      [`@apply webeze-focus transition-${config.transition.property} duration-${config.transition.duration} disabled:opacity-60 disabled:cursor-not-allowed hover:shadow-none`]:
        {},
      // #endregion

      // #region Badge
      '.webeze-button-badge': {
        [`@apply flex absolute h-${config.badge.size} w-${config.badge.size} top-0 -end-0.5 -mt-0.5`]:
          {},

        '.webeze-button-badge-pulse': {
          '@apply absolute inline-flex h-full w-full rounded-full opacity-75 bg-primary-500 animate-ping':
            {},
        },

        '.webeze-button-badge-inner': {
          [`@apply relative inline-flex rounded-full h-${config.badge.size} w-${config.badge.size} bg-primary-500`]:
            {},
        },

        '&.webeze-badge-primary': {
          '.webeze-button-badge-pulse': {
            [`@apply bg-${config.badge.colors.primary}`]: {},
          },

          '.webeze-button-badge-inner': {
            [`@apply bg-${config.badge.colors.primary}`]: {},
          },
        },
        '&.webeze-badge-info': {
          '.webeze-button-badge-pulse': {
            [`@apply bg-${config.badge.colors.info}`]: {},
          },

          '.webeze-button-badge-inner': {
            [`@apply bg-${config.badge.colors.info}`]: {},
          },
        },
        '&.webeze-badge-success': {
          '.webeze-button-badge-pulse': {
            [`@apply bg-${config.badge.colors.success}`]: {},
          },

          '.webeze-button-badge-inner': {
            [`@apply bg-${config.badge.colors.success}`]: {},
          },
        },
        '&.webeze-badge-warning': {
          '.webeze-button-badge-pulse': {
            [`@apply bg-${config.badge.colors.warning}`]: {},
          },

          '.webeze-button-badge-inner': {
            [`@apply bg-${config.badge.colors.warning}`]: {},
          },
        },
        '&.webeze-badge-danger': {
          '.webeze-button-badge-pulse': {
            [`@apply bg-${config.badge.colors.danger}`]: {},
          },

          '.webeze-button-badge-inner': {
            [`@apply bg-${config.badge.colors.danger}`]: {},
          },
        },
      },
      // #endregion

      // #region Loading
      '&.webeze-button-loading': {
        '@apply !text-transparent': {},
      },
      // #endregion

      // #region Sizes
      '&.webeze-button-sm': {
        [`@apply h-${config.size.sm.button.height} px-${config.size.sm.button.padding.x} py-${config.size.sm.button.padding.y} text-${config.size.sm.button.text}`]:
          {},

        '.webeze-button-icon': {
          [`@apply w-${config.size.sm.icon.size} h-${config.size.sm.icon.size}`]:
            {},
        },
      },
      '&.webeze-button-md': {
        [`@apply h-${config.size.md.button.height} px-${config.size.md.button.padding.x} py-${config.size.md.button.padding.y} text-${config.size.md.button.text}`]:
          {},

        '.webeze-button-icon': {
          [`@apply w-${config.size.md.icon.size} h-${config.size.md.icon.size}`]:
            {},
        },
      },
      '&.webeze-button-lg': {
        [`@apply h-${config.size.lg.button.height} px-${config.size.lg.button.padding.x} py-${config.size.lg.button.padding.y} text-${config.size.lg.button.text}`]:
          {},

        '.webeze-button-icon': {
          [`@apply w-${config.size.lg.icon.size} h-${config.size.lg.icon.size}`]:
            {},
        },
      },
      '&.webeze-button-xl': {
        [`@apply h-${config.size.xl.button.height} px-${config.size.xl.button.padding.x} py-${config.size.xl.button.padding.y} text-${config.size.xl.button.text}`]:
          {},

        '.webeze-button-icon': {
          [`@apply w-${config.size.xl.icon.size} h-${config.size.xl.icon.size}`]:
            {},
        },
      },
      // #endregion

      // #region Rounded
      '&.webeze-button-rounded-sm': {
        [`@apply rounded-${config.rounded.sm}`]: {},
      },
      '&.webeze-button-rounded-md': {
        [`@apply rounded-${config.rounded.md}`]: {},
      },
      '&.webeze-button-rounded-lg': {
        [`@apply rounded-${config.rounded.lg}`]: {},
      },
      '&.webeze-button-rounded-full': {
        [`@apply rounded-${config.rounded.full}`]: {},

        '.webeze-button-badge': {
          [`@apply flex absolute h-${config.badge.size} w-${config.badge.size} top-0 -end-1 -mt-0.5 me-2`]:
            {},
        },
      },
      // #endregion

      // #region Variants
      '&.webeze-button-solid': {
        //Solid:default
        '&.webeze-button-default': {
          //Text color
          [`@apply text-${config.variant.solid.default.text.light} dark:text-${config.variant.solid.default.text.dark}`]:
            {},
          //Bg main
          [`@apply bg-${config.variant.solid.default.background.light.base} dark:bg-${config.variant.solid.default.background.dark.base}`]:
            {},
          //Bg hover
          [`@apply hover:enabled:bg-${config.variant.solid.default.background.light.hover} dark:hover:enabled:bg-${config.variant.solid.default.background.dark.hover}`]:
            {},
          //Bg active
          [`@apply active:enabled:bg-${config.variant.solid.default.background.light.active} dark:active:enabled:bg-${config.variant.solid.default.background.dark.active}`]:
            {},
          //Bg focus
          [`@apply focus-visible:bg-${config.variant.solid.default.background.light.focus} dark:focus-visible:bg-${config.variant.solid.default.background.dark.focus}`]:
            {},
          //Border main
          [`@apply border border-${config.variant.solid.default.border.light.base} dark:border-${config.variant.solid.default.border.dark.base}`]:
            {},
          //Border hover
          [`@apply hover:enabled:border-${config.variant.solid.default.border.light.hover} dark:hover:enabled:border-${config.variant.solid.default.border.dark.hover}`]:
            {},
          //shadows
          '&.webeze-button-shadow': {
            [`@apply enabled:shadow-${config.variant.solid.default.shadow.size} enabled:shadow-${config.variant.solid.default.shadow.light} dark:enabled:shadow-${config.variant.solid.default.shadow.dark}`]:
              {},
          },
          '&.webeze-button-shadow-hover': {
            [`@apply hover:enabled:shadow-${config.variant.solid.default.shadow.size} hover:enabled:shadow-${config.variant.solid.default.shadow.light} dark:hover:enabled:shadow-${config.variant.solid.default.shadow.dark}`]:
              {},
          },
        },
        //Solid:default-contrast
        '&.webeze-button-default-contrast': {
          //Text color
          [`@apply text-${config.variant.solid.defaultContrast.text.light} dark:text-${config.variant.solid.defaultContrast.text.dark}`]:
            {},
          //Bg main
          [`@apply bg-${config.variant.solid.defaultContrast.background.light.base} dark:bg-${config.variant.solid.defaultContrast.background.dark.base}`]:
            {},
          //Bg hover
          [`@apply hover:enabled:bg-${config.variant.solid.defaultContrast.background.light.hover} dark:hover:enabled:bg-${config.variant.solid.defaultContrast.background.dark.hover}`]:
            {},
          //Bg active
          [`@apply active:enabled:bg-${config.variant.solid.defaultContrast.background.light.active} dark:active:enabled:bg-${config.variant.solid.defaultContrast.background.dark.active}`]:
            {},
          //Bg focus
          [`@apply focus-visible:bg-${config.variant.solid.defaultContrast.background.light.focus} dark:focus-visible:bg-${config.variant.solid.defaultContrast.background.dark.focus}`]:
            {},
          //Border main
          [`@apply border border-${config.variant.solid.defaultContrast.border.light.base} dark:border-${config.variant.solid.defaultContrast.border.dark.base}`]:
            {},
          //Border hover
          [`@apply hover:enabled:border-${config.variant.solid.defaultContrast.border.light.hover} dark:hover:enabled:border-${config.variant.solid.defaultContrast.border.dark.hover}`]:
            {},
          //shadows
          '&.webeze-button-shadow': {
            [`@apply enabled:shadow-${config.variant.solid.defaultContrast.shadow.size} enabled:shadow-${config.variant.solid.defaultContrast.shadow.light} dark:enabled:shadow-${config.variant.solid.defaultContrast.shadow.dark}`]:
              {},
          },
          '&.webeze-button-shadow-hover': {
            [`@apply hover:enabled:shadow-${config.variant.solid.defaultContrast.shadow.size} hover:enabled:shadow-${config.variant.solid.defaultContrast.shadow.light} dark:hover:enabled:shadow-${config.variant.solid.defaultContrast.shadow.dark}`]:
              {},
          },
        },
        //Solid:muted
        '&.webeze-button-muted': {
          //Text color
          [`@apply text-${config.variant.solid.muted.text.light} dark:text-${config.variant.solid.muted.text.dark}`]:
            {},
          //Bg main
          [`@apply bg-${config.variant.solid.muted.background.light.base} dark:bg-${config.variant.solid.muted.background.dark.base}`]:
            {},
          //Bg hover
          [`@apply hover:enabled:bg-${config.variant.solid.muted.background.light.hover} dark:hover:enabled:bg-${config.variant.solid.muted.background.dark.hover}`]:
            {},
          //Bg active
          [`@apply active:enabled:bg-${config.variant.solid.muted.background.light.active} dark:active:enabled:bg-${config.variant.solid.muted.background.dark.active}`]:
            {},
          //Bg focus
          [`@apply focus-visible:bg-${config.variant.solid.muted.background.light.focus} dark:focus-visible:bg-${config.variant.solid.muted.background.dark.focus}`]:
            {},
          //Border main
          [`@apply border border-${config.variant.solid.muted.border.light.base} dark:border-${config.variant.solid.muted.border.dark.base}`]:
            {},
          //Border hover
          [`@apply border-${config.variant.solid.muted.border.light.hover} dark:border-${config.variant.solid.muted.border.dark.hover}`]:
            {},
          //Shadows
          '&.webeze-button-shadow': {
            [`@apply enabled:shadow-${config.variant.solid.muted.shadow.size} enabled:shadow-${config.variant.solid.muted.shadow.light} dark:enabled:shadow-${config.variant.solid.muted.shadow.dark}`]:
              {},
          },
          '&.webeze-button-shadow-hover': {
            [`@apply hover:enabled:shadow-${config.variant.solid.muted.shadow.size} hover:enabled:shadow-${config.variant.solid.muted.shadow.light} dark:hover:enabled:shadow-${config.variant.solid.muted.shadow.dark}`]:
              {},
          },
        },
        //Solid:muted-contrast
        '&.webeze-button-muted-contrast': {
          //Text color
          [`@apply text-${config.variant.solid.mutedContrast.text.light} dark:text-${config.variant.solid.mutedContrast.text.dark}`]:
            {},
          //Bg main
          [`@apply bg-${config.variant.solid.mutedContrast.background.light.base} dark:bg-${config.variant.solid.mutedContrast.background.dark.base}`]:
            {},
          //Bg hover
          [`@apply hover:enabled:bg-${config.variant.solid.mutedContrast.background.light.hover} dark:hover:enabled:bg-${config.variant.solid.mutedContrast.background.dark.hover}`]:
            {},
          //Bg active
          [`@apply active:enabled:bg-${config.variant.solid.mutedContrast.background.light.active} dark:active:enabled:bg-${config.variant.solid.mutedContrast.background.dark.active}`]:
            {},
          //Bg focus
          [`@apply focus-visible:bg-${config.variant.solid.mutedContrast.background.light.focus} dark:focus-visible:bg-${config.variant.solid.mutedContrast.background.dark.focus}`]:
            {},
          //Border main
          [`@apply border border-${config.variant.solid.mutedContrast.border.light.base} dark:border-${config.variant.solid.mutedContrast.border.dark.base}`]:
            {},
          //Border hover
          [`@apply hover:enabled:border-${config.variant.solid.mutedContrast.border.light.hover} dark:hover:enabled:border-${config.variant.solid.mutedContrast.border.dark.hover}`]:
            {},
          //shadows
          '&.webeze-button-shadow': {
            [`@apply enabled:shadow-${config.variant.solid.mutedContrast.shadow.size} enabled:shadow-${config.variant.solid.mutedContrast.shadow.light} dark:enabled:shadow-${config.variant.solid.mutedContrast.shadow.dark}`]:
              {},
          },
          '&.webeze-button-shadow-hover': {
            [`@apply hover:enabled:shadow-${config.variant.solid.mutedContrast.shadow.size} hover:enabled:shadow-${config.variant.solid.mutedContrast.shadow.light} dark:hover:enabled:shadow-${config.variant.solid.mutedContrast.shadow.dark}`]:
              {},
          },
        },
        //Solid:light
        '&.webeze-button-light': {
          //Text color
          [`@apply text-${config.variant.solid.light.text.light} dark:text-${config.variant.solid.light.text.dark}`]:
            {},
          //Bg main
          [`@apply bg-${config.variant.solid.light.background.light.base} dark:bg-${config.variant.solid.light.background.dark.base}`]:
            {},
          //Bg hover
          [`@apply hover:enabled:bg-${config.variant.solid.light.background.light.hover} dark:hover:enabled:bg-${config.variant.solid.light.background.dark.hover}`]:
            {},
          //Bg active
          [`@apply active:enabled:bg-${config.variant.solid.light.background.light.active} dark:active:enabled:bg-${config.variant.solid.light.background.dark.active}`]:
            {},
          //Bg focus
          [`@apply focus-visible:bg-${config.variant.solid.light.background.light.focus} dark:focus-visible:bg-${config.variant.solid.light.background.dark.focus}`]:
            {},
          //Border main
          [`@apply border border-${config.variant.solid.light.border.light.base} dark:border-${config.variant.solid.light.border.dark.base}`]:
            {},
          //Border hover
          [`@apply border-${config.variant.solid.light.border.light.hover} dark:border-${config.variant.solid.light.border.dark.hover}`]:
            {},
          //Shadows
          '&.webeze-button-shadow': {
            [`@apply enabled:shadow-${config.variant.solid.light.shadow.size} enabled:shadow-${config.variant.solid.light.shadow.light} dark:enabled:shadow-${config.variant.solid.light.shadow.dark}`]:
              {},
          },
          '&.webeze-button-shadow-hover': {
            [`@apply hover:enabled:shadow-${config.variant.solid.light.shadow.size} hover:enabled:shadow-${config.variant.solid.light.shadow.light} dark:hover:enabled:shadow-${config.variant.solid.light.shadow.dark}`]:
              {},
          },
        },
        //Solid:dark
        '&.webeze-button-dark': {
          //Text color
          [`@apply text-${config.variant.solid.dark.text.light} dark:text-${config.variant.solid.dark.text.dark}`]:
            {},
          //Bg main
          [`@apply bg-${config.variant.solid.dark.background.light.base} dark:bg-${config.variant.solid.dark.background.dark.base}`]:
            {},
          //Bg hover
          [`@apply hover:enabled:bg-${config.variant.solid.dark.background.light.hover} dark:hover:enabled:bg-${config.variant.solid.dark.background.dark.hover}`]:
            {},
          //Bg active
          [`@apply active:enabled:bg-${config.variant.solid.dark.background.light.active} dark:active:enabled:bg-${config.variant.solid.dark.background.dark.active}`]:
            {},
          //Bg focus
          [`@apply focus-visible:bg-${config.variant.solid.dark.background.light.focus} dark:focus-visible:bg-${config.variant.solid.dark.background.dark.focus}`]:
            {},
          //Border main
          [`@apply border border-${config.variant.solid.dark.border.light.base} dark:border-${config.variant.solid.dark.border.dark.base}`]:
            {},
          //Border hover
          [`@apply border-${config.variant.solid.dark.border.light.hover} dark:border-${config.variant.solid.dark.border.dark.hover}`]:
            {},
          //Shadows
          '&.webeze-button-shadow': {
            [`@apply enabled:shadow-${config.variant.solid.dark.shadow.size} enabled:shadow-${config.variant.solid.dark.shadow.dark} dark:enabled:shadow-${config.variant.solid.dark.shadow.dark}`]:
              {},
          },
          '&.webeze-button-shadow-hover': {
            [`@apply hover:enabled:shadow-${config.variant.solid.dark.shadow.size} hover:enabled:shadow-${config.variant.solid.dark.shadow.dark} dark:hover:enabled:shadow-${config.variant.solid.dark.shadow.dark}`]:
              {},
          },
        },
        //Solid:black
        '&.webeze-button-black': {
          //Text color
          [`@apply text-${config.variant.solid.black.text.light} dark:text-${config.variant.solid.black.text.dark}`]:
            {},
          //Bg main
          [`@apply bg-${config.variant.solid.black.background.light.base} dark:bg-${config.variant.solid.black.background.dark.base}`]:
            {},
          //Bg hover
          [`@apply hover:enabled:bg-${config.variant.solid.black.background.light.hover} dark:hover:enabled:bg-${config.variant.solid.black.background.dark.hover}`]:
            {},
          //Bg active
          [`@apply active:enabled:bg-${config.variant.solid.black.background.light.active} dark:active:enabled:bg-${config.variant.solid.black.background.dark.active}`]:
            {},
          //Bg focus
          [`@apply focus-visible:bg-${config.variant.solid.black.background.light.focus} dark:focus-visible:bg-${config.variant.solid.black.background.dark.focus}`]:
            {},
          //Border main
          [`@apply border border-${config.variant.solid.black.border.light.base} dark:border-${config.variant.solid.black.border.dark.base}`]:
            {},
          //Border hover
          [`@apply border-${config.variant.solid.black.border.light.hover} dark:border-${config.variant.solid.black.border.dark.hover}`]:
            {},
          //Shadows
          '&.webeze-button-shadow': {
            [`@apply enabled:shadow-${config.variant.solid.black.shadow.size} enabled:shadow-${config.variant.solid.black.shadow.dark} dark:enabled:shadow-${config.variant.solid.black.shadow.dark}`]:
              {},
          },
          '&.webeze-button-shadow-hover': {
            [`@apply hover:enabled:shadow-${config.variant.solid.black.shadow.size} hover:enabled:shadow-${config.variant.solid.black.shadow.dark} dark:hover:enabled:shadow-${config.variant.solid.black.shadow.dark}`]:
              {},
          },
        },
        //Solid:primary
        '&.webeze-button-primary': {
          //Text color
          [`@apply text-${config.variant.solid.primary.text.light} dark:text-${config.variant.solid.primary.text.dark}`]:
            {},
          //Bg main
          [`@apply bg-${config.variant.solid.primary.background.light.base} dark:bg-${config.variant.solid.primary.background.dark.base}`]:
            {},
          //Bg hover
          [`@apply hover:enabled:bg-${config.variant.solid.primary.background.light.hover} dark:hover:enabled:bg-${config.variant.solid.primary.background.dark.hover}`]:
            {},
          //Bg active
          [`@apply active:enabled:bg-${config.variant.solid.primary.background.light.active} dark:active:enabled:bg-${config.variant.solid.primary.background.dark.active}`]:
            {},
          //Bg focus
          [`@apply focus-visible:bg-${config.variant.solid.primary.background.light.focus} dark:focus-visible:bg-${config.variant.solid.primary.background.dark.focus}`]:
            {},
          //Shadows
          '&.webeze-button-shadow': {
            [`@apply enabled:shadow-${config.variant.solid.primary.shadow.size} enabled:shadow-${config.variant.solid.primary.shadow.light} dark:enabled:shadow-${config.variant.solid.primary.shadow.dark}`]:
              {},
          },
          '&.webeze-button-shadow-hover': {
            [`@apply hover:enabled:shadow-${config.variant.solid.primary.shadow.size} hover:enabled:shadow-${config.variant.solid.primary.shadow.light} dark:hover:enabled:shadow-${config.variant.solid.primary.shadow.dark}`]:
              {},
          },
        },
        //Solid:info
        '&.webeze-button-info': {
          //Text color
          [`@apply text-${config.variant.solid.info.text.light} text-${config.variant.solid.info.text.dark}`]:
            {},
          //Bg main
          [`@apply bg-${config.variant.solid.info.background.light.base} dark:bg-${config.variant.solid.info.background.dark.base}`]:
            {},
          //Bg hover
          [`@apply hover:enabled:bg-${config.variant.solid.info.background.light.hover} dark:hover:enabled:bg-${config.variant.solid.info.background.dark.hover}`]:
            {},
          //Bg active
          [`@apply active:enabled:bg-${config.variant.solid.info.background.light.active} dark:active:enabled:bg-${config.variant.solid.info.background.dark.active}`]:
            {},
          //Bg focus
          [`@apply focus-visible:bg-${config.variant.solid.info.background.light.focus} dark:focus-visible:bg-${config.variant.solid.info.background.dark.focus}`]:
            {},
          //Shadows
          '&.webeze-button-shadow': {
            [`@apply enabled:shadow-${config.variant.solid.info.shadow.size} enabled:shadow-${config.variant.solid.info.shadow.light} dark:enabled:shadow-${config.variant.solid.info.shadow.dark}`]:
              {},
          },
          '&.webeze-button-shadow-hover': {
            [`@apply hover:enabled:shadow-${config.variant.solid.info.shadow.size} hover:enabled:shadow-${config.variant.solid.info.shadow.light} dark:hover:enabled:shadow-${config.variant.solid.info.shadow.dark}`]:
              {},
          },
        },
        //Solid:success
        '&.webeze-button-success': {
          //Text color
          [`@apply text-${config.variant.solid.success.text.light} text-${config.variant.solid.success.text.dark}`]:
            {},
          //Bg main
          [`@apply bg-${config.variant.solid.success.background.light.base} dark:bg-${config.variant.solid.success.background.dark.base}`]:
            {},
          //Bg hover
          [`@apply hover:enabled:bg-${config.variant.solid.success.background.light.hover} dark:hover:enabled:bg-${config.variant.solid.success.background.dark.hover}`]:
            {},
          //Bg active
          [`@apply active:enabled:bg-${config.variant.solid.success.background.light.active} dark:active:enabled:bg-${config.variant.solid.success.background.dark.active}`]:
            {},
          //Bg focus
          [`@apply focus-visible:bg-${config.variant.solid.success.background.light.focus} dark:focus-visible:bg-${config.variant.solid.success.background.dark.focus}`]:
            {},
          //Shadows
          '&.webeze-button-shadow': {
            [`@apply enabled:shadow-${config.variant.solid.success.shadow.size} enabled:shadow-${config.variant.solid.success.shadow.light} dark:enabled:shadow-${config.variant.solid.success.shadow.dark}`]:
              {},
          },
          '&.webeze-button-shadow-hover': {
            [`@apply hover:enabled:shadow-${config.variant.solid.success.shadow.size} hover:enabled:shadow-${config.variant.solid.success.shadow.light} dark:hover:enabled:shadow-${config.variant.solid.success.shadow.dark}`]:
              {},
          },
        },
        //Solid:warning
        '&.webeze-button-warning': {
          //Text color
          [`@apply text-${config.variant.solid.warning.text.light} text-${config.variant.solid.warning.text.dark}`]:
            {},
          //Bg main
          [`@apply bg-${config.variant.solid.warning.background.light.base} dark:bg-${config.variant.solid.warning.background.dark.base}`]:
            {},
          //Bg hover
          [`@apply hover:enabled:bg-${config.variant.solid.warning.background.light.hover} dark:hover:enabled:bg-${config.variant.solid.warning.background.dark.hover}`]:
            {},
          //Bg active
          [`@apply active:enabled:bg-${config.variant.solid.warning.background.light.active} dark:active:enabled:bg-${config.variant.solid.warning.background.dark.active}`]:
            {},
          //Bg focus
          [`@apply focus-visible:bg-${config.variant.solid.warning.background.light.focus} dark:focus-visible:bg-${config.variant.solid.warning.background.dark.focus}`]:
            {},
          //Shadows
          '&.webeze-button-shadow': {
            [`@apply enabled:shadow-${config.variant.solid.warning.shadow.size} enabled:shadow-${config.variant.solid.warning.shadow.light} dark:enabled:shadow-${config.variant.solid.warning.shadow.dark}`]:
              {},
          },
          '&.webeze-button-shadow-hover': {
            [`@apply hover:enabled:shadow-${config.variant.solid.warning.shadow.size} hover:enabled:shadow-${config.variant.solid.warning.shadow.light} dark:hover:enabled:shadow-${config.variant.solid.warning.shadow.dark}`]:
              {},
          },
        },
        //Solid:danger
        '&.webeze-button-danger': {
          //Text color
          [`@apply text-${config.variant.solid.danger.text.light} text-${config.variant.solid.danger.text.dark}`]:
            {},
          //Bg main
          [`@apply bg-${config.variant.solid.danger.background.light.base} dark:bg-${config.variant.solid.danger.background.dark.base}`]:
            {},
          //Bg hover
          [`@apply hover:enabled:bg-${config.variant.solid.danger.background.light.hover} dark:hover:enabled:bg-${config.variant.solid.danger.background.dark.hover}`]:
            {},
          //Bg active
          [`@apply active:enabled:bg-${config.variant.solid.danger.background.light.active} dark:active:enabled:bg-${config.variant.solid.danger.background.dark.active}`]:
            {},
          //Bg focus
          [`@apply focus-visible:bg-${config.variant.solid.danger.background.light.focus} dark:focus-visible:bg-${config.variant.solid.danger.background.dark.focus}`]:
            {},
          //Shadows
          '&.webeze-button-shadow': {
            [`@apply enabled:shadow-${config.variant.solid.danger.shadow.size} enabled:shadow-${config.variant.solid.danger.shadow.light} dark:enabled:shadow-${config.variant.solid.danger.shadow.dark}`]:
              {},
          },
          '&.webeze-button-shadow-hover': {
            [`@apply hover:enabled:shadow-${config.variant.solid.danger.shadow.size} hover:enabled:shadow-${config.variant.solid.danger.shadow.light} dark:hover:enabled:shadow-${config.variant.solid.danger.shadow.dark}`]:
              {},
          },
        },
      },
      '&.webeze-button-pastel': {
        //Pastel:default
        '&.webeze-button-default, &.webeze-button-default-contrast': {
          //Text color
          [`@apply text-${config.variant.pastel.default.text.light} dark:text-${config.variant.pastel.default.text.dark}`]:
            {},
          //Bg main
          [`@apply bg-${config.variant.pastel.default.background.light.base} dark:bg-${config.variant.pastel.default.background.dark.base}`]:
            {},
          //Bg hover
          [`@apply hover:enabled:bg-${config.variant.pastel.default.background.light.hover} dark:hover:enabled:bg-${config.variant.pastel.default.background.dark.hover}`]:
            {},
          //Bg active
          [`@apply active:enabled:bg-${config.variant.pastel.default.background.light.active} dark:active:enabled:bg-${config.variant.pastel.default.background.dark.active}`]:
            {},
          //Bg focus
          [`@apply focus-visible:bg-${config.variant.pastel.default.background.light.focus} dark:focus-visible:bg-${config.variant.pastel.default.background.dark.focus}`]:
            {},
        },
        //Pastel:muted
        '&.webeze-button-muted, &.webeze-button-muted-contrast': {
          //Text color
          [`@apply text-${config.variant.pastel.muted.text.light} dark:text-${config.variant.pastel.muted.text.dark}`]:
            {},
          //Bg main
          [`@apply bg-${config.variant.pastel.muted.background.light.base} dark:bg-${config.variant.pastel.muted.background.dark.base}`]:
            {},
          //Bg hover
          [`@apply hover:enabled:bg-${config.variant.pastel.muted.background.light.hover} dark:hover:enabled:bg-${config.variant.pastel.muted.background.dark.hover}`]:
            {},
          //Bg active
          [`@apply active:enabled:bg-${config.variant.pastel.muted.background.light.active} dark:active:enabled:bg-${config.variant.pastel.muted.background.dark.active}`]:
            {},
          //Bg focus
          [`@apply focus-visible:bg-${config.variant.pastel.muted.background.light.focus} dark:focus-visible:bg-${config.variant.pastel.muted.background.dark.focus}`]:
            {},
        },
        //Pastel:light
        '&.webeze-button-light': {
          //Text color
          [`@apply text-${config.variant.pastel.light.text.light} dark:text-${config.variant.pastel.light.text.dark}`]:
            {},
          //Bg main
          [`@apply bg-${config.variant.pastel.light.background.light.base} dark:bg-${config.variant.pastel.light.background.dark.base}`]:
            {},
          //Bg hover
          [`@apply hover:enabled:bg-${config.variant.pastel.light.background.light.hover} dark:hover:enabled:bg-${config.variant.pastel.light.background.dark.hover}`]:
            {},
          //Bg active
          [`@apply active:enabled:bg-${config.variant.pastel.light.background.light.active} dark:active:enabled:bg-${config.variant.pastel.light.background.dark.active}`]:
            {},
          //Bg focus
          [`@apply focus-visible:bg-${config.variant.pastel.light.background.light.focus} dark:focus-visible:bg-${config.variant.pastel.light.background.dark.focus}`]:
            {},
        },
        //Pastel:dark
        '&.webeze-button-dark': {
          //Text color
          [`@apply text-${config.variant.pastel.dark.text.light} dark:text-${config.variant.pastel.dark.text.dark}`]:
            {},
          //Bg main
          [`@apply bg-${config.variant.pastel.dark.background.light.base} dark:bg-${config.variant.pastel.dark.background.dark.base}`]:
            {},
          //Bg hover
          [`@apply hover:enabled:bg-${config.variant.pastel.dark.background.light.hover} dark:hover:enabled:bg-${config.variant.pastel.dark.background.dark.hover}`]:
            {},
          //Bg active
          [`@apply active:enabled:bg-${config.variant.pastel.dark.background.light.active} dark:active:enabled:bg-${config.variant.pastel.dark.background.dark.active}`]:
            {},
          //Bg focus
          [`@apply focus-visible:bg-${config.variant.pastel.dark.background.light.focus} dark:focus-visible:bg-${config.variant.pastel.dark.background.dark.focus}`]:
            {},
        },
        //Pastel:black
        '&.webeze-button-black': {
          //Text color
          [`@apply text-${config.variant.pastel.black.text.light} dark:text-${config.variant.pastel.black.text.dark}`]:
            {},
          //Bg main
          [`@apply bg-${config.variant.pastel.black.background.light.base} dark:bg-${config.variant.pastel.black.background.dark.base}`]:
            {},
          //Bg hover
          [`@apply hover:enabled:bg-${config.variant.pastel.black.background.light.hover} dark:hover:enabled:bg-${config.variant.pastel.black.background.dark.hover}`]:
            {},
          //Bg active
          [`@apply active:enabled:bg-${config.variant.pastel.black.background.light.active} dark:active:enabled:bg-${config.variant.pastel.black.background.dark.active}`]:
            {},
          //Bg focus
          [`@apply focus-visible:bg-${config.variant.pastel.black.background.light.focus} dark:focus-visible:bg-${config.variant.pastel.black.background.dark.focus}`]:
            {},
        },
        //Pastel:primary
        '&.webeze-button-primary': {
          //Text color
          [`@apply text-${config.variant.pastel.primary.text.light} dark:text-${config.variant.pastel.primary.text.dark}`]:
            {},
          //Bg main
          [`@apply bg-${config.variant.pastel.primary.background.light.base} dark:bg-${config.variant.pastel.primary.background.dark.base}`]:
            {},
          //Bg hover
          [`@apply hover:enabled:bg-${config.variant.pastel.primary.background.light.hover} dark:hover:enabled:bg-${config.variant.pastel.primary.background.dark.hover}`]:
            {},
          //Bg active
          [`@apply active:enabled:bg-${config.variant.pastel.primary.background.light.active} dark:active:enabled:bg-${config.variant.pastel.primary.background.dark.active}`]:
            {},
          //Bg focus
          [`@apply focus-visible:bg-${config.variant.pastel.primary.background.light.focus} dark:focus-visible:bg-${config.variant.pastel.primary.background.dark.focus}`]:
            {},
        },
        //Pastel:info
        '&.webeze-button-info': {
          //Text color
          [`@apply text-${config.variant.pastel.info.text.light} dark:text-${config.variant.pastel.info.text.dark}`]:
            {},
          //Bg main
          [`@apply bg-${config.variant.pastel.info.background.light.base} dark:bg-${config.variant.pastel.info.background.dark.base}`]:
            {},
          //Bg hover
          [`@apply hover:enabled:bg-${config.variant.pastel.info.background.light.hover} dark:hover:enabled:bg-${config.variant.pastel.info.background.dark.hover}`]:
            {},
          //Bg active
          [`@apply active:enabled:bg-${config.variant.pastel.info.background.light.active} dark:active:enabled:bg-${config.variant.pastel.info.background.dark.active}`]:
            {},
          //Bg focus
          [`@apply focus-visible:bg-${config.variant.pastel.info.background.light.focus} dark:focus-visible:bg-${config.variant.pastel.info.background.dark.focus}`]:
            {},
        },
        //Pastel:success
        '&.webeze-button-success': {
          //Text color
          [`@apply text-${config.variant.pastel.success.text.light} dark:text-${config.variant.pastel.success.text.dark}`]:
            {},
          //Bg main
          [`@apply bg-${config.variant.pastel.success.background.light.base} dark:bg-${config.variant.pastel.success.background.dark.base}`]:
            {},
          //Bg hover
          [`@apply hover:enabled:bg-${config.variant.pastel.success.background.light.hover} dark:hover:enabled:bg-${config.variant.pastel.success.background.dark.hover}`]:
            {},
          //Bg active
          [`@apply active:enabled:bg-${config.variant.pastel.success.background.light.active} dark:active:enabled:bg-${config.variant.pastel.success.background.dark.active}`]:
            {},
          //Bg focus
          [`@apply focus-visible:bg-${config.variant.pastel.success.background.light.focus} dark:focus-visible:bg-${config.variant.pastel.success.background.dark.focus}`]:
            {},
        },
        //Pastel:warning
        '&.webeze-button-warning': {
          //Text color
          [`@apply text-${config.variant.pastel.warning.text.light} dark:text-${config.variant.pastel.warning.text.dark}`]:
            {},
          //Bg main
          [`@apply bg-${config.variant.pastel.warning.background.light.base} dark:bg-${config.variant.pastel.warning.background.dark.base}`]:
            {},
          //Bg hover
          [`@apply hover:enabled:bg-${config.variant.pastel.warning.background.light.hover} dark:hover:enabled:bg-${config.variant.pastel.warning.background.dark.hover}`]:
            {},
          //Bg active
          [`@apply active:enabled:bg-${config.variant.pastel.warning.background.light.active} dark:active:enabled:bg-${config.variant.pastel.warning.background.dark.active}`]:
            {},
          //Bg focus
          [`@apply focus-visible:bg-${config.variant.pastel.warning.background.light.focus} dark:focus-visible:bg-${config.variant.pastel.warning.background.dark.focus}`]:
            {},
        },
        //Pastel:danger
        '&.webeze-button-danger': {
          //Text color
          [`@apply text-${config.variant.pastel.danger.text.light} dark:text-${config.variant.pastel.danger.text.dark}`]:
            {},
          //Bg main
          [`@apply bg-${config.variant.pastel.danger.background.light.base} dark:bg-${config.variant.pastel.danger.background.dark.base}`]:
            {},
          //Bg hover
          [`@apply hover:enabled:bg-${config.variant.pastel.danger.background.light.hover} dark:hover:enabled:bg-${config.variant.pastel.danger.background.dark.hover}`]:
            {},
          //Bg active
          [`@apply active:enabled:bg-${config.variant.pastel.danger.background.light.active} dark:active:enabled:bg-${config.variant.pastel.danger.background.dark.active}`]:
            {},
          //Bg focus
          [`@apply focus-visible:bg-${config.variant.pastel.danger.background.light.focus} dark:focus-visible:bg-${config.variant.pastel.danger.background.dark.focus}`]:
            {},
        },
      },
      //Variant:outline
      '&.webeze-button-outline': {
        //Outline:default
        '&.webeze-button-default, &.webeze-button-default-contrast': {
          //Text color
          [`@apply text-${config.variant.outline.default.text.light.base} dark:text-${config.variant.outline.default.text.dark.base}`]:
            {},
          //Text hover
          [`@apply hover:enabled:text-${config.variant.outline.default.text.light.hover} dark:hover:enabled:text-${config.variant.outline.default.text.dark.hover}`]:
            {},
          //Text focus
          [`@apply focus-visible:text-${config.variant.outline.default.text.light.active} dark:focus-visible:text-${config.variant.outline.default.text.dark.active}`]:
            {},
          //Text active
          [`@apply active:enabled:text-${config.variant.outline.default.text.light.focus} dark:active:enabled:text-${config.variant.outline.default.text.dark.focus}`]:
            {},
          //Bg main
          [`@apply bg-${config.variant.outline.default.background.light.base} dark:bg-${config.variant.outline.default.background.dark.base}`]:
            {},
          //Bg hover
          [`@apply hover:enabled:bg-${config.variant.outline.default.background.light.hover} dark:hover:enabled:bg-${config.variant.outline.default.background.dark.hover}`]:
            {},
          //Bg active
          [`@apply active:enabled:bg-${config.variant.outline.default.background.light.active} dark:active:enabled:bg-${config.variant.outline.default.background.dark.active}`]:
            {},
          //Bg focus
          [`@apply focus-visible:bg-${config.variant.outline.default.background.light.focus} dark:focus-visible:bg-${config.variant.outline.default.background.dark.focus}`]:
            {},
          //Border main
          [`@apply border-2 border-${config.variant.outline.default.border.light} dark:border-${config.variant.outline.default.border.dark}`]:
            {},
          //Shadows
          '&.webeze-button-shadow-hover': {
            [`@apply hover:enabled:shadow-${config.variant.outline.default.shadow.size} hover:enabled:shadow-${config.variant.outline.default.shadow.light} dark:hover:enabled:shadow-${config.variant.outline.default.shadow.dark}`]:
              {},
          },
        },
        //Outline:light
        '&.webeze-button-light': {
          //Text color
          [`@apply text-${config.variant.outline.light.text.light.base} dark:text-${config.variant.outline.light.text.dark.base}`]:
            {},
          //Text hover
          [`@apply hover:enabled:text-${config.variant.outline.light.text.light.hover} dark:hover:enabled:text-${config.variant.outline.light.text.dark.hover}`]:
            {},
          //Text focus
          [`@apply focus-visible:text-${config.variant.outline.light.text.light.active} dark:focus-visible:text-${config.variant.outline.light.text.dark.active}`]:
            {},
          //Text active
          [`@apply active:enabled:text-${config.variant.outline.light.text.light.focus} dark:active:enabled:text-${config.variant.outline.light.text.dark.focus}`]:
            {},
          //Bg main
          [`@apply bg-${config.variant.outline.light.background.light.base} dark:bg-${config.variant.outline.light.background.dark.base}`]:
            {},
          //Bg hover
          [`@apply hover:enabled:bg-${config.variant.outline.light.background.light.hover} dark:hover:enabled:bg-${config.variant.outline.light.background.dark.hover}`]:
            {},
          //Bg active
          [`@apply active:enabled:bg-${config.variant.outline.light.background.light.active} dark:active:enabled:bg-${config.variant.outline.light.background.dark.active}`]:
            {},
          //Bg focus
          [`@apply focus-visible:bg-${config.variant.outline.light.background.light.focus} dark:focus-visible:bg-${config.variant.outline.light.background.dark.focus}`]:
            {},
          //Border main
          [`@apply border-2 border-${config.variant.outline.light.border.light} dark:border-${config.variant.outline.light.border.dark}`]:
            {},
          //Shadows
          '&.webeze-button-shadow-hover': {
            [`@apply hover:enabled:shadow-${config.variant.outline.light.shadow.size} hover:enabled:shadow-${config.variant.outline.light.shadow.light} dark:hover:enabled:shadow-${config.variant.outline.light.shadow.dark}`]:
              {},
          },
        },
        //Outline:muted
        '&.webeze-button-muted, &.webeze-button-muted-contrast': {
          //Text color
          [`@apply text-${config.variant.outline.muted.text.light.base} dark:text-${config.variant.outline.muted.text.dark.base}`]:
            {},
          //Text hover
          [`@apply hover:enabled:text-${config.variant.outline.muted.text.light.hover} dark:hover:enabled:text-${config.variant.outline.muted.text.dark.hover}`]:
            {},
          //Text focus
          [`@apply focus-visible:text-${config.variant.outline.muted.text.light.active} dark:focus-visible:text-${config.variant.outline.muted.text.dark.active}`]:
            {},
          //Text active
          [`@apply active:enabled:text-${config.variant.outline.muted.text.light.focus} dark:active:enabled:text-${config.variant.outline.muted.text.dark.focus}`]:
            {},
          //Bg main
          [`@apply bg-${config.variant.outline.muted.background.light.base} dark:bg-${config.variant.outline.muted.background.dark.base}`]:
            {},
          //Bg hover
          [`@apply hover:enabled:bg-${config.variant.outline.muted.background.light.hover} dark:hover:enabled:bg-${config.variant.outline.muted.background.dark.hover}`]:
            {},
          //Bg active
          [`@apply active:enabled:bg-${config.variant.outline.muted.background.light.active} dark:active:enabled:bg-${config.variant.outline.muted.background.dark.active}`]:
            {},
          //Bg focus
          [`@apply focus-visible:bg-${config.variant.outline.muted.background.light.focus} dark:focus-visible:bg-${config.variant.outline.muted.background.dark.focus}`]:
            {},
          //Border main
          [`@apply border-2 border-${config.variant.outline.muted.border.light} dark:border-${config.variant.outline.muted.border.dark}`]:
            {},
          //Shadows
          '&.webeze-button-shadow-hover': {
            [`@apply hover:enabled:shadow-${config.variant.outline.muted.shadow.size} hover:enabled:shadow-${config.variant.outline.muted.shadow.light} dark:hover:enabled:shadow-${config.variant.outline.muted.shadow.dark}`]:
              {},
          },
        },
        //Outline:dark
        '&.webeze-button-dark': {
          //Text color
          [`@apply text-${config.variant.outline.dark.text.light.base} dark:text-${config.variant.outline.dark.text.dark.base}`]:
            {},
          //Text hover
          [`@apply hover:enabled:text-${config.variant.outline.dark.text.light.hover} dark:hover:enabled:text-${config.variant.outline.dark.text.dark.hover}`]:
            {},
          //Text focus
          [`@apply focus-visible:text-${config.variant.outline.dark.text.light.active} dark:focus-visible:text-${config.variant.outline.dark.text.dark.active}`]:
            {},
          //Text active
          [`@apply active:enabled:text-${config.variant.outline.dark.text.light.focus} dark:active:enabled:text-${config.variant.outline.dark.text.dark.focus}`]:
            {},
          //Bg main
          [`@apply bg-${config.variant.outline.dark.background.light.base} dark:bg-${config.variant.outline.dark.background.dark.base}`]:
            {},
          //Bg hover
          [`@apply hover:enabled:bg-${config.variant.outline.dark.background.light.hover} dark:hover:enabled:bg-${config.variant.outline.dark.background.dark.hover}`]:
            {},
          //Bg active
          [`@apply active:enabled:bg-${config.variant.outline.dark.background.light.active} dark:active:enabled:bg-${config.variant.outline.dark.background.dark.active}`]:
            {},
          //Bg focus
          [`@apply focus-visible:bg-${config.variant.outline.dark.background.light.focus} dark:focus-visible:bg-${config.variant.outline.dark.background.dark.focus}`]:
            {},
          //Border main
          [`@apply border-2 border-${config.variant.outline.dark.border.light} dark:border-${config.variant.outline.dark.border.dark}`]:
            {},
          //Shadows
          '&.webeze-button-shadow-hover': {
            [`@apply hover:enabled:shadow-${config.variant.outline.dark.shadow.size} hover:enabled:shadow-${config.variant.outline.dark.shadow.light} dark:hover:enabled:shadow-${config.variant.outline.dark.shadow.dark}`]:
              {},
          },
        },
        //Outline:black
        '&.webeze-button-black': {
          //Text color
          [`@apply text-${config.variant.outline.black.text.light.base} dark:text-${config.variant.outline.black.text.dark.base}`]:
            {},
          //Text hover
          [`@apply hover:enabled:text-${config.variant.outline.black.text.light.hover} dark:hover:enabled:text-${config.variant.outline.black.text.dark.hover}`]:
            {},
          //Text focus
          [`@apply focus-visible:text-${config.variant.outline.black.text.light.active} dark:focus-visible:text-${config.variant.outline.black.text.dark.active}`]:
            {},
          //Text active
          [`@apply active:enabled:text-${config.variant.outline.black.text.light.focus} dark:active:enabled:text-${config.variant.outline.black.text.dark.focus}`]:
            {},
          //Bg main
          [`@apply bg-${config.variant.outline.black.background.light.base} dark:bg-${config.variant.outline.black.background.dark.base}`]:
            {},
          //Bg hover
          [`@apply hover:enabled:bg-${config.variant.outline.black.background.light.hover} dark:hover:enabled:bg-${config.variant.outline.black.background.dark.hover}`]:
            {},
          //Bg active
          [`@apply active:enabled:bg-${config.variant.outline.black.background.light.active} dark:active:enabled:bg-${config.variant.outline.black.background.dark.active}`]:
            {},
          //Bg focus
          [`@apply focus-visible:bg-${config.variant.outline.black.background.light.focus} dark:focus-visible:bg-${config.variant.outline.black.background.dark.focus}`]:
            {},
          //Border main
          [`@apply border-2 border-${config.variant.outline.black.border.light} dark:border-${config.variant.outline.black.border.dark}`]:
            {},
          //Shadows
          '&.webeze-button-shadow-hover': {
            [`@apply hover:enabled:shadow-${config.variant.outline.black.shadow.size} hover:enabled:shadow-${config.variant.outline.black.shadow.light} dark:hover:enabled:shadow-${config.variant.outline.black.shadow.dark}`]:
              {},
          },
        },
        //Outline:primary
        '&.webeze-button-primary': {
          //Text color
          [`@apply text-${config.variant.outline.primary.text.light.base} dark:text-${config.variant.outline.primary.text.dark.base}`]:
            {},
          //Text hover
          [`@apply hover:enabled:text-${config.variant.outline.primary.text.light.hover} dark:hover:enabled:text-${config.variant.outline.primary.text.dark.hover}`]:
            {},
          //Text focus
          [`@apply focus-visible:text-${config.variant.outline.primary.text.light.active} dark:focus-visible:text-${config.variant.outline.primary.text.dark.active}`]:
            {},
          //Text active
          [`@apply active:enabled:text-${config.variant.outline.primary.text.light.focus} dark:active:enabled:text-${config.variant.outline.primary.text.dark.focus}`]:
            {},
          //Bg main
          [`@apply bg-${config.variant.outline.primary.background.light.base} dark:bg-${config.variant.outline.primary.background.dark.base}`]:
            {},
          //Bg hover
          [`@apply hover:enabled:bg-${config.variant.outline.primary.background.light.hover} dark:hover:enabled:bg-${config.variant.outline.primary.background.dark.hover}`]:
            {},
          //Bg active
          [`@apply active:enabled:bg-${config.variant.outline.primary.background.light.active} dark:active:enabled:bg-${config.variant.outline.primary.background.dark.active}`]:
            {},
          //Bg focus
          [`@apply focus-visible:bg-${config.variant.outline.primary.background.light.focus} dark:focus-visible:bg-${config.variant.outline.primary.background.dark.focus}`]:
            {},
          //Border main
          [`@apply border-2 border-${config.variant.outline.primary.border.light} dark:border-${config.variant.outline.primary.border.dark}`]:
            {},
          //Shadows
          '&.webeze-button-shadow-hover': {
            [`@apply hover:enabled:shadow-${config.variant.outline.primary.shadow.size} hover:enabled:shadow-${config.variant.outline.primary.shadow.light} dark:hover:enabled:shadow-${config.variant.outline.primary.shadow.dark}`]:
              {},
          },
        },
        //Outline:info
        '&.webeze-button-info': {
          //Text color
          [`@apply text-${config.variant.outline.info.text.light.base} dark:text-${config.variant.outline.info.text.dark.base}`]:
            {},
          //Text hover
          [`@apply hover:enabled:text-${config.variant.outline.info.text.light.hover} dark:hover:enabled:text-${config.variant.outline.info.text.dark.hover}`]:
            {},
          //Text focus
          [`@apply focus-visible:text-${config.variant.outline.info.text.light.active} dark:focus-visible:text-${config.variant.outline.info.text.dark.active}`]:
            {},
          //Text active
          [`@apply active:enabled:text-${config.variant.outline.info.text.light.focus} dark:active:enabled:text-${config.variant.outline.info.text.dark.focus}`]:
            {},
          //Bg main
          [`@apply bg-${config.variant.outline.info.background.light.base} dark:bg-${config.variant.outline.info.background.dark.base}`]:
            {},
          //Bg hover
          [`@apply hover:enabled:bg-${config.variant.outline.info.background.light.hover} dark:hover:enabled:bg-${config.variant.outline.info.background.dark.hover}`]:
            {},
          //Bg active
          [`@apply active:enabled:bg-${config.variant.outline.info.background.light.active} dark:active:enabled:bg-${config.variant.outline.info.background.dark.active}`]:
            {},
          //Bg focus
          [`@apply focus-visible:bg-${config.variant.outline.info.background.light.focus} dark:focus-visible:bg-${config.variant.outline.info.background.dark.focus}`]:
            {},
          //Border main
          [`@apply border-2 border-${config.variant.outline.info.border.light} dark:border-${config.variant.outline.info.border.dark}`]:
            {},
          //Shadows
          '&.webeze-button-shadow-hover': {
            [`@apply hover:enabled:shadow-${config.variant.outline.info.shadow.size} hover:enabled:shadow-${config.variant.outline.info.shadow.light} dark:hover:enabled:shadow-${config.variant.outline.info.shadow.dark}`]:
              {},
          },
        },
        //Outline:success
        '&.webeze-button-success': {
          //Text color
          [`@apply text-${config.variant.outline.success.text.light.base} dark:text-${config.variant.outline.success.text.dark.base}`]:
            {},
          //Text hover
          [`@apply hover:enabled:text-${config.variant.outline.success.text.light.hover} dark:hover:enabled:text-${config.variant.outline.success.text.dark.hover}`]:
            {},
          //Text focus
          [`@apply focus-visible:text-${config.variant.outline.success.text.light.active} dark:focus-visible:text-${config.variant.outline.success.text.dark.active}`]:
            {},
          //Text active
          [`@apply active:enabled:text-${config.variant.outline.success.text.light.focus} dark:active:enabled:text-${config.variant.outline.success.text.dark.focus}`]:
            {},
          //Bg main
          [`@apply bg-${config.variant.outline.success.background.light.base} dark:bg-${config.variant.outline.success.background.dark.base}`]:
            {},
          //Bg hover
          [`@apply hover:enabled:bg-${config.variant.outline.success.background.light.hover} dark:hover:enabled:bg-${config.variant.outline.success.background.dark.hover}`]:
            {},
          //Bg active
          [`@apply active:enabled:bg-${config.variant.outline.success.background.light.active} dark:active:enabled:bg-${config.variant.outline.success.background.dark.active}`]:
            {},
          //Bg focus
          [`@apply focus-visible:bg-${config.variant.outline.success.background.light.focus} dark:focus-visible:bg-${config.variant.outline.success.background.dark.focus}`]:
            {},
          //Border main
          [`@apply border-2 border-${config.variant.outline.success.border.light} dark:border-${config.variant.outline.success.border.dark}`]:
            {},
          //Shadows
          '&.webeze-button-shadow-hover': {
            [`@apply hover:enabled:shadow-${config.variant.outline.success.shadow.size} hover:enabled:shadow-${config.variant.outline.success.shadow.light} dark:hover:enabled:shadow-${config.variant.outline.success.shadow.dark}`]:
              {},
          },
        },
        //Outline:warning
        '&.webeze-button-warning': {
          //Text color
          [`@apply text-${config.variant.outline.warning.text.light.base} dark:text-${config.variant.outline.warning.text.dark.base}`]:
            {},
          //Text hover
          [`@apply hover:enabled:text-${config.variant.outline.warning.text.light.hover} dark:hover:enabled:text-${config.variant.outline.warning.text.dark.hover}`]:
            {},
          //Text focus
          [`@apply focus-visible:text-${config.variant.outline.warning.text.light.active} dark:focus-visible:text-${config.variant.outline.warning.text.dark.active}`]:
            {},
          //Text active
          [`@apply active:enabled:text-${config.variant.outline.warning.text.light.focus} dark:active:enabled:text-${config.variant.outline.warning.text.dark.focus}`]:
            {},
          //Bg main
          [`@apply bg-${config.variant.outline.warning.background.light.base} dark:bg-${config.variant.outline.warning.background.dark.base}`]:
            {},
          //Bg hover
          [`@apply hover:enabled:bg-${config.variant.outline.warning.background.light.hover} dark:hover:enabled:bg-${config.variant.outline.warning.background.dark.hover}`]:
            {},
          //Bg active
          [`@apply active:enabled:bg-${config.variant.outline.warning.background.light.active} dark:active:enabled:bg-${config.variant.outline.warning.background.dark.active}`]:
            {},
          //Bg focus
          [`@apply focus-visible:bg-${config.variant.outline.warning.background.light.focus} dark:focus-visible:bg-${config.variant.outline.warning.background.dark.focus}`]:
            {},
          //Border main
          [`@apply border-2 border-${config.variant.outline.warning.border.light} dark:border-${config.variant.outline.warning.border.dark}`]:
            {},
          //Shadows
          '&.webeze-button-shadow-hover': {
            [`@apply hover:enabled:shadow-${config.variant.outline.warning.shadow.size} hover:enabled:shadow-${config.variant.outline.warning.shadow.light} dark:hover:enabled:shadow-${config.variant.outline.warning.shadow.dark}`]:
              {},
          },
        },
        //Outline:danger
        '&.webeze-button-danger': {
          //Text color
          [`@apply text-${config.variant.outline.danger.text.light.base} dark:text-${config.variant.outline.danger.text.dark.base}`]:
            {},
          //Text hover
          [`@apply hover:enabled:text-${config.variant.outline.danger.text.light.hover} dark:hover:enabled:text-${config.variant.outline.danger.text.dark.hover}`]:
            {},
          //Text focus
          [`@apply focus-visible:text-${config.variant.outline.danger.text.light.active} dark:focus-visible:text-${config.variant.outline.danger.text.dark.active}`]:
            {},
          //Text active
          [`@apply active:enabled:text-${config.variant.outline.danger.text.light.focus} dark:active:enabled:text-${config.variant.outline.danger.text.dark.focus}`]:
            {},
          //Bg main
          [`@apply bg-${config.variant.outline.danger.background.light.base} dark:bg-${config.variant.outline.danger.background.dark.base}`]:
            {},
          //Bg hover
          [`@apply hover:enabled:bg-${config.variant.outline.danger.background.light.hover} dark:hover:enabled:bg-${config.variant.outline.danger.background.dark.hover}`]:
            {},
          //Bg active
          [`@apply active:enabled:bg-${config.variant.outline.danger.background.light.active} dark:active:enabled:bg-${config.variant.outline.danger.background.dark.active}`]:
            {},
          //Bg focus
          [`@apply focus-visible:bg-${config.variant.outline.danger.background.light.focus} dark:focus-visible:bg-${config.variant.outline.danger.background.dark.focus}`]:
            {},
          //Border main
          [`@apply border-2 border-${config.variant.outline.danger.border.light} dark:border-${config.variant.outline.danger.border.dark}`]:
            {},
          //Shadows
          '&.webeze-button-shadow-hover': {
            [`@apply hover:enabled:shadow-${config.variant.outline.danger.shadow.size} hover:enabled:shadow-${config.variant.outline.danger.shadow.light} dark:hover:enabled:shadow-${config.variant.outline.danger.shadow.dark}`]:
              {},
          },
        },
      },
      // #endregion
    },
  })
}, config)
