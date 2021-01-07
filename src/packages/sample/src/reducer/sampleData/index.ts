import { createReducer } from 'typesafe-actions'
import { combineReducers } from 'redux'

import { fetchSampleData } from '../../actions'

import {
  TSampleData,
  TFetchSampleDataAction as TAction,
} from '../../schemas'

const { request, success, cancel, failure } = fetchSampleData

const data = createReducer<TSampleData[], TAction>([])
  .handleAction([failure, cancel], () => [])
  .handleAction(success, (_state, action) => action.payload)

const error = createReducer<Error | null, TAction>(null)
  .handleAction(failure, (_state, action) => action.payload)
  .handleAction([request, cancel], () => null)

const loaded = createReducer<boolean, TAction>(false)
  .handleAction(success, () => true)
  .handleAction([request, failure, cancel], () => false)

const loading = createReducer<boolean, TAction>(false)
  .handleAction(request, () => true)
  .handleAction([failure, success, cancel], () => false)

const module = combineReducers({
  data,
  error,
  loaded,
  loading,
})
// tslint:disable-next-line:no-console
console.log({ module })
export default module
