
import React from 'react'
import { Global } from '@emotion/react'

import styles from './index.styles'

const Site = ({ children }: any) => (
  <main role="main">
    <Global styles={styles.main} />
    {children}
  </main>
)

export default React.memo(Site)
