import { ActionType } from 'typesafe-actions'

import { getTopRatedMovies } from '../actions'

export type TGetTopRatedMoviesAction = ActionType<typeof getTopRatedMovies>
