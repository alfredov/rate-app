/**  @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/react'

import styles from './index.styles'

export type Props = {
  score: number,
  url: string,
  title: string,
  releaseYear: string,

  onClick: () => void,
}

const CardScore: React.FC<Props> = ({ score, url, title, releaseYear, onClick }) => (
  <article css={styles.card} role="button" tabIndex={0} onClick={onClick}>
    <img css={styles.image} alt="title" src={url} />
    <span css={(theme: any) => styles.score(theme)}>{score}</span>
    <div css={(theme: any) => styles.info(theme)}>
      <span>{releaseYear}</span>
      <h3>{title}</h3>
    </div>
  </article>
)

export default CardScore
