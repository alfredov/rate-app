import { RootState } from '../reducer'
import { REDUCER_INDEX } from '../constants'

export const getUpcomingMovies = (state: RootState) => state[REDUCER_INDEX].getUpcomingMovies

export const getTopRatedMovies = (state: RootState) => state[REDUCER_INDEX].getTopRatedMovies
