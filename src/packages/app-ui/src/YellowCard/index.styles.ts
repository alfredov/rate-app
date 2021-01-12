import { css } from '@emotion/react'

export const card = (theme: Theme) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FECB2F;
  border-radius: 6px;
  color: ${theme.palette.common.white};
  font-size: 20px;
  font-weight: 500;
  text-transform: uppercase;
  height: 210px;
  min-width: 140px;

  &:hover {
    cursor: pointer;
  }
`

export default {
  card,
}
