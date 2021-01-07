import { css } from '@emotion/react'

export const wrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 140px;
  height: 210px;
`

export const card = css`
  width: 100%;
  height: 100%;
  &:hover {
    cursor: pointer;
  }
`
export const image = css`
  width: 100%;
`

export default {
  card,
  image,
  wrapper,
}
