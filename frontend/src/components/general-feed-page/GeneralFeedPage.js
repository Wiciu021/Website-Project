import React from 'react'
import FeedPage from '../display-feed/FeedPage'

const GeneralFeedPage = ({ feedData }) => {
  return (
    <FeedPage feedData={feedData} title={'Aktualnosci'} />
  )
}

export default GeneralFeedPage