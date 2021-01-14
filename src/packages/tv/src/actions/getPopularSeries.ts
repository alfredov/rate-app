import { createAsyncAction } from 'typesafe-actions'

import { TvSerie } from '../schemas'

export default createAsyncAction(
  'TV/GET_POPULAR_SERIES_REQUEST',
  'TV/GET_POPULAR_SERIES_SUCCESS',
  'TV/GET_POPULAR_SERIES_FAILURE',
  'TV/GET_POPULAR_SERIES_CANCEL',
)<{ page: number }, TvSerie[], string, undefined>()
