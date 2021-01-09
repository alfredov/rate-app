import React from 'react'
import  { Story, Meta } from '@storybook/react/types-6-0'

import CardScore, { Props } from './index'

const metaData: Meta = {
  title: 'app-ui/CardScore',
  component: CardScore,
}

const Template: Story<Props> = props => <CardScore {...props} />
export const Primary = Template.bind({})
Primary.args = {
  releaseYear: '2016',
  title: 'the hobbit',
  url: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/xQYiXsheRCDBA39DOrmaw1aSpbk.jpg',
  score: 9.7,
}

export default metaData
