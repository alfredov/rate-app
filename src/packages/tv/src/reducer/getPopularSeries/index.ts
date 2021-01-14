
import { combineReducers } from 'redux'
import { createReducer } from 'typesafe-actions'

import { getPopularSeries } from '../../actions'
import { TvSerie, TGetPopularSeriesAction as TActions } from '../../schemas'

const { cancel, failure, request, success } = getPopularSeries

const data = createReducer<TvSerie[], TActions>([])
  .handleAction([failure, cancel], () => [])
  .handleAction(success, (state, action) => [...state, ...action.payload])

const error = createReducer<string | null, TActions>(null)
  .handleAction(failure, (_state, action) => action.payload)
  .handleAction([request, cancel], () => null)

const loaded = createReducer<boolean, TActions>(false)
  .handleAction(success, () => true)
  .handleAction([request, failure, cancel], () => false)

const loading = createReducer<boolean, TActions>(false)
  .handleAction(request, () => true)
  .handleAction([ failure, success, cancel], () => false)

export default combineReducers({
  data,
  error,
  loaded,
  loading,
})
