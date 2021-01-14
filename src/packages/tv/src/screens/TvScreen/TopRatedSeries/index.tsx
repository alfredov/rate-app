import React, { memo, useEffect } from 'react'
import { connect } from 'react-redux'
import t from 'format-message'

import { LargeCardPaginator, LargeCard } from 'app-ui'

import { RootState } from '../../../reducer'
import { getTopRatedSeries as selector } from '../../../selectors'
import { getTopRatedSeries as action } from '../../../actions'

type Props =
  ReturnType<typeof mapStateToProps>
  & typeof mapDispatchToProps
  & { cancel: () => void }

export const PopularSeries: React.FC<Props> = ({
  loading,
  tvSeries,
  cancel,
  getTopRatedSeries,
}) => {
  useEffect(() => {
    getTopRatedSeries({ page: 1 })
    return cancel
  }, [])

  const handlePaginator = (pageNumber: number) => getTopRatedSeries({ page: pageNumber })

  return (
    <div>
      <LargeCardPaginator
        fetchMoreTitle={loading ? t('loading') : t('more')}
        onPaginate={handlePaginator}
        title={t('Top Rated')}
      >
        {tvSeries.map((tvSerie, index) =>
          <LargeCard
            key={index}
            title={tvSerie.title}
            url={tvSerie.posterPath}
            score={tvSerie.score}
            onClick={() => null}
          />,
        )}
      </LargeCardPaginator>
    </div>
  )
}

const mapStateToProps = (state: RootState) => ({
  loading: selector(state).loading,
  tvSeries: selector(state).data,
})

const mapDispatchToProps = ({
  getTopRatedSeries: action.request,
  cancel: action.cancel,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(memo(PopularSeries))
