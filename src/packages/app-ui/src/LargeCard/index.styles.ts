import { css } from '@emotion/react'

const wrapper = css`
  display: flex;
  flex-direction: column;
  width: 335px;
`

const title = (theme: Theme) => css`
  color: ${theme.palette.text.primary};
  text-transform: uppercase;
  font-weight: bold;
  margin-top: .6rem;
`

const imageWrapper = css`
  border-radius: 6px;
  width: 100%;
  height: 160px;
  display: grid;
  grid-template-columns: 1fr 30px 10px;
  grid-template-rows: 10px 30px 1fr;
  overflow: hidden;

  &:hover {
    cursor: pointer;
  }
`

const image = css`
  width: 100%;
  object-fit: cover;
  grid-column: 1 / -1;
  border-radius: 6px;
`

const score = (theme: Theme) => css`
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.palette.primary.main};
  color: ${theme.palette.common.white};
  font-weight: 500;
  grid-column: 2 / span 1;
`

export default {
  wrapper,
  title,
  image,
  score,
  imageWrapper,
}
