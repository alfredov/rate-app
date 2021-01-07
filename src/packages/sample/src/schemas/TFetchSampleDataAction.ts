import { ActionType } from 'typesafe-actions'

import { fetchSampleData } from '../actions'

type TFetchSampleDataAction = ActionType<typeof fetchSampleData>

export default TFetchSampleDataAction
