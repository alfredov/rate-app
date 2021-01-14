import React, { memo, useEffect } from 'react'
import { connect } from 'react-redux'
import t from 'format-message'

import { CardPaginator, Card } from 'app-ui'

import { RootState } from '../../../reducer'
import { getPopularSeries as selector } from '../../../selectors'
import { getPopularSeries as action } from '../../../actions'

type Props =
  ReturnType<typeof mapStateToProps>
  & typeof mapDispatchToProps
  & { cancel: () => void }

export const PopularSeries: React.FC<Props> = ({
  loading,
  tvSeries,
  cancel,
  getPopularSeries,
}) => {
  useEffect(() => {
    getPopularSeries({ page: 1 })
    return cancel
  }, [])

  const handlePaginator = (pageNumber: number) => getPopularSeries({ page: pageNumber })

  return (
    <div>
      <CardPaginator
        fetchMoreTitle={loading ? t('loading') : t('more')}
        onPaginate={handlePaginator}
        title={t('Popular')}
      >
        {tvSeries.map((tvSerie, index) =>
          <Card
            key={index}
            title={tvSerie.title}
            image={tvSerie.posterPath}
            onClick={() => null}
          />,
        )}
      </CardPaginator>
    </div>
  )
}

const mapStateToProps = (state: RootState) => ({
  loading: selector(state).loading,
  tvSeries: selector(state).data,
})

const mapDispatchToProps = ({
  getPopularSeries: action.request,
  cancel: action.cancel,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(memo(PopularSeries))
