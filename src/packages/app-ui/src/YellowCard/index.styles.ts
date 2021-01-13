import { css } from '@emotion/react'

type Params = { theme: Theme } & { width?: number, height?: number }

export const card = (params: Params) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FECB2F;
  border-radius: 6px;
  color: ${params.theme.palette.common.white};
  font-size: 20px;
  font-weight: 500;
  text-transform: uppercase;
  height: ${params.height ? params.height : 210}px;
  min-width: ${params.width ? params.width : 140}px;

  &:hover {
    cursor: pointer;
  }
`

export default {
  card,
}
