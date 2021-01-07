import React from 'react'
// tslint:disable-next-line:no-submodule-imports
import { Story, Meta } from '@storybook/react/types-6-0'

import Button, { Props } from './index'

const metaData: Meta = {
  title: 'app-ui/Button',
  component: Button,
}

const Template: Story<Props> = props => <Button {...props} />
export const Primary = Template.bind({})
Primary.args = {
  children: '🤡 click it!',
  disabled: false,
}

export default metaData
