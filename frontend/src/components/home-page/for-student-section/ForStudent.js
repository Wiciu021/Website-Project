import React from 'react'
import './forStudent.css'
import { createRipple, clearRipple } from '../../../hooks/rippleEffect';

const ForStudent = () => {
  return (
    <section className='for-students-section'>
      <h2>Dla Uczniów</h2>
      <div className='button-container'>
        <a href="/api/zastepstwa/current" target="_blank" rel="noopener noreferrer" className='button ripple-button'  onMouseEnter={createRipple} onMouseLeave={clearRipple}>Zastępstwa</a>
        <button className='button ripple-button' onMouseEnter={createRipple} onMouseLeave={clearRipple}>Plan Lekcji</button>
        <button className='button ripple-button' onMouseEnter={createRipple} onMouseLeave={clearRipple}>Dziennik</button>
      </div>
    </section>
  )
}

export default ForStudent