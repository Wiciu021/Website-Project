import React from 'react'
import FeedItem from './FeedItem'
import feedData from '../../Data/feed-data'
import './feed.css'

const Feed = () => {
  return (
    <section className='feed-section'>
      <h2>Aktualności</h2>
      <div className='feed-container'>
        {
          feedData && feedData.length ? feedData.slice(-3).map(item => <FeedItem item={item}/>) : null
        }
      </div>
    </section>
  )
}

export default Feed