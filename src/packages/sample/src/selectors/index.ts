import { RootState, REDUCER_INDEX } from '../reducer'

export const getSampleData = (state: RootState) => state[REDUCER_INDEX].sampleData
