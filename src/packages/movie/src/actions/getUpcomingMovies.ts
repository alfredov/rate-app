import { createAsyncAction } from 'typesafe-actions'

import { TGetUpcomingResponse } from '../schemas'

type TRequest = {
  page: number,
}

export default createAsyncAction(
  'MOVIE/GET_UPCOMING_MOVIES_REQUEST',
  'MOVIE/GET_UPCOMING_MOVIES_SUCCESS',
  'MOVIE/GET_UPCOMING_MOVIES_FAILURE',
  'MOVIE/GET_UPCOMING_MOVIES_CANCEL',
)<TRequest, TGetUpcomingResponse[], string, undefined>()
