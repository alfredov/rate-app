
import { withEnvironment } from './stories'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: 'None',
    values: [
      { name: 'Dark', value: '#2F4050' },
      { name: 'Darkest', value: '#232C3E' },
      { name: 'Light', value: '#F3F4F5' },
      { name: 'Lightest', value: '#FFFFFF' },
      { name: 'None', value: 'transparent' },
    ],
  },
}

export const globalTypes = {
  layout: 'centered',
}

export const decorators = [
  withEnvironment,
]
