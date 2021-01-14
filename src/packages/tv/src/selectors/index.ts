import { RootState } from '../reducer'
import { REDUCER_INDEX } from '../constants'

export const getPopularSeries = (state: RootState) => state[REDUCER_INDEX].getPopularSeries
