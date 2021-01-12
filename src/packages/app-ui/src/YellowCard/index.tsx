/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/react'

import styles from './index.styles'

export type Props = {
  onClick: () => void,
  children: React.ReactNode,
}

const YellowCard: React.FC<Props> = ({ children, onClick }) => (
  <div css={(theme: any) => styles.card(theme)} role="button" tabIndex={0} onClick={onClick}>
    {children}
  </div>
)

export default YellowCard
