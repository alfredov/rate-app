import { css } from '@emotion/react'

export const global = css`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  body {
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    scroll-behavior: smooth;
  }
`

export const main = (theme: Theme) => css`
  background-color: ${theme.palette.background.default}
`

export default {
  main,
  global,
}
