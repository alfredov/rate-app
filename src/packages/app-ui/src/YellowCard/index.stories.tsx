
import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import YellowCard, { Props } from './index'

const metaData: Meta = {
  title: 'app-ui/YellowCard',
  component: YellowCard,
}

const Template: Story<Props> = props => <YellowCard {...props} />
export const Primary = Template.bind({})

Primary.args = {
  children: 'Fetch more',
}

export default metaData
