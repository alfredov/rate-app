/** @jsx jsx */
import React, { memo, useEffect } from 'react'
import { jsx } from '@emotion/react'
import { connect } from 'react-redux'

import { Card } from 'app-ui'

import { RootState } from '../../reducer'
import { getUpcomingMovies as getUpcomingMoviesSelector } from '../../selectors'
import { getUpcomingMovies } from '../../actions'
import { TMovie } from '../../schemas'
import styles from './index.styles'

type Props = {
  loading: boolean,
  movies: TMovie[],
  fetchUpcomingMovies: typeof getUpcomingMovies.request,
  cancel: () => void,
}

export const MovieScreen: React.FC<Props> = ({ fetchUpcomingMovies, loading, movies, cancel }) => {
  useEffect(() => {
    fetchUpcomingMovies({ page: 1 })
    return cancel
  }, [])

  return (
    <section>
      <h1>Movies🍿</h1>
      {loading && <h3>Loading..</h3>}
      <div css={styles.cardWrapper}>
        {movies.map((movie, index) =>
          <Card key={index} image={movie.posterPath} title={movie.title} onClick={() => null} />,
        )}
      </div>
    </section>
  )
}

export default connect(
  (state: RootState) => ({
    loading: getUpcomingMoviesSelector(state).loading,
    movies: getUpcomingMoviesSelector(state).data,
  }),
  {
    fetchUpcomingMovies: getUpcomingMovies.request,
    cancel: getUpcomingMovies.cancel,
  },
)(memo(MovieScreen))
