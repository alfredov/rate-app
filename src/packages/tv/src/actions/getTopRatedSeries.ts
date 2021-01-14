import { createAsyncAction } from 'typesafe-actions'

import { TvSerie } from '../schemas'

export default createAsyncAction(
  'TV/GET_TOP_RATED_SERIES_REQUEST',
  'TV/GET_TOP_RATED_SERIES_SUCCESS',
  'TV/GET_TOP_RATED_SERIES_FAILURE',
  'TV/GET_TOP_RATED_SERIES_CANCEL',
)<{ page: number }, TvSerie[], string, undefined>()
