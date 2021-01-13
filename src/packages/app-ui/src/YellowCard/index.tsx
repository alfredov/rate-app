/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/react'

import styles from './index.styles'

export type Props = {
  width?: number,
  height?: number,
  onClick: () => void,
  children: React.ReactNode,
}

const YellowCard: React.FC<Props> = ({
  children,
  onClick,
  width,
  height,
}) => (
  <div
    css={(theme: any) => styles.card({ theme, width, height })}
    role="button"
    tabIndex={0}
    onClick={onClick}
  >
    {children}
  </div>
)

export default YellowCard
