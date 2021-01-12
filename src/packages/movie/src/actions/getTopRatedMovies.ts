import { createAsyncAction } from 'typesafe-actions'

import { TtopRatedMovie } from '../schemas'

type TRequest = {
  page: number,
}

export default createAsyncAction(
  'MOVIE/GET_TOP_RATED_MOVIES_REQUEST',
  'MOVIE/GET_TOP_RATED_MOVIES_SUCCESS',
  'MOVIE/GET_TOP_RATED_MOVIES_FAILURE',
  'MOVIE/GET_TOP_RATED_MOVIES_CANCEL',
)<TRequest, TtopRatedMovie[], string, undefined>()
