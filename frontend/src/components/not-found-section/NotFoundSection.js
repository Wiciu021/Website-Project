import React from 'react'
import './notFoundSection.css'
import { Link } from 'react-router-dom'

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
      <Link to="/" className='return-button'>wróć</Link>
    </div>
  )
}

export default NotFoundSection