import React, { memo, useEffect } from 'react'
import { connect } from 'react-redux'

import { getUpcomingMovies } from '../../actions'

type Props = {
  cancel: () => void,
  fetchUpcomingMovies: typeof getUpcomingMovies.request,
}

export const MovieScreen: React.FC<Props> = ({ fetchUpcomingMovies, cancel }) => {
  useEffect(() => {
    fetchUpcomingMovies({ page: 1 })
  }, [])

  return (
    <section>
      <h1>Movies🍿</h1>
      <button onClick={() => fetchUpcomingMovies({ page: 1 })}>Upcoming movies</button>
    </section>
  )
}

export default connect(
  null,
  {
    fetchUpcomingMovies: getUpcomingMovies.request,
    cancel: getUpcomingMovies.cancel,
  },
)(memo(MovieScreen))
