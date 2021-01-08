import { css } from '@emotion/react'

export const wrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const card = css`
  width: 140px;
  height: 210px;
  &:hover {
    cursor: pointer;
  }
`
export const image = css`
  border-radius: 6px;
  width: 100%;
`

export const title = (theme: Theme) => css`
  margin-top: 6px;
  text-align: center;
  color: ${theme.palette.text.primary};
  font-weight: bold;
  font-size: 1rem;
`

export default {
  card,
  image,
  wrapper,
  title,
}
