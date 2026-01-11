import React from 'react'
import FeedPage from '../display-feed/FeedPage'
import './generalFeed.css'

const GeneralFeedPage = ({ feedData }) => {
  return (
    <section className='general-feed-section'><FeedPage feedData={feedData} title={'Aktualnosci'} /></section>
  )
}

export default GeneralFeedPage