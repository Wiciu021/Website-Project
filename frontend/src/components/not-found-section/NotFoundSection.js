import React from 'react'
import './notFoundSection.css'

const NotFoundSection = () => {
  return (
    <div className='not-found' style={{
      width: '100vw',
      height: 'calc(100vh - 55px)',
      backgroundImage: 'url(/paweldobry.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <p>Not Found Section</p>
      <button className='return-button'>wróć</button>
    </div>
  )
}

export default NotFoundSection