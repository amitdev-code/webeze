import plugin from 'tailwindcss/plugin'
import {
  type MessageTextConfig,
  defaultConfig,
  key,
} from './message-text.config'

const config = {
  theme: {
    webeze: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`webeze.${key}`) satisfies MessageTextConfig

  addComponents({
    //Wrapper
    '.webeze-message-text': {
      [`@apply relative p-${config.padding}`]: {},
      //Message:header
      '.webeze-message-head': {
        [`@apply flex items-center gap-${config.header.gap} mb-3`]: {},
      },
      //Message:dot
      '.webeze-message-dot': {
        //Base
        [`@apply inline-block h-${config.dot.size} w-${config.dot.size} rounded-${config.dot.rounded}`]:
          {},
      },
      //Message:close
      '.webeze-message-close': {
        [`@apply absolute top-${config.close.position} end-${config.close.position}`]:
          {},
      },
      //Rounded:sm
      '&.webeze-message-rounded-sm': {
        [`@apply ${config.rounded.sm}`]: {},
      },
      //Rounded:md
      '&.webeze-message-rounded-md': {
        [`@apply ${config.rounded.md}`]: {},
      },
      //Rounded:lg
      '&.webeze-message-rounded-lg': {
        [`@apply ${config.rounded.lg}`]: {},
      },
      //Contrast:low
      '&.webeze-message-low-contrast': {
        //Background
        [`@apply bg-${config.contrast.lowContrast.background.light} dark:bg-${config.contrast.lowContrast.background.dark}`]:
          {},
        //Border
        [`@apply border border-${config.contrast.lowContrast.border.light} dark:border-${config.contrast.lowContrast.border.dark}`]:
          {},
      },
      //Contrast:high
      '&.webeze-message-high-contrast': {
        //Background
        [`@apply bg-${config.contrast.highContrast.background.light} dark:bg-${config.contrast.highContrast.background.dark}`]:
          {},
        //Border
        [`@apply border border-${config.contrast.highContrast.border.light} dark:border-${config.contrast.highContrast.border.dark}`]:
          {},
      },
      //Color:white
      '&.webeze-message-default': {
        //Message:dot
        '.webeze-message-dot': {
          [`@apply bg-${config.color.default.dot.background.light} dark:bg-${config.color.default.dot.background.dark}`]:
            {},
        },
      },
      //Color:primary
      '&.webeze-message-primary': {
        //Message:dot
        '.webeze-message-dot': {
          [`@apply bg-${config.color.primary.dot.background.light} dark:bg-${config.color.primary.dot.background.dark}`]:
            {},
        },
      },
      //Color:info
      '&.webeze-message-info': {
        //Message:dot
        '.webeze-message-dot': {
          [`@apply bg-${config.color.info.dot.background.light} dark:bg-${config.color.info.dot.background.dark}`]:
            {},
        },
      },
      //Color:success
      '&.webeze-message-success': {
        //Message:dot
        '.webeze-message-dot': {
          [`@apply bg-${config.color.success.dot.background.light} dark:bg-${config.color.success.dot.background.dark}`]:
            {},
        },
      },
      //Color:warning
      '&.webeze-message-warning': {
        //Message:dot
        '.webeze-message-dot': {
          [`@apply bg-${config.color.warning.dot.background.light} dark:bg-${config.color.warning.dot.background.dark}`]:
            {},
        },
      },
      //Color:danger
      '&.webeze-message-danger': {
        //Message:dot
        '.webeze-message-dot': {
          [`@apply bg-${config.color.danger.dot.background.light} dark:bg-${config.color.danger.dot.background.dark}`]:
            {},
        },
      },
      //Color:dark
      '&.webeze-message-dark': {
        //Message:dot
        '.webeze-message-dot': {
          [`@apply bg-${config.color.dark.dot.background.light} dark:bg-${config.color.dark.dot.background.dark}`]:
            {},
        },
      },
      //Color:black
      '&.webeze-message-black': {
        //Message:dot
        '.webeze-message-dot': {
          [`@apply bg-${config.color.black.dot.background.light} dark:bg-${config.color.black.dot.background.dark}`]:
            {},
        },
      },
    },
  })
}, config)
