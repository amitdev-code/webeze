import plugin from 'tailwindcss/plugin'

export default plugin(({ addUtilities }) =>
  addUtilities({
    '.webeze-bg-white': {
      '@apply bg-white dark:bg-muted-900': {},
    },
    '.webeze-bg-50': {
      '@apply bg-muted-50 dark:bg-muted-950': {},
    },
    '.webeze-bg-100': {
      '@apply bg-muted-100 dark:bg-muted-900': {},
    },
    '.webeze-bg-200': {
      '@apply bg-muted-200 dark:bg-muted-800': {},
    },
    '.webeze-bg-300': {
      '@apply bg-muted-300 dark:bg-muted-700': {},
    },
    '.webeze-bg-400': {
      '@apply bg-muted-400 dark:bg-muted-600': {},
    },
    '.webeze-bg-500': {
      '@apply bg-muted-500 dark:bg-muted-500': {},
    },
    '.webeze-bg-600': {
      '@apply bg-muted-600 dark:bg-muted-400': {},
    },
    '.webeze-bg-700': {
      '@apply bg-muted-700 dark:bg-muted-300': {},
    },
    '.webeze-bg-800': {
      '@apply bg-muted-800 dark:bg-muted-200': {},
    },
    '.webeze-bg-900': {
      '@apply bg-muted-900 dark:bg-muted-100': {},
    },
    '.webeze-bg-950': {
      '@apply bg-muted-950 dark:bg-muted-50': {},
    },
    '.webeze-bg-black': {
      '@apply bg-muted-900 dark:bg-white': {},
    },
  }),
)
