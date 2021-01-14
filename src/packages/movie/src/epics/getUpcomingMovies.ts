import { ActionsObservable } from 'redux-observable'
import { isActionOf } from 'typesafe-actions'
import { filter, switchMap, mergeMap, catchError, takeUntil } from 'rxjs/operators'
import { of, Observable } from 'rxjs'
import { getLocale } from 'app-utils'

import { getUpcomingMovies as action } from '../actions'
import { TGetUpcomingMoviesAction as TAction, TMovie } from '../schemas'
import { PATH_IMAGES_500_BASE } from '../constants'

type APIResponse = {
  results: {
    title: string,
    poster_path: string,
  }[],
}

const locale = getLocale(navigator)
const url = `${process.env.API_URL}/movie/upcoming?api_key=${process.env.API_KEY}&language=${locale}`

export default (
  action$: ActionsObservable<TAction>,
  _state: any,
  { getJSON }: TEpicDependencies,
) => action$.pipe(
  filter(isActionOf(action.request)),
  switchMap(({ payload }) =>
    (getJSON(`${url}&page=${payload.page}`) as Observable<APIResponse>)
      .pipe(
        mergeMap(({ results }) => {
          const upcomingMovies: TMovie[] = results.map(item => ({
            posterPath: `${PATH_IMAGES_500_BASE}${item.poster_path}`,
            title: item.title,
          }))
          return of(action.success(upcomingMovies))
        }),
        catchError((error: Error) => of(action.failure(error.name))),
        takeUntil(action$.pipe(filter(isActionOf([action.request, action.cancel])))),
      ),
  ),
)
