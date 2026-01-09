import React, { useState } from 'react'
import './photoGalleryItem.css'
import useInView from '../../hooks/useInView';

const GalleryItem = ({ setShowSwiper, item, length, idx }) => {

  const height = length * 330;

  const handleClick = () => {
    setShowSwiper(item.folder);
  }

  const [ref, isVisible] = useInView({ threshold: 0.2 });
  
  return (
    <>
      <div ref={ref} className={`flip-card ${isVisible ? 'visible' : ''}`} onClick={handleClick}>

        <div className='card-inner' style={{
            // backgroundImage: `url(/static/images/gallery/${item.folder}/${item.img}.jpg)`,
            backgroundImage: 'url(/paweldobry.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '100%'
          }}>
  
          <div className='description'>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
  
        </div>
      </div>
    </>
  )
}

export default GalleryItem