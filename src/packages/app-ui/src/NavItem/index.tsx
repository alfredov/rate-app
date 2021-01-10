/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/react'

import Movies from './icons/Movies'
import MoviesSelected from './icons/MoviesSelected'
import Tv from './icons/Tv'
import TvSelected from './icons/TvSelected'
import styles from './index.styles'

type Icon = 'movie' | 'tv'

export type Props = {
  selected: boolean,
  icon?: Icon,
  children: React.ReactNode,
  onClick?: () => void,
}

const getIcon = (icon: Icon, selected: boolean) => {
  switch (icon) {
    case 'movie': {
      return selected ? <MoviesSelected /> : <Movies />
    }
    case 'tv': {
      return selected ? <TvSelected /> : <Tv />
    }
    default: return null
  }
}

const NavItem: React.FC<Props> = ({ children, selected, icon, onClick }) => (
  <span
    role="button"
    tabIndex={0}
    onClick={onClick}
    css={(theme: any) => styles.wrapper({ selected, theme })}
  >
    {icon && getIcon(icon, selected)}
    <span>
      {children}
    </span>
  </span>
)

export default NavItem
