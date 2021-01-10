import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'

import NavItem, { Props } from './index'

const metaData: Meta = {
  title: 'app-ui/NavItem',
  component: NavItem,
}

const Template: Story<Props> = props => <NavItem {...props} />
export const Primary = Template.bind({})
Primary.args = {
  selected: false,
  children: 'Movie',
  icon: 'movie',
}

export default metaData
