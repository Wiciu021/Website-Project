import React from 'react'
import './feedItem.css'

const FeedItem = ({ item }) => {
  return (
    <div className='feed-item' style={{
      backgroundImage: `url(/images/${item.img}.jpg)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      <div className='description-container'>
        <h3>{item.title}</h3>
      </div>
    </div>
  )
}

export default FeedItem