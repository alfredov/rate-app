import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
import t from 'format-message'
import { Button } from 'app-ui'

import { getSampleData } from '../../selectors'
import { RootState } from '../../reducer'
import { fetchSampleData as fetchSampleDataAction } from '../../actions'
import { TSampleData } from '../../schemas'

type Props = {
  loading: boolean,
  items: TSampleData[],
  fetchData: () => void,
  cancelFetchData: () => void,
}

export const HomeScreen: React.FC<Props> = ({
  loading,
  items,
  fetchData,
  cancelFetchData,
}) => {
  useEffect(() => {
    fetchData()
    return cancelFetchData
  }, [fetchData, cancelFetchData])

  return (
    <Fragment>
      <div>
        <h1>Home Screen</h1>
        <h2>{t('Hello everybody')}</h2>
        <Button>Fetch again</Button>
      </div>
      {loading ? (
        <h2>Loading..</h2>
      ) : (
        <ul>
          {items.map(item =>
            <li key={item.id}>{item.name}</li>,
          )}
        </ul>
      )}
    </Fragment>
  )
}

export default connect(
  (state: RootState) => ({
    loading: getSampleData(state).loading,
    items: getSampleData(state).data,
  }),
  {
    fetchData: fetchSampleDataAction.request,
    cancelFetchData: fetchSampleDataAction.cancel,
  },
)(React.memo(HomeScreen))
