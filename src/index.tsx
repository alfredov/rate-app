import React from 'react'
import ReactDOM from 'react-dom'

import {
  routes as sampleRoutes,
  epics as sampleEpics,
  registerReducer as sampleReducer,
} from 'sample'

import { routes as movieRoutes } from 'movie'
import { App } from './core'

const routes = [
  ...sampleRoutes,
  ...movieRoutes,
]

const epics = [
  ...sampleEpics,
]

const reducers = [
  sampleReducer,
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
