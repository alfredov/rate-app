import { ActionType } from 'typesafe-actions'

import { getPopularSeries } from '../actions'

export type TGetPopularSeriesAction = ActionType<typeof getPopularSeries>
