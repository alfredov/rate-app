import { ActionsObservable } from 'redux-observable'
import { isActionOf } from 'typesafe-actions'
import { filter, debounceTime, mapTo } from 'rxjs/operators'

import { fetchSampleData as action } from '../../actions'
import { TFetchSampleDataAction as TAction } from '../../schemas'

export default (
  action$: ActionsObservable<TAction>,
) => action$.pipe(
  filter(isActionOf(action.request)),
  debounceTime(1000),
  mapTo(action.success([
    {
      id: 0,
      name: 'sample1',
    },
    {
      id: 1,
      name: 'sample2',
    },
  ])),
)
