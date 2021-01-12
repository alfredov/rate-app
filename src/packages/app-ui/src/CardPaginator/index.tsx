/** @jsx jsx */

import React, { useState } from 'react'
import { jsx } from '@emotion/react'

import YellowCard from '../YellowCard'
import styles from './index.styles'

export type Props = {
  fetchMoreTitle: string,
  children: React.ReactNode,
  onPaginate: (pageNumber: number) => void,
}

const CardPaginator: React.FC<Props> = ({ children, onPaginate, fetchMoreTitle }) => {
  const [page, setPage] = useState(1)
  const pageHandler = () => {
    setPage(page + 1)
    onPaginate(page)
  }

  return (
    <div css={styles.wrapper}>
      {children}
      <YellowCard onClick={pageHandler}>{fetchMoreTitle}</YellowCard>
    </div>
  )
}

export default CardPaginator
