import { lazy } from 'react'

import { PATH_HOME } from './constants'

export default [
  {
    path: PATH_HOME,
    component: lazy(() => import(/* webpackChunkName: 'sample' */ './screens/HomeScreen')),
  },
] as TRoute []
