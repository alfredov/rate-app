
import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'

import LargeCard, { Props } from './index'

const metaData: Meta = {
  title: 'app-ui/LargeCard',
  component: LargeCard,
}

const Template: Story<Props> = props => <LargeCard {...props} />
export const Primary = Template.bind({})

Primary.args = {
  score: 5.6,
  title: 'Blanca nieves',
  url: 'https://image.tmdb.org/t/p/w500/nN4Gs3vZAOJ1D6FRtrwbU9VGYwU.jpg',
}

export default metaData
