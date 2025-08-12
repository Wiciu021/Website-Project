import React from 'react'
import './photoGalleryItem.css'

const GalleryItem = ({ setShowSwiper, item, position, length, idx }) => {

  const height = length * 330;

  const handleClick = () => {
    setShowSwiper(item.folder);
  }

  return (
    <>
      <div
          key={`dot-${item.id}`}
          className={`timeline-dot ${position === 0 ? 'left' : 'right'}`}
          style={{ top: `${((item.id - 1) * 300) + 100}px` }}
        />
      <div className={`timeline-item ${position === 0 ? 'left' : 'right'}`} style={{
        top: `${((item.id - 1) * 300) + 30}px` 
      }} onClick={handleClick}>
        <div className='text-container'>
          <h4>{item.title}</h4>
          <p>{item.description}</p>
        </div>
        <img src={`/static/images/gallery/${item.folder}/${item.img}.jpg`} alt={item.title} />
      </div>
    </>
  )
}

export default GalleryItem