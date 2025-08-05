import React from 'react'
import './feedPage.css'
import feedData from '../../Data/feed-data'
import FeedPageItem from './FeedPageItem'
import './FeedPageItem'
import './feedPageItem.css'
const FeedPage = () => {
  return (
    <section className='feed-page-section page-section'>
      <div className='title-section'>
        <h1>Aktualności</h1>
      </div>
      <div className='feed-wrapper'>
        <div className='feed-grid'>
          {
            feedData && feedData.length ?
            feedData.map(feedItem => <FeedPageItem item={feedItem}/>)
            : <p>No data to display</p>
          }
        </div>
      </div>
    </section>
  )
}

export default FeedPage