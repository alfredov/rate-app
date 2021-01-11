import { lazy } from 'react'

import { PATH_BASE } from './constants'

export default [
  {
    path: PATH_BASE,
    component: lazy(() => import(/* webpackChunkName: 'movie' */ './screens/MovieScreen')),
  },
] as TRoute[]
