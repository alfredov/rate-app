import { ActionsObservable } from 'redux-observable'
import { isActionOf } from 'typesafe-actions'
import { filter, switchMap, mergeMap } from 'rxjs/operators'
import { Observable, of } from 'rxjs'

import { TGetPopularSeriesAction as TAction } from '../../schemas'
import { getPopularSeries as action } from '../../actions'
import { PATH_IMAGES_500_BASE } from '../../constants'

type APIResponse = {
  results: {
    backdrop_path: string,
    name: string,
    vote_average: number,
  }[],
}

const url = `${process.env.API_URL}/tv/popular?api_key=${process.env.API_KEY}&language=en`

export default (
  action$: ActionsObservable<TAction>,
  _state: any,
  { getJSON }: TEpicDependencies,
) => action$.pipe(
  filter(isActionOf(action.request)),
  switchMap(({ payload }) =>
    (getJSON(`${url}&page=${payload.page}`) as Observable<APIResponse>)
      .pipe(
        mergeMap(({ results }) => of(action.success(
          results.map(item => ({
            title: item.name,
            posterPath: `${PATH_IMAGES_500_BASE}/${item.backdrop_path}`,
            score: item.vote_average,
          })),
        ))),
      ),
  ),
)
