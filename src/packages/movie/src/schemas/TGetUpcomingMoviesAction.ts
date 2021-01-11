import { ActionType } from 'typesafe-actions'

import { getUpcomingMovies } from '../actions'

export type TGetUpcomingMoviesAction = ActionType<typeof getUpcomingMovies>
