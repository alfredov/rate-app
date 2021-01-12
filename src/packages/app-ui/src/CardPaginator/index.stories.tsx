
import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import CardPaginator, { Props }  from './index'

const metaData: Meta = {
  title: 'app-ui/CardPaginator',
  component: CardPaginator,
}

const Template: Story<Props> = props => <CardPaginator {...props} />
export const Primary = Template.bind({})

Primary.args = {
  title: 'Movie',
  fetchMoreTitle: 'More',
  children: (
    <div>
      <div>🍿</div>
      <div>🍿</div>
      <div>🍿</div>
    </div>
  ),
}

export default metaData
