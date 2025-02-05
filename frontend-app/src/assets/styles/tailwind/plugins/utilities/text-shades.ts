import plugin from 'tailwindcss/plugin'

export default plugin(({ addUtilities }) =>
  addUtilities({
    '.webeze-text-white': {
      '@apply text-white dark:text-black': {},
    },
    '.webeze-text-50': {
      '@apply text-muted-50 dark:text-muted-950': {},
    },
    '.webeze-text-100': {
      '@apply text-muted-100 dark:text-muted-900': {},
    },
    '.webeze-text-200': {
      '@apply text-muted-200 dark:text-muted-800': {},
    },
    '.webeze-text-300': {
      '@apply text-muted-300 dark:text-muted-700': {},
    },
    '.webeze-text-400': {
      '@apply text-muted-400 dark:text-muted-600': {},
    },
    '.webeze-text-500': {
      '@apply text-muted-500 dark:text-muted-500': {},
    },
    '.webeze-text-600': {
      '@apply text-muted-600 dark:text-muted-400': {},
    },
    '.webeze-text-700': {
      '@apply text-muted-700 dark:text-muted-300': {},
    },
    '.webeze-text-800': {
      '@apply text-muted-800 dark:text-muted-200': {},
    },
    '.webeze-text-900': {
      '@apply text-muted-900 dark:text-muted-100': {},
    },
    '.webeze-text-950': {
      '@apply text-muted-950 dark:text-muted-50': {},
    },
    '.webeze-text-black': {
      '@apply text-black dark:text-white': {},
    },
  }),
)
