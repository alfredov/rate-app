import React from 'react'
import ReactDOM from 'react-dom'

import {
  routes as sampleRoutes,
  epics as sampleEpics,
  registerReducer as sampleReducer,
} from 'sample'

import {
  routes as movieRoutes,
  epics as movieEpics,
  registerReducer as movieReducer,
} from 'movie'

import {
  routes as tvRoutes,
  epics as tvEpics,
  registerReducer as tvReducer,
} from 'tv'

import { App } from './core'

const routes = [
  ...sampleRoutes,
  ...movieRoutes,
  ...tvRoutes,
]

const epics = [
  ...sampleEpics,
  ...movieEpics,
  ...tvEpics,
]

const reducers = [
  sampleReducer,
  movieReducer,
  tvReducer,
]

const render = () => ReactDOM.render(
  <React.StrictMode>
    <App
      actions={{}}
      reducers={reducers}
      epics={epics}
      routes={routes}
    />
  </React.StrictMode>,
  document.getElementById('root'),
)

render()
