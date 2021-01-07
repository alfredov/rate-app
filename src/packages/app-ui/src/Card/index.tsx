/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/react'

import styles from './index.styles'

export type Props = {
  title: string,
  image: string,
  onClick: () => void,
}

const Card: React.FC<Props> = ({ title, image, onClick }) => (
  <article css={styles.wrapper}>
    <div css={styles.card} role="button" tabIndex={0} onClick={onClick}>
      <img css={styles.image} src={image} alt={title} />
    </div>
    <h3>{title}</h3>
  </article>
)

export default Card
