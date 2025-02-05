import plugin from 'tailwindcss/plugin'
import { defaultConfig, key } from './button-group.config'

const config = {
  theme: {
    webeze: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(
  ({ addComponents }) =>
    addComponents({
      '.webeze-button-group, [role="group"]': {
        '@apply flex': {},

        // Button
        '> .webeze-button:not(:only-child), > .webeze-button-action:not(:only-child), > .webeze-button-icon:not(:only-child)':
          {
            '@apply !border-e-0': {},
            '&:focus': {
              '@apply !z-10 relative': {},
            },
            '&:not(:first-child):not(:last-child)': {
              '@apply !rounded-none': {},
            },
            '&:first-child': {
              '@apply !rounded-e-none': {},
            },
            '&:last-child': {
              '@apply !border-e !rounded-s-none': {},
            },
          },

        // Input
        '.webeze-input-wrapper:not(:first-child):not(:last-child)': {
          '.webeze-input': {
            '@apply !border-e-0 !rounded-none': {},

            '&:focus': {
              '@apply !z-10 relative': {},
            },
          },
        },

        '.webeze-input-wrapper:first-child:not(:last-child)': {
          '.webeze-input': {
            '@apply !border-e-0 !rounded-e-none': {},

            '&:focus': {
              '@apply !z-10 relative': {},
            },
          },
        },

        '.webeze-input-wrapper:last-child:not(:first-child)': {
          '.webeze-input': {
            '@apply !border-e !rounded-s-none': {},

            '&:focus': {
              '@apply !z-10 relative': {},
            },
          },
        },

        // InputNumber
        '.webeze-input-number-wrapper:not(:first-child):not(:last-child)': {
          '.webeze-input-number': {
            '@apply !border-e-0 !rounded-none': {},

            '&:focus': {
              '@apply !z-10 relative': {},
            },
          },
        },

        '.webeze-input-number-wrapper:first-child:not(:last-child)': {
          '.webeze-input-number': {
            '@apply !border-e-0 !rounded-e-none': {},

            '&:focus': {
              '@apply !z-10 relative': {},
            },
          },
        },

        '.webeze-input-number-wrapper:last-child:not(:first-child)': {
          '.webeze-input-number': {
            '@apply !border-e !rounded-s-none': {},

            '&:focus': {
              '@apply !z-10 relative': {},
            },
          },
        },

        // InputFileRegular
        '.webeze-input-file-regular:not(:first-child):not(:last-child)': {
          '.webeze-input-file-inner': {
            '@apply !border-e-0 !rounded-none': {},

            '&:focus': {
              '@apply !z-10 relative': {},
            },
          },
        },

        '.webeze-input-file-regular:first-child:not(:last-child)': {
          '.webeze-input-file-inner': {
            '@apply !border-e-0 !rounded-e-none': {},

            '&:focus': {
              '@apply !z-10 relative': {},
            },
          },
        },

        '.webeze-input-file-regular:last-child:not(:first-child)': {
          '.webeze-input-file-inner': {
            '@apply !border-e !rounded-s-none': {},

            '&:focus': {
              '@apply !z-10 relative': {},
            },
          },
        },

        // Select
        '.webeze-select-wrapper:not(:first-child):not(:last-child)': {
          '.webeze-select': {
            '@apply !border-e-0 !rounded-none': {},

            '&:focus': {
              '@apply !z-10 relative': {},
            },
          },
        },

        '.webeze-select-wrapper:first-child:not(:last-child)': {
          '.webeze-select': {
            '@apply !border-e-0 !rounded-e-none': {},

            '&:focus': {
              '@apply !z-10 relative': {},
            },
          },
        },

        '.webeze-select-wrapper:last-child:not(:first-child)': {
          '.webeze-select': {
            '@apply !border-e !rounded-s-none': {},

            '&:focus': {
              '@apply !z-10 relative': {},
            },
          },
        },

        // Autocomplete
        '.webeze-autocomplete:not(:first-child):not(:last-child)': {
          '.webeze-autocomplete-input': {
            '@apply !border-e-0 !rounded-none': {},

            '&:focus': {
              '@apply !z-10 relative': {},
            },
          },
        },

        '.webeze-autocomplete:first-child:not(:last-child)': {
          '.webeze-autocomplete-input': {
            '@apply !border-e-0 !rounded-e-none': {},

            '&:focus': {
              '@apply !z-10 relative': {},
            },
          },
        },

        '.webeze-autocomplete:last-child:not(:first-child)': {
          '.webeze-autocomplete-input': {
            '@apply !border-e !rounded-s-none': {},

            '&:focus': {
              '@apply !z-10 relative': {},
            },
          },
        },

        // Dropdown
        '.webeze-dropdown:not(:first-child):not(:last-child)': {
          '.webeze-button': {
            '@apply !border-e-0 !rounded-none': {},

            '&:focus': {
              '@apply !z-10 relative': {},
            },
          },
        },

        '.webeze-dropdown:first-child:not(:last-child)': {
          '.webeze-button': {
            '@apply !border-e-0 !rounded-e-none': {},

            '&:focus': {
              '@apply !z-10 relative': {},
            },
          },
        },

        '.webeze-dropdown:last-child:not(:first-child)': {
          '.webeze-button': {
            '@apply !border-e !rounded-s-none': {},

            '&:focus': {
              '@apply !z-10 relative': {},
            },
          },
        },

        // Listbox
        '.webeze-listbox:not(:first-child):not(:last-child)': {
          '.webeze-listbox-button': {
            '@apply !border-e-0 !rounded-none': {},

            '&:focus': {
              '@apply !z-10 relative': {},
            },
          },
        },

        '.webeze-listbox:first-child:not(:last-child)': {
          '.webeze-listbox-button': {
            '@apply !border-e-0 !rounded-e-none': {},

            '&:focus': {
              '@apply !z-10 relative': {},
            },
          },
        },

        '.webeze-listbox:last-child:not(:first-child)': {
          '.webeze-listbox-button': {
            '@apply !border-e !rounded-s-none': {},

            '&:focus': {
              '@apply !z-10 relative': {},
            },
          },
        },
      },
    }),
  config,
)
