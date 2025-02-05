import type { WebezeUIConfig } from './schema'
import typography from '@tailwindcss/typography'
import containerQueries from '@tailwindcss/container-queries'

import { base, components, utilities } from './plugins'
import { defaultTheme } from './themes'

const WebezeUISymbol = '__is_webeze_ui'

/**
 * Test if a tailwind config has the webeze-ui preset already added
 */
export function hasPreset(config: WebezeUIConfig) {
  if (config.presets && Array.isArray(config.presets)) {
    return config.presets.some((preset) => preset && WebezeUISymbol in preset)
  }

  return false
}

/**
 * Create a webeze-ui preset, optionally with a custom theme and custom plugins list
 */
export function createPreset({
  theme = defaultTheme,
  plugins = [
    // tailwindcss plugins
    typography,
    containerQueries,
    // webeze-ui plugins
    base,
    components,
    utilities,
  ],
}: {
  theme?: WebezeUIConfig['theme']
  plugins?: WebezeUIConfig['plugins']
} = {}) {
  const config = {
    darkMode: 'class',
    content: [],
    plugins,
    theme,
  } satisfies WebezeUIConfig

  // set a hidden symbol so we can detect if the user has already added the preset
  Object.defineProperty(config, WebezeUISymbol, {
    value: true,
    enumerable: false,
    writable: false,
  })

  return config
}

/**
 * The default webeze-ui preset
 */
export const preset = createPreset()
