import { combineReducers } from 'redux'
import { StateType } from 'typesafe-actions'

import getPopularSeries from './getPopularSeries'
import getTopRatedSeries from './getTopRatedSeries'
import { REDUCER_INDEX } from '../constants'

const tvReducer = combineReducers({
  getPopularSeries,
  getTopRatedSeries,
})

export const registerReducer = (reducers: {}) => ({
  ...reducers,
  [REDUCER_INDEX]: tvReducer,
})

export interface RootState {
  [REDUCER_INDEX]: StateType<typeof tvReducer>
}

export default tvReducer
