
import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import LargeCardPaginator, { Props }  from './index'

const metaData: Meta = {
  title: 'app-ui/LargeCardPaginator',
  component: LargeCardPaginator,
}

const Template: Story<Props> = props => <LargeCardPaginator {...props} />
export const Primary = Template.bind({})

Primary.args = {
  title: 'TV Series',
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
