import { createAsyncAction } from 'typesafe-actions'
import { TSampleData } from '../schemas'

export default createAsyncAction(
  'SAMPLE/FETCH_SAMPLE_REQUEST',
  'SAMPLE/FETCH_SAMPLE_SUCCESS',
  'SAMPLE/FETCH_SAMPLE_FAILURE',
  'SAMPLE/FETCH_SAMPLE_CANCEL',
)<undefined, TSampleData[], Error, undefined>()
