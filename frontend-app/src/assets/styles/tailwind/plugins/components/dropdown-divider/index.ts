import plugin from 'tailwindcss/plugin'
import {
  type DropdownDividerConfig,
  defaultConfig,
  key,
} from './dropdown-divider.config'

const config = {
  theme: {
    webeze: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(({ addComponents, theme }) => {
  const config = theme(`webeze.${key}`) satisfies DropdownDividerConfig

  addComponents({
    '.webeze-dropdown-divider': {
      [`@apply my-${config.margin.y} block h-px w-full border-t border-${config.border.light} dark:border-${config.border.dark}`]:
        {},
    },
  })
}, config)
