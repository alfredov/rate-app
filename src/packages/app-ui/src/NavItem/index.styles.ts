import { css } from '@emotion/react'

type Params = { theme: Theme, selected: boolean }

const borderBottom = (theme: Theme) => css`
  border-bottom: 4px ${theme.palette.primary.main} solid;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
`

export const wrapper = ({ selected, theme }: Params) => css`
  color: ${selected ? theme.palette.primary.main : theme.palette.text.light};
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 125px;
  height: 49px;
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
  }

  @media screen and (min-width: 1024px) {
    color: ${selected ? theme.palette.text.secondary : theme.palette.text.light};
    ${selected && borderBottom(theme)}
    justify-content: flex-start;
    width: 58px;
    height: 33px;

    > svg {
      display: none;
    }
  }
`

export default {
  wrapper,
}
