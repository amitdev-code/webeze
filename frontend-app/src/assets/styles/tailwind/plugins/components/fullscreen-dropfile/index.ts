import plugin from 'tailwindcss/plugin'
import {
  type FullscreenDropfileConfig,
  defaultConfig,
  key,
} from './fullscreen-dropfile.config'

const config = {
  theme: {
    webeze: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`webeze.${key}`) satisfies FullscreenDropfileConfig

  addComponents({
    //Wrapper
    '.webeze-fullscreen-dropfile': {
      //Dropfile:outer
      '.webeze-fullscreen-dropfile-outer': {
        '@apply bg-muted-100/50 dark:bg-muted-800/20 fixed inset-0 z-40 backdrop-blur-sm transition-all hover:backdrop-blur-none':
          {},
      },
      //Dropfile:inner
      '.webeze-fullscreen-dropfile-inner': {
        '@apply fixed inset-0 z-50': {},
        //Dropfile:container
        '.webeze-fullscreen-dropfile-container': {
          '@apply flex h-full flex-1 items-center justify-center': {},
          //Dropfile:content
          '.webeze-fullscreen-dropfile-content': {
            [`@apply h-${config.height} w-${config.width} mx-auto flex flex-col items-center justify-center gap-6 drop-shadow-sm`]:
              {},
            //Background
            '@apply bg-muted-100 dark:bg-muted-800': {},
            //Border
            [`@apply ${config.rounded} border-2 border-dashed border-${config.border.light} dark:border-${config.border.dark}`]:
              {},
            //Icon
            '.webeze-fullscreen-dropfile-icon': {
              [`@apply h-${config.icon.size} w-${config.icon.size}`]: {},
            },
            //Label
            '.webeze-fullscreen-dropfile-label': {
              [`@apply text-${config.label.font.size} text-muted-500 dark:text-muted-400`]:
                {},
            },
          },
        },
      },
      //Color: primary
      '&.webeze-dropfile-primary': {
        '.webeze-fullscreen-dropfile-inner': {
          '.webeze-fullscreen-dropfile-container': {
            '.webeze-fullscreen-dropfile-content': {
              //Icon
              '.webeze-fullscreen-dropfile-icon': {
                [`@apply text-${config.color.primary.light} dark:text-${config.color.primary.dark}`]:
                  {},
              },
            },
          },
        },
      },
      //Color: dark
      '&.webeze-dropfile-dark': {
        '.webeze-fullscreen-dropfile-inner': {
          '.webeze-fullscreen-dropfile-container': {
            '.webeze-fullscreen-dropfile-content': {
              //Icon
              '.webeze-fullscreen-dropfile-icon': {
                [`@apply text-${config.color.dark.light} dark:text-${config.color.dark.dark}`]:
                  {},
              },
            },
          },
        },
      },
      //Color: black
      '&.webeze-dropfile-black': {
        '.webeze-fullscreen-dropfile-inner': {
          '.webeze-fullscreen-dropfile-container': {
            '.webeze-fullscreen-dropfile-content': {
              //Icon
              '.webeze-fullscreen-dropfile-icon': {
                [`@apply text-${config.color.black.light} dark:text-${config.color.black.dark}`]:
                  {},
              },
            },
          },
        },
      },
    },
  })
}, config)
