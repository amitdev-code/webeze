import plugin from 'tailwindcss/plugin'
import { type TabSliderConfig, defaultConfig, key } from './tab-slider.config'

const config = {
  theme: {
    webeze: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`webeze.${key}`) satisfies TabSliderConfig

  addComponents({
    //Wrapper
    '.webeze-tab-slider': {
      '@apply relative': {},
      //Tabs:inner
      '.webeze-tab-slider-inner': {
        '@apply mb-6 flex': {},
      },
      //Tabs:track
      '.webeze-tab-slider-track': {
        //Base
        [`@apply relative relative flex w-${config.track.width} items-center font-${config.track.font.family}`]:
          {},
        //Background
        [`@apply bg-${config.track.background.light} dark:bg-${config.track.background.dark}`]:
          {},
      },
      //Tabs:item
      '.webeze-tab-slider-item': {
        //Base
        '@apply relative z-20 h-full flex flex-1 items-center justify-center':
          {},
        //Font
        [`@apply text-${config.item.font.size} font-${config.item.font.family}`]:
          {},
      },
      //Tabs:naver
      '.webeze-tab-slider-naver': {
        //Base
        '@apply absolute start-0 top-0 z-10 h-full': {},
        //Transition
        [`@apply transition-${config.naver.transition.property} duration-${config.naver.transition.duration}`]:
          {},
      },
      //Tabs:content
      '.webeze-tab-content': {
        '@apply relative block': {},
      },
      //Align:center
      '&.webeze-tabs-centered': {
        '.webeze-tab-slider-inner': {
          '@apply justify-center': {},
        },
      },
      //Align:end
      '&.webeze-tabs-end': {
        '.webeze-tab-slider-inner': {
          '@apply justify-end': {},
        },
      },
      //Color:default
      '&.webeze-tabs-default': {
        '.webeze-tab-slider-item:not(.webeze-active)': {
          [`@apply text-${config.color.default.tabs.color.inactive.light} dark:text-${config.color.default.tabs.color.inactive.dark}`]:
            {},
        },
        '.webeze-tab-slider-item.webeze-active': {
          [`@apply text-${config.color.default.tabs.color.active.light} dark:text-${config.color.default.tabs.color.active.dark}`]:
            {},
        },
        '.webeze-tab-slider-naver': {
          [`@apply bg-${config.color.default.naver.background.light} dark:bg-${config.color.default.naver.background.dark}`]:
            {},
          [`@apply border border-${config.color.default.naver.border.light} dark:border-${config.color.default.naver.border.dark}`]:
            {},
        },
      },
      //Color:default-contrast
      '&.webeze-tabs-default-contrast': {
        '.webeze-tab-slider-item:not(.webeze-active)': {
          [`@apply text-${config.color.defaultContrast.tabs.color.inactive.light} dark:text-${config.color.defaultContrast.tabs.color.inactive.dark}`]:
            {},
        },
        '.webeze-tab-slider-item.webeze-active': {
          [`@apply text-${config.color.defaultContrast.tabs.color.active.light} dark:text-${config.color.defaultContrast.tabs.color.active.dark}`]:
            {},
        },
        '.webeze-tab-slider-naver': {
          [`@apply bg-${config.color.defaultContrast.naver.background.light} dark:bg-${config.color.defaultContrast.naver.background.dark}`]:
            {},
          [`@apply border border-${config.color.defaultContrast.naver.border.light} dark:border-${config.color.defaultContrast.naver.border.dark}`]:
            {},
        },
      },
      //Color:primary
      '&.webeze-tabs-primary': {
        '.webeze-tab-slider-item:not(.webeze-active)': {
          [`@apply text-${config.color.primary.tabs.color.inactive.light} dark:text-${config.color.primary.tabs.color.inactive.dark}`]:
            {},
        },
        '.webeze-tab-slider-item.webeze-active': {
          [`@apply text-${config.color.primary.tabs.color.active.light} dark:text-${config.color.primary.tabs.color.active.dark}`]:
            {},
        },
        '.webeze-tab-slider-naver': {
          [`@apply bg-${config.color.primary.naver.background.light} dark:bg-${config.color.primary.naver.background.dark}`]:
            {},
        },
      },
      //Color:light
      '&.webeze-tabs-light': {
        '.webeze-tab-slider-item:not(.webeze-active)': {
          [`@apply text-${config.color.light.tabs.color.inactive.light} dark:text-${config.color.light.tabs.color.inactive.dark}`]:
            {},
        },
        '.webeze-tab-slider-item.webeze-active': {
          [`@apply text-${config.color.light.tabs.color.active.light} dark:text-${config.color.light.tabs.color.active.dark}`]:
            {},
        },
        '.webeze-tab-slider-naver': {
          [`@apply bg-${config.color.light.naver.background.light} dark:bg-${config.color.light.naver.background.dark}`]:
            {},
        },
      },
      //Color:dark
      '&.webeze-tabs-dark': {
        '.webeze-tab-slider-item:not(.webeze-active)': {
          [`@apply text-${config.color.dark.tabs.color.inactive.light} dark:text-${config.color.dark.tabs.color.inactive.dark}`]:
            {},
        },
        '.webeze-tab-slider-item.webeze-active': {
          [`@apply text-${config.color.dark.tabs.color.active.light} dark:text-${config.color.dark.tabs.color.active.dark}`]:
            {},
        },
        '.webeze-tab-slider-naver': {
          [`@apply bg-${config.color.dark.naver.background.light} dark:bg-${config.color.dark.naver.background.dark}`]:
            {},
        },
      },
      //Color:black
      '&.webeze-tabs-black': {
        '.webeze-tab-slider-item:not(.webeze-active)': {
          [`@apply text-${config.color.black.tabs.color.inactive.light} dark:text-${config.color.black.tabs.color.inactive.dark}`]:
            {},
        },
        '.webeze-tab-slider-item.webeze-active': {
          [`@apply text-${config.color.black.tabs.color.active.light} dark:text-${config.color.black.tabs.color.active.dark}`]:
            {},
        },
        '.webeze-tab-slider-naver': {
          [`@apply bg-${config.color.black.naver.background.light} dark:bg-${config.color.black.naver.background.dark}`]:
            {},
        },
      },
      //Rounded:sm
      '&.webeze-tabs-rounded-sm': {
        '.webeze-tab-slider-track, .webeze-tab-slider-naver': {
          [`@apply ${config.rounded.sm}`]: {},
        },
      },
      //Rounded:md
      '&.webeze-tabs-rounded-md': {
        '.webeze-tab-slider-track, .webeze-tab-slider-naver': {
          [`@apply ${config.rounded.md}`]: {},
        },
      },
      //Rounded:lg
      '&.webeze-tabs-rounded-lg': {
        '.webeze-tab-slider-track, .webeze-tab-slider-naver': {
          [`@apply ${config.rounded.lg}`]: {},
        },
      },
      //Rounded:full
      '&.webeze-tabs-rounded-full': {
        '.webeze-tab-slider-track, .webeze-tab-slider-naver': {
          [`@apply ${config.rounded.full}`]: {},
        },
      },
      //Size:sm
      '&.webeze-tabs-sm': {
        '&.webeze-tabs-two-slots .webeze-tab-slider-track': {
          [`@apply max-w-${config.size.sm.slots.two}`]: {},
        },
        '&.webeze-tabs-three-slots .webeze-tab-slider-track': {
          [`@apply max-w-${config.size.sm.slots.three}`]: {},
        },
        '.webeze-tab-slider-track': {
          [`@apply h-${config.size.sm.track.size}`]: {},
        },
      },
      //Size:md
      '&.webeze-tabs-md': {
        '&.webeze-tabs-two-slots .webeze-tab-slider-track': {
          [`@apply max-w-${config.size.md.slots.two}`]: {},
        },
        '&.webeze-tabs-three-slots .webeze-tab-slider-track': {
          [`@apply max-w-${config.size.md.slots.three}`]: {},
        },
        '.webeze-tab-slider-track': {
          [`@apply h-${config.size.md.track.size}`]: {},
        },
      },
      //Slots:two
      '&.webeze-tabs-two-slots': {
        '.webeze-tab-slider-naver, .webeze-tab-slider-item': {
          '@apply w-1/2': {},
        },
        '.webeze-tab-slider-item:first-child.webeze-active ~ .webeze-tab-slider-naver': {
          '@apply ms-0': {},
        },
        '.webeze-tab-slider-item:nth-child(2).webeze-active ~ .webeze-tab-slider-naver':
          {
            '@apply ms-[50%]': {},
          },
      },
      //Slots:three
      '&.webeze-tabs-three-slots': {
        '.webeze-tab-slider-naver, .webeze-tab-slider-item': {
          '@apply w-1/3': {},
        },
        '.webeze-tab-slider-item:first-child.webeze-active ~ .webeze-tab-slider-naver': {
          '@apply ms-0': {},
        },
        '.webeze-tab-slider-item:nth-child(2).webeze-active ~ .webeze-tab-slider-naver':
          {
            '@apply ms-[33.3%]': {},
          },
        '.webeze-tab-slider-item:nth-child(3).webeze-active ~ .webeze-tab-slider-naver':
          {
            '@apply ms-[66.6%]': {},
          },
      },
    },
  })
}, config)
