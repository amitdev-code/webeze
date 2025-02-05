import plugin from 'tailwindcss/plugin'
import { type HeadingConfig, defaultConfig, key } from './heading.config'

const config = {
  theme: {
    webeze: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`webeze.${key}`) satisfies HeadingConfig

  addComponents({
    '.webeze-heading': {
      '@apply font-sans': {},
      //size
      '&.webeze-heading-xs': {
        [`@apply text-${config.size.xs}`]: {},
      },
      '&.webeze-heading-sm': {
        [`@apply text-${config.size.sm}`]: {},
      },
      '&.webeze-heading-md': {
        [`@apply text-${config.size.md}`]: {},
      },
      '&.webeze-heading-lg': {
        [`@apply text-${config.size.lg}`]: {},
      },
      '&.webeze-heading-xl': {
        [`@apply text-${config.size.xl}`]: {},
      },
      '&.webeze-heading-2xl': {
        [`@apply text-${config.size.xxl}`]: {},
      },
      '&.webeze-heading-3xl': {
        [`@apply text-${config.size.xxxl}`]: {},
      },
      '&.webeze-heading-4xl': {
        [`@apply text-${config.size.xxxxl}`]: {},
      },
      '&.webeze-heading-5xl': {
        [`@apply text-${config.size.xxxxxl}`]: {},
      },
      '&.webeze-heading-6xl': {
        [`@apply text-${config.size.xxxxxxl}`]: {},
      },
      '&.webeze-heading-7xl': {
        [`@apply text-${config.size.xxxxxxxl}`]: {},
      },
      '&.webeze-heading-8xl': {
        [`@apply text-${config.size.xxxxxxxxl}`]: {},
      },
      '&.webeze-heading-9xl': {
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
