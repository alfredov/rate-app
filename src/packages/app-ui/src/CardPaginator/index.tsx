/** @jsx jsx */

import React, { useState } from 'react'
import { jsx } from '@emotion/react'

import YellowCard from '../YellowCard'
import styles from './index.styles'

export type Props = {
  title: string,
  fetchMoreTitle: string,
  children: React.ReactNode,
  onPaginate: (pageNumber: number) => void,
}

const CardPaginator: React.FC<Props> = ({ children, onPaginate, fetchMoreTitle, title }) => {
  const [page, setPage] = useState(1)
  const pageHandler = () => {
    setPage(page + 1)
    onPaginate(page + 1)
  }

  return (
    <div>
      <h4 css={(theme: any) => styles.title(theme)}>{title}</h4>
      <div css={styles.wrapper}>
        {children}
        <YellowCard onClick={pageHandler}>{fetchMoreTitle}</YellowCard>
      </div>
    </div>
  )
}

export default CardPaginator
