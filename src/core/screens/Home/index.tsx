/** @jsx jsx */

import React from 'react'
import { jsx } from '@emotion/react'
import { Link, useLocation } from 'react-router-dom'

import { NavItem } from 'app-ui'
import { PATH_BASE as MOVIE_PATH_BASE } from 'movie'
import { PATH_BASE as TV_PATH_BASE } from 'tv'
import t from 'format-message'

import styles from './index.styles'

export const Home: React.FC = ({ children }) => {
  const { pathname } = useLocation()

  return (
    <section css={styles.wrapper}>
      <section css={(theme: any) => styles.content(theme)}>
        {children}
      </section>
      <footer css={styles.footer}>
        <Link to={MOVIE_PATH_BASE}>
          <NavItem
            icon="movie"
            selected={pathname === MOVIE_PATH_BASE}
          >
            {t('Movies')}
          </NavItem>
        </Link>
        <Link to={TV_PATH_BASE}>
          <NavItem
            icon="tv"
            selected={pathname === TV_PATH_BASE}
          >
            {t('Tv')}
          </NavItem>
        </Link>
      </footer>
    </section>
  )
}

export default Home
