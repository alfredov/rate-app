import { ActionsObservable } from 'redux-observable'
import { isActionOf } from 'typesafe-actions'
import { filter, switchMap, mergeMap, catchError, takeUntil } from 'rxjs/operators'
import { of, Observable } from 'rxjs'

import { getTopRatedMovies as action } from '../../actions'
import { TGetTopRatedMoviesAction as TAction, TtopRatedMovie } from '../../schemas'
import { PATH_IMAGES_500_BASE } from '../../constants'

type APIResponse = {
  results: {
    title: string,
    poster_path: string,
    vote_average: number,
    release_date: string,
  }[],
}

const url = `${process.env.API_URL}/movie/top_rated?api_key=${process.env.API_KEY}&language=en`

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
          const topRatedMovies: TtopRatedMovie[] = results.map(item => ({
            posterPath: `${PATH_IMAGES_500_BASE}${item.poster_path}`,
            title: item.title,
            releaseDate: item.release_date,
            score: item.vote_average,
          }))
          return of(action.success(topRatedMovies))
        }),
        catchError((error: Error) => of(action.failure(error.name))),
        takeUntil(action$.pipe(filter(isActionOf([action.request, action.cancel])))),
      ),
  ),
)
