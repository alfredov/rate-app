/** @jsx jsx */

import React from 'react'
import { Global, jsx } from '@emotion/react'

import styles from './index.styles'

const Site = ({ children }: any) => (
  <main css={(theme: any) => styles.main(theme)} role="main">
    <Global styles={styles.global} />
    {children}
  </main>
)

export default React.memo(Site)
