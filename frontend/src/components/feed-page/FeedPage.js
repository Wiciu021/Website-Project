import React from 'react'
import './feedPage.css'
import feedData from '../../Data/feed-data'
import FeedPageItem from './FeedPageItem'
import './FeedPageItem'
import './feedPageItem.css'
import { IoChevronUpOutline } from 'react-icons/io5';

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
            feedData.map(feedItem => <FeedPageItem key={feedItem.id} item={feedItem}/>)
            : <p>No data to display</p>
          }
        </div>
      </div>
      {/* zrobic jeszcze zeby ten przycisk dzialal ale na razie nie robie bo zajmuje sie tylko designem cn */}
      <button className='scroll-to-top-button'><IoChevronUpOutline/></button>
    </section>
  )
}

export default FeedPage