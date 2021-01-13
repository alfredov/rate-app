/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/react'

import styles from './index.styles'

export type Props = {
  title: string,
  score: number,
  url: string,

  onClick: () => void,
}

const LargeCard: React.FC<Props> = ({ title, score, url, onClick }) => (
  <article css={styles.wrapper}>
    <div css={styles.imageWrapper} onClick={onClick} tabIndex={0} role="button">
      <img css={styles.image} src={url} alt={title} />
      <span css={(theme: any) => styles.score(theme)}>{score}</span>
    </div>
    <h4 css={(theme: any) => styles.title(theme)}>{title}</h4>
  </article>
)

export default LargeCard
