import React from 'react'
import feedData from '../../Data/feed-data'
import FeedPageItem from '../feed-page/FeedPageItem'
import { IoChevronUpOutline } from 'react-icons/io5';
import './erasmusSection.css'
import '../feed-page/feedPage.css'

const ErasmusSection = () => {
  return (
    <section className='erasmus-section'>
      <div className='title-section'>
        <h1>Erasmus</h1>
      </div>
      <div className='erasmus-wrapper'>
        <div className='erasmus-grid' style={{
          // gridTemplateColumns: dataItem.length === 0 ? '1fr' : null
        }}>
          {
            feedData && feedData.length ?
            feedData.filter(dataItem => dataItem.category === 'Erasmus').map(dataItem => <FeedPageItem key={dataItem.id} item={dataItem}/>)
            : <p>No data to display</p>
          }
        </div>
      </div>
      {/* zrobic jeszcze zeby ten przycisk dzialal ale na razie nie robie bo zajmuje sie tylko designem cn */}
      <button className='scroll-to-top-button'><IoChevronUpOutline/></button>
    </section>
  )
}

export default ErasmusSection