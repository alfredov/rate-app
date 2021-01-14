
import { PATH_BASE } from './constants'
import { lazy } from 'react'

export default [
  {
    path: PATH_BASE,
    component: lazy(() => import(/* webpackChunkName: 'tv' */ './screens/TvScreen')),
  },
] as TRoute[]
