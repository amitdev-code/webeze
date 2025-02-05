import plugin from 'tailwindcss/plugin'
import { type CheckboxConfig, defaultConfig, key } from './checkbox.config'

const config = {
  theme: {
    webeze: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`webeze.${key}`) satisfies CheckboxConfig

  addComponents({
    //Wrapper
    '.webeze-checkbox': {
      '@apply relative inline-flex items-start gap-1': {},
      //Outer
      '.webeze-checkbox-outer': {
        [`@apply webeze-focus relative flex items-center justify-center h-${config.outer.size} w-${config.outer.size} shrink-0 cursor-pointer disabled:cursor-not-allowed overflow-hidden`]:
          {},
      },
      //Inner
      '.webeze-checkbox-inner': {
        [`@apply absolute start-0 top-0 z-0 h-${config.inner.size} w-${config.inner.size}`]:
          {},
        //Background
        [`@apply bg-${config.inner.background.light} dark:bg-${config.inner.background.dark}`]:
          {},
        //Border
        [`@apply border-2 border-${config.inner.border.light} dark:border-${config.inner.border.dark}`]:
          {},
      },
      //Icon
      '.webeze-icon-check': {
        '@apply pointer-events-none absolute z-10 fill-current translate-y-6 opacity-0':
          {},
        //Size
        [`@apply h-${config.icon.size} w-${config.icon.size}`]: {},
        //Transition
        [`@apply transition-${config.icon.transition.property} duration-${config.icon.transition.duration}`]:
          {},
      },
      '.webeze-icon-indeterminate': {
        '@apply pointer-events-none absolute z-10 fill-current translate-y-6 opacity-0':
          {},
        //Size
        [`@apply h-${config.icon.indeterminate.size} w-${config.icon.indeterminate.size}`]:
          {},
        //Transition
        [`@apply transition-${config.icon.indeterminate.transition.property} duration-${config.icon.indeterminate.transition.duration}`]:
          {},
      },
      //Input
      '.webeze-checkbox-input': {
        [`@apply absolute z-20 h-${config.input.size} w-${config.input.size} cursor-pointer disabled:cursor-not-allowed opacity-0`]:
          {},
        //Input:checked ~ inner
        '&:checked ~ .webeze-checkbox-inner, &:indeterminate ~ .webeze-checkbox-inner':
          {
            '@apply border-current dark:border-current': {},
          },
        //Input:checked ~ icon
        '&:checked ~ .webeze-icon-check': {
          '@apply translate-y-0 opacity-100': {},
        },
        //Input:indeterminate ~ check
        '&:indeterminate ~ .webeze-icon-check': {
          '@apply !translate-y-6': {},
        },
        //Input:checked ~ icon
        '&:indeterminate ~ .webeze-icon-indeterminate': {
          '@apply !translate-y-0 !opacity-100': {},
        },
      },
      //Label
      '.webeze-checkbox-label-wrapper': {
        '@apply inline-flex flex-col': {},
      },
      //Label:text
      '.webeze-checkbox-label-text': {
        [`@apply font-${config.label.font.family} text-${config.label.font.size} ms-1 cursor-pointer select-none`]:
          {},
        //Color
        [`@apply text-${config.label.font.color.light} dark:text-${config.label.font.color.dark}`]:
          {},
      },
      //Error
      '.webeze-checkbox-error': {
        [`@apply ms-1 inline-block`]: {},
      },
      //Rounded:sm
      '&.webeze-checkbox-rounded-sm .webeze-checkbox-outer, &.webeze-checkbox-rounded-sm .webeze-checkbox-inner':
        {
          [`@apply ${config.rounded.sm}`]: {},
        },
      //Rounded:md
      '&.webeze-checkbox-rounded-md .webeze-checkbox-outer, &.webeze-checkbox-rounded-md .webeze-checkbox-inner':
        {
          [`@apply ${config.rounded.md}`]: {},
        },
      //Rounded:lg
      '&.webeze-checkbox-rounded-lg .webeze-checkbox-outer, &.webeze-checkbox-rounded-lg .webeze-checkbox-inner':
        {
          [`@apply ${config.rounded.lg}`]: {},
        },
      //Rounded:full
      '&.webeze-checkbox-rounded-full .webeze-checkbox-outer, &.webeze-checkbox-rounded-full .webeze-checkbox-inner':
        {
          [`@apply ${config.rounded.full}`]: {},
        },
      //Color:default
      '&.webeze-checkbox-default': {
        [`@apply text-${config.color.default.light} dark:text-${config.color.default.dark}`]:
          {},
      },
      //Color:muted
      '&.webeze-checkbox-muted': {
        [`@apply text-${config.color.muted.light} dark:text-${config.color.muted.dark}`]:
          {},
      },
      //Color:light
      '&.webeze-checkbox-light': {
        [`@apply text-${config.color.light.light} dark:text-${config.color.light.dark}`]:
          {},
      },
      //Color:dark
      '&.webeze-checkbox-dark': {
        [`@apply text-${config.color.dark.light} dark:text-${config.color.dark.dark}`]:
          {},
      },
      //Color:black
      '&.webeze-checkbox-black': {
        [`@apply text-${config.color.black.light} dark:text-${config.color.black.dark}`]:
          {},
      },
      //Color:primary
      '&.webeze-checkbox-primary': {
        [`@apply text-${config.color.primary.light} dark:text-${config.color.primary.dark}`]:
          {},
      },
      //Color:info
      '&.webeze-checkbox-info': {
        [`@apply text-${config.color.info.light} dark:text-${config.color.info.dark}`]:
          {},
      },
      //Color:success
      '&.webeze-checkbox-success': {
        [`@apply text-${config.color.success.light} dark:text-${config.color.success.dark}`]:
          {},
      },
      //Color:warning
      '&.webeze-checkbox-warning': {
        [`@apply text-${config.color.warning.light} dark:text-${config.color.warning.dark}`]:
          {},
      },
      //Color:danger
      '&.webeze-checkbox-danger': {
        [`@apply text-${config.color.danger.light} dark:text-${config.color.danger.dark}`]:
          {},
      },
    },
  })
}, config)
