import plugin from 'tailwindcss/plugin'
import { type ParagraphConfig, defaultConfig, key } from './paragraph.config'

const config = {
  theme: {
    webeze: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`webeze.${key}`) satisfies ParagraphConfig

  addComponents({
    '.webeze-paragraph': {
      '@apply font-sans': {},
      //Size
      '&.webeze-paragraph-xs': {
        [`@apply text-${config.size.xs}`]: {},
      },
      '&.webeze-paragraph-sm': {
        [`@apply text-${config.size.sm}`]: {},
      },
      '&.webeze-paragraph-md': {
        [`@apply text-${config.size.md}`]: {},
      },
      '&.webeze-paragraph-lg': {
        [`@apply text-${config.size.lg}`]: {},
      },
      '&.webeze-paragraph-xl': {
        [`@apply text-${config.size.xl}`]: {},
      },
      '&.webeze-paragraph-2xl': {
        [`@apply text-${config.size.xxl}`]: {},
      },
      '&.webeze-paragraph-3xl': {
        [`@apply text-${config.size.xxxl}`]: {},
      },
      '&.webeze-paragraph-4xl': {
        [`@apply text-${config.size.xxxxl}`]: {},
      },
      '&.webeze-paragraph-5xl': {
        [`@apply text-${config.size.xxxxxl}`]: {},
      },
      '&.webeze-paragraph-6xl': {
        [`@apply text-${config.size.xxxxxxl}`]: {},
      },
      '&.webeze-paragraph-7xl': {
        [`@apply text-${config.size.xxxxxxxl}`]: {},
      },
      '&.webeze-paragraph-8xl': {
        [`@apply text-${config.size.xxxxxxxxl}`]: {},
      },
      '&.webeze-paragraph-9xl': {
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
