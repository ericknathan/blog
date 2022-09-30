export const defaultTheme = {
  white: '#FFFFFF',

  'gray-50': '#E7EDF4',
  'gray-100': '#C4D4E3',
  'gray-200': '#AFC2D4',
  'gray-300': '#7B96B2',
  'gray-400': '#3A536B',
  'gray-500': '#1C2F41',
  'gray-600': '#112131',
  'gray-700': '#0B1B2B',
  'gray-800': '#071422',
  'gray-900': '#040F1A',

  'blue-500': '#3294F8',
} as const;

export const aliasedTheme = {
  ...defaultTheme,

  'base-title': defaultTheme['gray-50'],
  'base-subtitle': defaultTheme['gray-100'],
  'base-text': defaultTheme['gray-200'],
  'base-span': defaultTheme['gray-300'],
  'base-label': defaultTheme['gray-400'],
  'base-border': defaultTheme['gray-500'],
  'base-post': defaultTheme['gray-600'],
  'base-profile': defaultTheme['gray-700'],
  'base-background': defaultTheme['gray-800'],
  'base-input': defaultTheme['gray-900'],

  blue: defaultTheme['blue-500'],
} as const;
