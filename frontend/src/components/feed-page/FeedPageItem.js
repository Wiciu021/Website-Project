import React from 'react'

const FeedPageItem = ({ item }) => {
  return (
    <div className='feed-page-item'>
      <div className='card-image-container' style={{
      backgroundImage: `url(/images/${item.img}.jpg)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      borderRadius: '10px'
    }}>
      </div>
      <div className='card-desctiption-container'>
        <h3>{item.title}</h3>
        <div className='desctiption'>
          {
            item.description.length > 100 ? item.description.slice(0, 100) + '...' : item.description 
          }
        </div>
      </div>
      <div className='card-footer-container'>
        <h4>{item.author}</h4>
        <button className='see-more-button'>więcej</button>
      </div>
    </div>
  )
}

export default FeedPageItem