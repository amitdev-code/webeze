import type { WebezeUIConfig } from './schema'
import { preset, hasPreset } from './preset'

export * from './preset'

/**
 * Inject the webeze-ui preset into a tailwind config if not already present
 */
export function withWebezeUI(config: WebezeUIConfig) {
  if (hasPreset(config)) {
    return config
  }

  config.presets ??= []
  config.presets.push(preset)

  return config
}
