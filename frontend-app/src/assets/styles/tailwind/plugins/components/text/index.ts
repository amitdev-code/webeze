import plugin from 'tailwindcss/plugin'
import { type TextConfig, defaultConfig, key } from './text.config'

const config = {
  theme: {
    webeze: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`webeze.${key}`) satisfies TextConfig

  addComponents({
    '.webeze-text': {
      '@apply font-sans': {},
      //Size
      '&.webeze-content-xs': {
        [`@apply text-${config.size.xs}`]: {},
      },
      '&.webeze-content-sm': {
        [`@apply text-${config.size.sm}`]: {},
      },
      '&.webeze-content-md': {
        [`@apply text-${config.size.md}`]: {},
      },
      '&.webeze-content-lg': {
        [`@apply text-${config.size.lg}`]: {},
      },
      '&.webeze-content-xl': {
        [`@apply text-${config.size.xl}`]: {},
      },
      '&.webeze-content-2xl': {
        [`@apply text-${config.size.xxl}`]: {},
      },
      '&.webeze-content-3xl': {
        [`@apply text-${config.size.xxxl}`]: {},
      },
      '&.webeze-content-4xl': {
        [`@apply text-${config.size.xxxxl}`]: {},
      },
      '&.webeze-content-5xl': {
        [`@apply text-${config.size.xxxxxl}`]: {},
      },
      '&.webeze-content-6xl': {
        [`@apply text-${config.size.xxxxxxl}`]: {},
      },
      '&.webeze-content-7xl': {
        [`@apply text-${config.size.xxxxxxxl}`]: {},
      },
      '&.webeze-content-8xl': {
        [`@apply text-${config.size.xxxxxxxxl}`]: {},
      },
      '&.webeze-content-9xl': {
        [`@apply text-${config.size.xxxxxxxxxl}`]: {},
      },
      //Weight
      '&.webeze-weight-light': {
        [`@apply font-${config.weight.light}`]: {},
      },
      '&.webeze-weight-normal': {
        [`@apply font-${config.weight.normal}`]: {},
      },
      '&.webeze-weight-medium': {
        [`@apply font-${config.weight.medium}`]: {},
      },
      '&.webeze-weight-semibold': {
        [`@apply font-${config.weight.semibold}`]: {},
      },
      '&.webeze-weight-bold': {
        [`@apply font-${config.weight.bold}`]: {},
      },
      '&.webeze-weight-extrabold': {
        [`@apply font-${config.weight.extrabold}`]: {},
      },
      //Lead
      '&.webeze-lead-none': {
        [`@apply leading-${config.lead.none}`]: {},
      },
      '&.webeze-lead-normal': {
        [`@apply leading-${config.lead.normal}`]: {},
      },
      '&.webeze-lead-tight': {
        [`@apply leading-${config.lead.tight}`]: {},
      },
      '&.webeze-lead-snug': {
        [`@apply leading-${config.lead.snug}`]: {},
      },
      '&.webeze-lead-loose': {
        [`@apply leading-${config.lead.loose}`]: {},
      },
    },
  })
}, config)
