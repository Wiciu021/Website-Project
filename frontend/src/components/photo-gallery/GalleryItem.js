import React from 'react'
import './photoGalleryItem.css'

const GalleryItem = ({ item, position, length, idx }) => {

  const height = length * 330;

  return (
    <>
      <div
          key={`dot-${item.id}`}
          className={`timeline-dot ${position === 0 ? 'left' : 'right'}`}
          style={{ top: `${((item.id - 1) * 300) + 100}px` }}
        />
      <div className={`timeline-item ${position === 0 ? 'left' : 'right'}`} style={{
        top: `${((item.id - 1) * 300) + 30}px` 
      }}>
        <div className='text-container'>
          <h4>{item.title}</h4>
          <p>{item.description}</p>
        </div>
        <img src={`/images/gallery/${item.img}.jpg` } alt="tu mialo byc zdjecie pozdro" />
      </div>
    </>
  )
}

export default GalleryItem