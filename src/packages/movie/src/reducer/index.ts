import { combineReducers } from 'redux'
import { StateType } from 'typesafe-actions'

import getUpcomingMovies from './getUpcomingMovies'
import { REDUCER_INDEX } from '../constants'

const movieReducer = combineReducers({
  getUpcomingMovies,
})

export const registerReducer = (reducers: {}) => ({
  ...reducers,
  [REDUCER_INDEX]: movieReducer,
})

export interface RootState {
  [REDUCER_INDEX]: StateType<typeof movieReducer>
}

export default movieReducer
