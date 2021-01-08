import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Card, { Props } from './index'

const metaData: Meta = {
  title: 'app-ui/Card',
  component: Card,
}

const Template: Story<Props> = props => <Card {...props} />
export const Primary = Template.bind({})

Primary.args = {
  title: 'The Simpsons',
  image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg',
}

export default metaData
