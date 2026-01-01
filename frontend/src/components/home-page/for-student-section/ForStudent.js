import React from 'react'
import './forStudent.css'
import { createRipple, clearRipple } from '../../../hooks/rippleEffect';
// dodac te zastępstwa

const ForStudent = () => {
  return (
    <section className='for-students-section'>
      <h2>Dla Uczniów</h2>
      <div className='button-container'>
        <button className='button ripple-button'  onMouseEnter={createRipple} onMouseLeave={clearRipple}>Zastępstwa</button>
        <button className='button ripple-button' onMouseEnter={createRipple} onMouseLeave={clearRipple}>Plan Lekcji</button>
        <button className='button ripple-button' onMouseEnter={createRipple} onMouseLeave={clearRipple}>Dziennik</button>
      </div>
    </section>
  )
}

export default ForStudent