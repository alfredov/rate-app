/** @jsx jsx */

import React from 'react'
import { jsx } from '@emotion/react'
import { Link } from 'react-router-dom'

import { NavItem } from 'app-ui'
import { PATH_BASE as MOVIE_PATH_BASE } from 'movie'

import styles from './index.styles'

export const Home: React.FC = ({ children }) => (
  <section css={styles.wrapper}>
    <section css={(theme: any) => styles.content(theme)}>
      {children}
    </section>
    <footer css={styles.footer}>
      <Link to={MOVIE_PATH_BASE}>
        <NavItem icon="movie" selected>Movies</NavItem>
      </Link>
      <Link to="/AV">
        <NavItem icon="tv" selected={false}>Tv</NavItem>
      </Link>
    </footer>
  </section>
)

export default Home
