import { ActionType } from 'typesafe-actions'

import { getTopRatedSeries } from '../actions'

export type TGetTopRatedSeriesAction = ActionType<typeof getTopRatedSeries>
