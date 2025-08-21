import React, { useState } from 'react'
import './photoGalleryItem.css'

const GalleryItem = ({ setShowSwiper, item, length, idx }) => {

  const height = length * 330;

  const handleClick = () => {
    setShowSwiper(item.folder);
  }


  return (
    <>
      <div className='flip-card' onClick={handleClick}>

        <div className='card-inner'>

          <div className='front-side' style={{
            // backgroundImage: `url(/static/images/gallery/${item.folder}/${item.img}.jpg)`,
            backgroundImage: 'url(/kids1.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '100%'
          }}>
          </div>
  
          <div className='back-side'>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
  
        </div>
      </div>
    </>
  )
}

export default GalleryItem