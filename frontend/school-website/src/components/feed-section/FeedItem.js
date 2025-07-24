import React from 'react'

const FeedItem = ({ item }) => {
  return (
    <div className='feed-item'>
      <h3>{item.title}</h3>
      <img src={`/images/${item.img}.jpg`}alt="siurek" />
    </div>
  )
}

export default FeedItem