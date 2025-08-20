import React from 'react'
import { Link } from 'react-router-dom'

const FeedPageItem = React.memo(({ item }) => {
  return (
    <div className='feed-page-item'>
      <div className='card-image-container' style={{
        // backgroundImage: `url(${item.img}?v=${Date.now()})`,
        // znowu sobie odkomentuj
        backgroundImage: 'url(/kids1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        <div className='date-container'>
          {new Date(item.date).toLocaleDateString('pl-PL')}
        </div>
      </div>
      <div className='card-desctiption-container'>
        <h3>{item.title}</h3>
        <div className='description'>
          {
            item.description.length > 80 ? item.description.slice(0, 80) + '...' : item.description 
          }
        </div>
      </div>
      <div className='card-footer-container'>
        <h4>{item.author}</h4>
        <Link to={`/post/${item.id}`} className='see-more-button'>więcej</Link>
      </div>
    </div>
  )
})

export default FeedPageItem