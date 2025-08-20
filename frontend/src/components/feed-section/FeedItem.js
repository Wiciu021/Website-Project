import React from 'react'
import './feedItem.css'

const FeedItem = ({ item }) => {
  return (
    <div className='feed-item' style={{
      // backgroundImage: `url(/static/images/posts/${item.img}.jpg)`,
      // jak cos to odkomentuj ta linijke i zakomentuj ta druga zebys mogl te obrazki z ngx wczytac
      backgroundImage: 'url(/kids1.jpg)',
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