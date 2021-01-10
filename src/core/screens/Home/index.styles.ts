import { css } from '@emotion/react'

export const wrapper = css`
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr;

  @media screen and (min-width: 1024px) {
    grid-template-rows: 80px 1fr;
  }
`

export const content = (_theme: Theme) => css`
  margin: 40px 0 20px 20px;

  @media screen and (min-width: 1024px) {
    margin: 20px 0 20px 20px;
  }
`

export const footer = css`
  background: rgba(255, 255, 255, .7);
  backdrop-filter: blur(4px);
  bottom: 0;
  height: 60px;
  position: sticky;
  display: flex;
  justify-content: space-around;

  @media screen and (min-width: 1024px) {
    height: 80px;
    margin-left: 20px;
    align-items: center;
    grid-row: 1 / span 1;
    top: 0;
    justify-content: flex-start;
    gap: 1em;
  }
`

export default {
  wrapper,
  footer,
  content,
}
