import { css } from '@emotion/react'

const wrapper = css`
  display: flex;
`

export const title = (theme: Theme) => css`
  font-size: 18px;
  font-weight: bold;
  padding-bottom: 20px;
  color: ${theme.palette.text.secondary}
`

export default {
  wrapper,
  title,
}
