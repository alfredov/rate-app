/** @jsx jsx */
import React, { memo, useEffect } from 'react'
import { jsx } from '@emotion/react'
import { connect } from 'react-redux'
import t from 'format-message'

import { Card, CardPaginator, CardScode } from 'app-ui'

import { RootState } from '../../reducer'
import {
  getUpcomingMovies as getUpcomingMoviesSelector,
  getTopRatedMovies as getTopRatedMoviesSelector,
} from '../../selectors'
import { getUpcomingMovies, getTopRatedMovies } from '../../actions'
import { TMovie, TtopRatedMovie } from '../../schemas'
import styles from './index.styles'

type Props = {
  loading: boolean,
  topRatedMoviesLoading: boolean,
  movies: TMovie[],
  topRatedMovies: TtopRatedMovie[],
  fetchUpcomingMovies: typeof getUpcomingMovies.request,
  fetchTopRatedMovies: typeof getTopRatedMovies.request,
  cancelFetchTopRatedMovies: () => void,
  cancel: () => void,
}

export const MovieScreen: React.FC<Props> = ({
  fetchUpcomingMovies,
  fetchTopRatedMovies,
  topRatedMovies,
  topRatedMoviesLoading,
  cancelFetchTopRatedMovies,
  loading,
  movies,
  cancel,
}) => {
  useEffect(() => {
    fetchUpcomingMovies({ page: 1 })
    fetchTopRatedMovies({ page: 1 })
    return () => {
      cancel()
      cancelFetchTopRatedMovies()
    }
  }, [])

  const fetchMore = (pageNumber: number) => fetchUpcomingMovies({ page: pageNumber })
  const fetchMoreTopRated = (pageNumber: number) => fetchTopRatedMovies({ page: pageNumber })

  return (
    <section>
      <CardPaginator
        title={t('Upcoming')}
        fetchMoreTitle={loading ? t('loading') : t('more')}
        onPaginate={fetchMore}
      >
        {movies.map((movie, index) =>
          <Card
            key={index}
            image={movie.posterPath}
            title={movie.title}
            onClick={() => null}
          />,
        )}
      </CardPaginator>
      <div css={styles.topRated}>
        <CardPaginator
          title={t('Top Rated')}
          fetchMoreTitle={topRatedMoviesLoading ? t('loading') : t('more')}
          onPaginate={fetchMoreTopRated}
        >
          {topRatedMovies.map((movie, index) => (
            <CardScode
              key={index}
              onClick={() => null}
              releaseYear={movie.releaseDate}
              score={movie.score}
              title={movie.title}
              url={movie.posterPath}
            />
          ))}
        </CardPaginator>
      </div>
    </section>
  )
}

export default connect(
  (state: RootState) => ({
    loading: getUpcomingMoviesSelector(state).loading,
    movies: getUpcomingMoviesSelector(state).data,
    topRatedMoviesLoading: getTopRatedMoviesSelector(state).loading,
    topRatedMovies: getTopRatedMoviesSelector(state).data,
  }),
  {
    fetchUpcomingMovies: getUpcomingMovies.request,
    fetchTopRatedMovies: getTopRatedMovies.request,
    cancelFetchTopRatedMovies: getTopRatedMovies.cancel,
    cancel: getUpcomingMovies.cancel,
  },
)(memo(MovieScreen))
