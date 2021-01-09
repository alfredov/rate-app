import { css } from '@emotion/react'

export const card = css`
  border-radius: 6px;
  display: grid;
  grid-template-columns: 10px 8fr 2fr 30px 10px;
  grid-template-rows: 10px 30px 8fr 2fr 10px;
  max-width: 140px;
  max-height: 210px;
  &:hover {
    cursor: pointer;
  }
`
export const image = css`
  width: 100%;
  object-fit: cover;
  grid-row: 1 / -1;
  grid-column: 1 / -1;
  border-radius: 6px;
`

export const score = (theme: Theme) => css`
  z-index: 2;
  color: ${theme.palette.common.white};
  font-size: 1rem;
  grid-row: 2 / 1 span;
  grid-column: 4 / 1 span;
  background-color: ${theme.palette.primary.main};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 .2rem;
`

export const info = (theme: Theme) => css`
  color: ${theme.palette.common.white};
  font-size: 14px;
  grid-column: 2 / -1;
  grid-row: 4 / 1 span;
  text-transform: uppercase;
`

export default {
  card,
  image,
  score,
  info,
}
