import { combineReducers } from 'redux'
import { StateType } from 'typesafe-actions'

import sampleData from './sampleData'

export const REDUCER_INDEX = 'sample'

const sampleReducer = combineReducers({
  sampleData: sampleData || {},
})

export const registerReducer = (reducers: {}) => ({
  ...reducers,
  [REDUCER_INDEX]: sampleReducer,
})

export interface RootState {
  [REDUCER_INDEX]: StateType<typeof sampleReducer>
}

export default sampleReducer
